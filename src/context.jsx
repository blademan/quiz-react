import React, { useContext, useState } from 'react';
import axios from 'axios';

const table = {
 sports: 21,
 history: 23,
 politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 const [waiting, setWaiting] = useState(true);
 const [loading, setLoading] = useState(false);
 const [questions, setQuestions] = useState([]);
 const [index, setIndex] = useState(0);
 const [correct, setCorrect] = useState(0);
 const [error, setError] = useState(false);
 const [quiz, setQuiz] = useState({
  amount: 10,
  category: 'sports',
  difficulty: 'easy',
 });

 const [isModal, setIsModal] = useState(false);

 const getQuestions = async (url) => {
  setLoading(true);
  setWaiting(false);
  const response = await axios(url).catch((error) => console.log(error));
  if (response) {
   const data = response.data.results;

   if (data.length > 0) {
    setQuestions(data);

    setLoading(false);
    setWaiting(false);
    setError(false);
   } else {
    setError(true);
    setWaiting(true);
   }
  } else {
   setWaiting(true);
  }
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const { amount, category, difficulty } = quiz;
  const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;

  getQuestions(url);
 };

 const nextQuestion = () => {
  setIndex((oldIndex) => {
   const index = oldIndex + 1;
   if (index > questions.length - 1) {
    openModal();
    return 0;
   } else {
    return index;
   }
  });
 };

 const openModal = () => {
  setIsModal(true);
 };

 const checkAnswer = (answer) => {
  if (answer) {
   setCorrect((oldState) => oldState + 1);
  }
  nextQuestion();
 };

 const closeModal = () => {
  setIsModal(false);
  setWaiting(true);
  setCorrect(0);
 };

 const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setQuiz({ ...quiz, [name]: value });
 };
 return (
  <AppContext.Provider
   value={{
    waiting,
    loading,
    questions,
    index,
    correct,
    error,
    handleSubmit,
    setIndex,
    nextQuestion,
    checkAnswer,
    isModal,
    closeModal,
    quiz,
    handleChange,
   }}>
   {children}
  </AppContext.Provider>
 );
};

export const useGlobalContext = () => {
 return useContext(AppContext);
};
