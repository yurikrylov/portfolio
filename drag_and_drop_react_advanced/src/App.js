import React, { useState } from 'react';
import './App.css';

function App() {
  const [boards, setBoards] = useState([
    { id: 1, title: "Board1", items: [{ id: 1, title: 'Card1' }, { id: 2, title: '' }, { id: 3, title: '' }, { id: 4, title: '' }, { id: 5, title: '' }] },
    { id: 2, title: "Board2", items: [{ id: 1, title: 'Card1' }, { id: 2, title: '' }, { id: 3, title: '' }, { id: 4, title: '' }, { id: 5, title: '' }] },
    { id: 3, title: "Board3", items: [{ id: 1, title: 'Card1' }, { id: 2, title: '' }, { id: 3, title: '' }, { id: 4, title: '' }, { id: 5, title: '' }] }
  ])

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function setBoardsState(board, currentBoard) {
    return boards.map(v => {
      if (v.id === board.id) {
        return board
      }
      if (v.id === currentBoard.id) {
        return currentBoard
      }
      return v
    })
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(setBoardsState(board, currentBoard))
  }
  function dragLeaveHandler(e) {
    if (e.target.className == 'item') { e.target.style.boxShadow = 'none'; }
  }
  function dragStartHandler(e, board, item) {
    setCurrentBoard(board)
    setCurrentItem(item)
  }
  function dragEndHandler(e) {
    if (e.target.className == 'item') { e.target.style.boxShadow = 'none'; }
  }
  function dragOverHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.className == 'item') { e.target.style.boxShadow = '0 4px 3px gray'; }
  }
  function dropHandler(e, board, item) {
    e.stopPropagation();
    e.preventDefault()
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(setBoardsState(board, currentBoard))
  }

  return (
    <div className="App">
      {boards.map((board) =>
        <div className='board'
          key={board.id}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}>
          <div className='board_title'>{board.title}</div>
          {board.items.map((item) => <div
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, board, item)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, board, item)}
            className='item'
            key={item.id}
            draggable={true}>
            {item.title}
          </div>
          )}
        </div>
      )
      }
    </div>
  );
}

export default App;
