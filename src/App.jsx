import { useState } from 'react';
import Header from '../src/componemts/Header';
import AuthContainer from '../src/componemts/AuthContainer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <AuthContainer />
      </main>
    </>
  );
}

export default App;
