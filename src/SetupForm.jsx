import React from 'react';
import { useGlobalContext } from './context';

export default function SetupForm() {
 const { handleSubmit, quiz, error, handleChange } = useGlobalContext();
 console.log(quiz);
 return (
  <section className="container mx-auto flex justify-center">
   <form onSubmit={handleSubmit} className="bg-white flex p-10 flex-col w-1/2  rounded-md">
    <h1 className="text-3xl font-bold pb-6">Setup Quiz</h1>
    <label htmlFor="NumberQ">Number Of Questions</label>
    <input
     onChange={handleChange}
     name="amount"
     className="bg-slate-200 px-4 py-1 rounded-md"
     type="number"
     id="NumberQ"
     placeholder="10"
    />

    <label className="pt-8" htmlFor="category">
     Category
    </label>
    <select
     onChange={handleChange}
     name="category"
     id="category"
     className="bg-slate-200 px-4 py-1 rounded-md">
     <option value="sport">sport</option>
     <option value="history">history</option>
     <option value="politics">politics</option>
    </select>

    <label className="pt-8" htmlFor="difficulty">
     Select Difficulty
    </label>
    <select
     onChange={handleChange}
     name="difficulty"
     id="difficulty"
     className="bg-slate-200 px-4 py-1 rounded-md">
     <option value="easy">easy</option>
     <option value="medium">medium</option>
     <option value="hard">hard</option>
    </select>

    <button className="bg-orange-400 px-4 py-2  mt-8 rounded-md">Start</button>
    {error && <p> can't generate questions, please try different options</p>}
   </form>
  </section>
 );
}
