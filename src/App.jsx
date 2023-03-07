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
    setCurCardIndex(prevId => {
      return prevId - 1 >= 0 ? prevId - 1 : cards.length - 1;
    });
    setShowFront(true);
  }

  function moveToNextCard() {
    setCurCardIndex(prevId => {
      return prevId + 1 < cards.length? prevId + 1 : 0;
    });
    setShowFront(true);
  }

  const moveToNextRandomCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    while (seen.has(randomIndex)) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
    setCurCardIndex(randomIndex);
    console.log(randomIndex);
    seen.add(randomIndex);
    if (seen.size === cards.length) {
      seen.clear();
    }
    setShowFront(true);
  };

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
        {/* <button onClick={moveToPrevCard}>←</button> */}
        {/* <button onClick={() => moveToNextCard()}>→</button> */}
        <button onClick={() => moveToNextRandomCard()}>→</button> 
      </div>
    </div>
  )
}

export default App;
