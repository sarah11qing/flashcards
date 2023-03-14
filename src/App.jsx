import { useState } from 'react';
import { appTitle, appSubtitle, cardSet } from './data';
import Card from './Card';
import './App.css';

function App() {
  
  const [cards, setCards] = useState(cardSet);
  const [curCardIndex, setCurCardIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);
  
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState();

  const feedback = isCorrect
  ? "✔ Correct, keep going!"
  : isCorrect === false
  ? "❌Wrong, give a another try!"
  : "";

  const handleChange = (e) => {
    setInput(prevInput => e.target.value);
    setIsCorrect();
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.replace(" ", "").toLowerCase() === cards[curCardIndex].back.text.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setInput('');
  }

  const moveToPrevCard = ()  => {
    if (curCardIndex == 0) {
      return;
    }
    setCurCardIndex(prevId => {
      return prevId - 1;
    });
    setShowFront(true);
    setIsCorrect();
  }

  function moveToNextCard() {
    if (curCardIndex == cards.length - 1) {
      return;
    }
    setCurCardIndex(prevId => {
      return prevId + 1;
    });
    setShowFront(true);
    setIsCorrect();
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
    setIsCorrect();
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
        {/* <h5>Current streak: {currentStreak} | Longest streak: {longestStreak}</h5> */}
      </div>
      <Card 
        id={curCardIndex}
        front={cards[curCardIndex].front}
        back={cards[curCardIndex].back}
        level={cards[curCardIndex].level}
        face={{showFront, setShowFront}}
      />
      <h5 className="feedback">{feedback}</h5>
      <div className="checkAnswer">
        <form onSubmit={handleSubmit}>
          <label>Guess the answer:
            <input 
              className="input"
              type="text" 
              name="answer" 
              placeholder="Place your answer here..." 
              value={input} 
              onChange={(e) => handleChange(e)}
            />
          </label>
          <button type="submit" disabled={!input.trim()}>Submit</button>
        </form>
      </div>

      <div className="buttons">
        <button onClick={moveToPrevCard} disabled={curCardIndex==0}>←</button>
        <button onClick={moveToNextCard} disabled={curCardIndex==cards.length - 1}>→</button>
        <button onClick={shuffleCards}>Shuffle</button>
      </div>
    </div>
  )
}

export default App;
