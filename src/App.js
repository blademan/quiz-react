import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
 return (
  <main className="bg-slate-200 h-screen flex mx-auto items-center justify-center">
   <SetupForm />
  </main>
 );
}

export default App;
