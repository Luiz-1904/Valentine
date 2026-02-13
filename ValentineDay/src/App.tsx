import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page-shell">
      <div className="texture" aria-hidden="true" />
      <div className="glow glow-top" aria-hidden="true" />
      <div className="glow glow-bottom" aria-hidden="true" />
      <div className="spark spark-left" aria-hidden="true" />
      <div className="spark spark-right" aria-hidden="true" />

      <section className="letter-system" aria-label="Sistema de carta">
        <p className="system-label">Para você</p>
        <div
          className={`envelope ${isOpen ? "envelope-open" : ""}`}
          aria-hidden="true"
        >
          <div className="envelope-flap" />
          <div className="envelope-body" />
          <span className="seal">❤</span>
        </div>
        <p className="system-hint">
          Toque no botão para abrir ou fechar a carta.
        </p>
        <button
          className="open-button"
          type="button"
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? "Fechar carta" : "Abrir carta"}
        </button>
      </section>

      <article
        className={`letter ${isOpen ? "letter-open" : ""}`}
        aria-label="Carta de amor"
      >
        <p className="letter-kicker">Cartinha para o meu amor</p>
        <p className="letter-date">14 de fevereiro de 2026</p>
        <h1>Para o amor da minha vida</h1>

        <p>Oi minha princesa, minha mulher, meu tudo,</p>
        <p>
          Eu queria fazer um site melhor mas eu não sabia fazer esse tipo de
          sistema. Aí a primeira coisa que eu quis fazer foi essa carta para
          você, eu não sou tão bom com presentes a mão e tô fazendo isso de
          madrugada (perdão pelo pt-br porco)
        </p>
        <p>
          Obrigado por transformar os meus dias em poesia: por me ouvir, por me
          escolher e por rir comigo das merdas que eu falo. E por estar sempre
          ao meu lado.
        </p>
        <p>
          Essa carta é apenas um lembrete do que eu sinto todos os dias: eu te
          amo profundamente, com calma, com certeza e com a vontade de te amar
          cada vez mais.
        </p>
        <p className="signature">Com todo o meu amor.</p>

        <section
          className="photo-templates"
          aria-label="Espaco para nossas fotos"
        >
          <h2>Nossos momentos</h2>
          <div className="photo-grid">
            <figure className="memory-card">
              <img
                className="photo-slot"
                src="/fotos/eueminhamulher.webp"
                alt="Eu e meu amor juntos"
              />
              <figcaption>Essa foto tá foda</figcaption>
            </figure>
            <figure className="memory-card">
              <img
                className="photo-slot"
                src="/fotos/eueminhamulher2.webp"
                alt="Nosso momento especial"
              />
              <figcaption>Amo você</figcaption>
            </figure>
            <figure className="memory-card">
              <img
                className="photo-slot"
                src="/fotos/eueminhamulher3.webp"
                alt="Mais um dia lindo ao seu lado"
              />
              <figcaption>A melhor companhia do mundo</figcaption>
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
}

export default App;
