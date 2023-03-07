function Card({ id, front, back, level, face }) {

  const {showFront, setShowFront} = face;

  function toggleSide() {
    setShowFront(prev => !prev);
  }

  return (
    <div className={`card ${level} ${showFront ? "":"flip"}`} onClick={toggleSide}>
      { showFront 
        ? <div className="card-face front">
            <p>{front.text}</p>
            { front.img && <img src={front.img} alt={`front image for card ${id}`} /> }
          </div>
        :
          <div className="card-face back">
            <p>{back.text}</p>
            { back.img && <img src={back.img} alt={`back image for card ${id}`} /> }
          </div>
      }
    </div>
  )
}

export default Card;