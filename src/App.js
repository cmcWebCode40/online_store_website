import React from 'react';
import ThemeChanger from './ThemeChanger';
import './scss/styles.scss'


const App = () => {
  return (
    <div className="app">
      <h1>Online Shop</h1>
      <ThemeChanger />
      <p>lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem0lorem30lorem30lorem30l <br /> orem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30</p>
      <section>
        <div className="card">
          <h2>News Post One</h2>
          <p>lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem0lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30</p>
        </div>
        <div className="card">
          <h2>News Post Two</h2>
          <p>lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem0lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30</p>
        </div>
        <div className="card">
          <h2>News Post Three</h2>
          <p>lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem0lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30lorem30</p>
        </div>
      </section>
    </div>
  );
}

export default App;
