import React, { useState } from 'react';
import './App.css';

function App() {
  const [cardList, setCardList] = useState([
    { id: 1, order: 1, text: "Card 1" },
    { id: 2, order: 2, text: "Card 2" },
    { id: 3, order: 3, text: "Card 3" },
    { id: 4, order: 4, text: "Card 4" },
  ])
  const [currentCard, setCurrentCard] = useState(null)
  function onDragStartHandler(e, card) {
    console.log('drag', card)
    setCurrentCard(card)
  }


  function onDragEndHandler(e) {
    e.target.style.background = 'white';

  }
  function onDragOverHandler(e) {
    e.preventDefault()
    e.target.style.background = 'lightgray';
  }
  function onDropHandler(e, card) {
    e.preventDefault()
    setCardList(cardList.map(c => {
      if (c.id == card.id) {
        return { ...c, order: currentCard.order }
      }
      if (c.id == currentCard.id) {
        return { ...c, order: card.order }
      }
      return c
    }))
    console.log('drop', card)
    e.target.style.background = 'white';

  }
  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }
  return (
    <div className="App">
      {cardList.sort(sortCards).map((card, index) =>
        <div
          onDragStart={(e) => onDragStartHandler(e, card)}
          onDragLeave={(e) => onDragEndHandler(e)}
          onDragEnd={(e) => onDragEndHandler(e)}
          onDragOver={(e) => onDragOverHandler(e)}
          onDrop={(e) => onDropHandler(e, card)}
          className='card'
          key={index}
          draggable={true}>
          {card.text}
        </div>
      )}

    </div>
  );
}

export default App;
