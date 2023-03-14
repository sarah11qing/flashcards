import { useState } from 'react';
import { appTitle, appSubtitle, cardSet } from './data';
import Card from './Card';
import './App.css';

function App() {
  
  const [cards, setCards] = useState(cardSet);
  const [curCardIndex, setCurCardIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);
  const [seen, setSeen] = useState(new Set());

  const moveToPrevCard = ()  => {
    if (curCardIndex == 0) {
      return;
    }
    setCurCardIndex(prevId => {
      return prevId - 1;
    });
    setShowFront(true);
  }

  function moveToNextCard() {
    if (curCardIndex == cards.length - 1) {
      return;
    }
    setCurCardIndex(prevId => {
      return prevId + 1;
    });
    setShowFront(true);
  }

  const shuffleCards = () => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCards(shuffledCards);
    setCurCardIndex(0);
    setShowFront(true);
  };

  // const moveToNextRandomCard = () => {
  //   let randomIndex = curCardIndex;
  //   while (seen.has(randomIndex)) {
  //     randomIndex = Math.floor(Math.random() * cards.length);
  //   }
  //   setCurCardIndex(randomIndex);
  //   seen.add(randomIndex);
  //   if (seen.size === cards.length) {
  //     seen.clear();
  //   }
  //   setShowFront(true);
  // };

  return (
    <div className="app">
      <div className="title">
        <h1>{appTitle}</h1>
        <h3>{appSubtitle}</h3>
        <h5>Number of cards: {cards.length}</h5>
      </div> 
      <Card 
        id={curCardIndex}
        front={cards[curCardIndex].front}
        back={cards[curCardIndex].back}
        level={cards[curCardIndex].level}
        face={{showFront, setShowFront}}
      />
      <div className="buttons">
        <button onClick={moveToPrevCard} disabled={curCardIndex==0}>←</button>
        <button onClick={moveToNextCard} disabled={curCardIndex==cards.length - 1}>→</button>
        <button onClick={shuffleCards}>Shuffle</button>
      </div>
    </div>
  )
}

export default App;
