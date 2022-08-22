import { useGlobalContext } from './context';

export default function Modal() {
 const { correct, questions, closeModal } = useGlobalContext();

 return (
  <section>
   <div className="flex flex-col bg-white p-10 rounded-md">
    <h1 className="text-2xl">Congrats!</h1>
    <p> You answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly</p>
   </div>
   <button onClick={closeModal} className="bg-orange-400 px-4 py-2  mt-8 rounded-md">
    Start
   </button>
  </section>
 );
}
