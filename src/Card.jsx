function Card({ id, front, back, level, side }) {

  const {showFront, setShowFront} = side;

  function toggleSide() {
    setShowFront(prev => !prev);
  }

  return (
    <div className="card" onClick={toggleSide}>
      { showFront 
        ?
        <>
          <p>{front.text}</p>
          { front.img && <img src={front.img} alt={`front image for card ${id}`} /> }
        </> 
        : 
        <>
          <p>{back.text}</p>
          { back.img && <img src={back.img} alt={`back image for card ${id}`} /> }
        </> 
      }
    </div>
  )
}

export default Card;