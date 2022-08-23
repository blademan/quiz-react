import { useGlobalContext } from './context';

export default function Modal() {
 const { correct, questions, closeModal } = useGlobalContext();

 return (
  <section className="bg-black/80 h-screen w-screen absolute  flex justify-center items-center ">
   <div className="bg-white p-10 text-center rounded-md z-10">
    <div className="flex flex-col items-center justify-center  ">
     <h1 className="text-2xl">Congrats!</h1>
     <p> You answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly</p>
    </div>
    <button onClick={closeModal} className="bg-orange-400 px-4 py-2  mt-8 rounded-md">
     Play Again
    </button>
   </div>
  </section>
 );
}
