import { useState } from 'react';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </button>
      <h1>Feliz Aniversário, meu amor ❤️</h1>
      <img src="/fotoniver.jpg" alt="Nós dois" className="foto" />
      <div className="carta">
        <p>
          Hoje é o seu dia, mas sou eu quem celebra por ter você na minha vida.
          cada momento contigo é especial. Te amo para sempre! 💖
        </p>
      </div>
      <div className="coracoes">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="coraçao">❤️</span>
        ))}
      </div>
    </div>
  );
};

export default App;