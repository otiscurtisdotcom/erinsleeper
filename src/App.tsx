import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section>
      <div className='details'>
        <p>Erin Sleeper</p>
      </div>
      <div className='pictures'>
        <img width="720" src={`${process.env.PUBLIC_URL}/photos/0_1440.jpg`} />
        <img width="720" src={`${process.env.PUBLIC_URL}/photos/1_1440.jpg`} />
        <img width="720" src={`${process.env.PUBLIC_URL}/photos/2_1440.jpg`} />
        <img width="720" src={`${process.env.PUBLIC_URL}/photos/3_1440.jpg`} />
      </div>
    </section>
  );
}

export default App;
