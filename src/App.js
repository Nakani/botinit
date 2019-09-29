import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adicione o Finn no seus contatos, e envie o código disponível no campo de mensagem do seu whatsApp.
        </p>
        <a
          className="App-link"
          href="https://api.whatsapp.com/send?phone=+14155238886&text=join found-differ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adicionar no Whats app
        </a>
      </header>
    </div>
  );
}

export default App;
