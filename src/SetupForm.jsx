import React from 'react';

export default function SetupForm() {
 return (
  <section className="container mx-auto flex justify-center">
   <form className="bg-white flex p-8 flex-col w-1/2">
    <h1 className="text-2xl">Setup Quiz</h1>
    <label htmlFor="NumberQ">Number Of Questions</label>
    <input type="number" id="NumberQ" placeholder="10" />

    <label htmlFor="category">Category</label>
    <select name="" id="category">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
    </select>

    <label htmlFor="difficulty">Select Difficulty</label>
    <select name="" id="difficulty">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
    </select>
   </form>
  </section>
 );
}
