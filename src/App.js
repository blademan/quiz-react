import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
import Ui from './Ui';

function App() {
 const { waiting, loading, questions, index, correct, checkAnswer, nextQuestion, isModal } =
  useGlobalContext();

 if (waiting) {
  return (
   <Ui>
    <SetupForm />
   </Ui>
  );
 }

 if (loading) {
  return (
   <Ui>
    <Loading />
   </Ui>
  );
 }
 const { question, incorrect_answers, correct_answer } = questions[index];
 const answers = [...incorrect_answers];
 const tempIndex = Math.floor(Math.random() * 4);
 if (tempIndex === 3) {
  answers.push(correct_answer);
 } else {
  answers.push(answers[tempIndex]);
  answers[tempIndex] = correct_answer;
 }

 return (
  <Ui>
   {isModal && <Modal />}
   <section className="bg-white p-10 rounded-md flex flex-col w-[90vw]">
    <p className="text-right text-green-500">
     correct answers : {correct}/{index}
    </p>

    <h2 className="text-2xl font-bold py-4" dangerouslySetInnerHTML={{ __html: question }} />
    <ul className="space-y-4 pt-6">
     {answers.map((answer, index) => (
      <li key={index}>
       <button
        onClick={() => checkAnswer(answer === correct_answer)}
        className="bg-blue-300 p-2 rounded w-full hover:bg-blue-500"
        dangerouslySetInnerHTML={{ __html: answer }}
       />
      </li>
     ))}
    </ul>
    <button
     onClick={nextQuestion}
     className="bg-orange-400 px-8 py-1 rounded mt-6 ml-auto hover:bg-orange-900">
     Next Question
    </button>
   </section>
  </Ui>
 );
}

export default App;
