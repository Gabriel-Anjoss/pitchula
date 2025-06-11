import { useState } from "react";
import casalImg from './assets/neve.png';
import "./App.css";
import tristeImg from './assets/depay.png';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [currentImg, setCurrentImg] = useState(casalImg);
  const [hearts, setHearts] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const [showYesText, setShowYesText] = useState(false);
  const [showRestart, setShowRestart] = useState(false);

  const handleAddHeart = () => {
    setShowButtons(false);
    setCurrentImg(tristeImg); // altera a imagem
    const newHeart = {
      id: Date.now() + Math.random(),
      left: getRandomInt(10, 90),
      size: getRandomInt(20, 40),
      duration: getRandomInt(2, 4),
    };
    setHearts((prev) => [...prev, newHeart]);
    setShowRestart(true);
  };

  const handleYes = () => {
    setShowButtons(false);
    setShowYesText(true);
    setShowRestart(false);
  };

  const handleRestart = () => {
    setHearts([]);
    setShowButtons(true);
    setShowYesText(false);
    setShowRestart(false);
    setCurrentImg(casalImg);
  };

  return (
    <>
      <div className={`container ${showYesText ? 'modo-sim' : ''}`}>
        <div className="hero-content">
          {!showYesText && (
            <img
              src={currentImg}
              alt="Casal Dia dos Namorados"
              className="casal-img"
            />
          )}

          <div className="hero-text">
            <h1>Dia dos Namorados</h1>
            {!showYesText && <p className="subtitulo">Você é minha corinthiana?</p>}

            {showButtons && (
              <>
                <button onClick={handleYes}>sim 💞</button>
                <button onClick={handleAddHeart}>não, sou chatona</button>
              </>
            )}

            {!showButtons && !showYesText && (
              <>
                <p className="nao-frase">
                  eu sabia que você ia clicar aqui 🙄​
                </p>
                <button onClick={handleRestart}>botão de arrependimento</button>
              </>
            )}
          </div>
        </div>

        <div className="content">
          {showYesText && (
            <>
              <div className="hearts-bg">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className={`bg-heart heart-anim-${i % 4}`}>
                    ❤️
                  </span>
                ))}
              </div>

              <iframe
                style={{ borderRadius: "12px", marginTop: "24px" }}
                src="https://open.spotify.com/embed/track/6pk991Hvvwfb6A15zQKumu?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>

              <div className="yes-text">
                <p>
  Gabrielly acho que você nao tem nocao do quanto você é importante para mim, você é a minha corinthiana, 
  a minha melhor amiga, a minha namorada, a minha vida. Eu te amo muito e espero que possamos passar muitos dias dos namorados juntos. Você é tudo para mim e eu sou muito grato por ter você na minha vida. <br />Voce é meu lar 💞
  </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
