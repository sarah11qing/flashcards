import { useState } from 'react';
import { appTitle, appSubtitle, cardSet } from './data';
import Card from './Card';
import './App.css';

function App() {
  
  const [cards, setCards] = useState(cardSet);
  const [curCardId, setCurCardId] = useState(0);
  const [showFront, setShowFront] = useState(true);

  const moveToPrevCard = ()  => {
    setCurCardId(prevId => {
      return prevId - 1 >= 0 ? prevId - 1 : cards.length - 1;
    });
    setShowFront(true);
  }

  function moveToNextCard() {
    setCurCardId(prevId => {
      return prevId + 1 < cards.length? prevId + 1 : 0;
    });
    setShowFront(true);
  }

  return (
    <div className="app">
      <div className="title">
        <h1>{appTitle}</h1>
        <h3>{appSubtitle}</h3>
        <h5>Number of cards: {cards.length}</h5>
      </div> 
      <Card 
        id={curCardId}
        front={cards[curCardId].front}
        back={cards[curCardId].back}
        level={cards[curCardId].level}
        face={{showFront, setShowFront}}
      />
      <div className="buttons">
        <button onClick={moveToPrevCard}>←</button>
        <button onClick={() => moveToNextCard()}>→</button>
      </div>
    </div>
  )
}

export default App;
