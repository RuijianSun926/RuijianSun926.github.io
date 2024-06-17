// I chose a drag-and-drop interaction method. 
// The reason for choosing this interaction method is that it is an intuitive and logical way to perform the puzzle action.
// Users can drag the puzzle pieces and place them in the correct positions. 
// When a piece is correctly placed, it will be fixed in place, providing immediate visual feedback to the user. 
// If it is placed incorrectly, it will return to its original position.

const pieces = document.querySelectorAll('.draggable');
const boxes = document.querySelectorAll('.droppable');
const resetButton = document.getElementById('reset');

let draggedPiece = null;

// Record the initial position of the puzzle pieces
const initialPositions = [];
pieces.forEach(piece => {
  initialPositions.push({
    x: piece.offsetLeft,
    y: piece.offsetTop
  });
});

pieces.forEach(piece => {
  piece.addEventListener('dragstart', handleDragStart);
  piece.addEventListener('dragend', handleDragEnd);
});

boxes.forEach(box => {
  box.addEventListener('dragover', handleDragOver);
  box.addEventListener('drop', handleDrop);
});
// Drag and click interaction
resetButton.addEventListener('click', resetPuzzle);

function handleDragStart(event) {
  draggedPiece = event.target;
}

function handleDragEnd(event) {
  draggedPiece = null;
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  if (event.target.classList.contains('droppable')) {
    // Check if the pieces are placed in the correct position
    const boxId = parseInt(event.target.id.replace('box', ''));
    const pieceId = parseInt(draggedPiece.id.replace('img', ''));
    if (boxId === pieceId) {
      // If in the correct position, they are fixed in place
      event.target.appendChild(draggedPiece);
      draggedPiece.style.position = 'static'; // Remove absolute positioning
      draggedPiece.draggable = false; // Disable further dragging
    } else {
      // If in the incorrect position, return to the initial position
      const initialPosition = initialPositions[pieceId - 1];
      draggedPiece.style.left = initialPosition.x + 'px';
      draggedPiece.style.top = initialPosition.y + 'px';
    }
  }
}

function resetPuzzle() {
  // Allow all puzzle pieces to return to their initial positions and restore their draggable state
  pieces.forEach((piece, index) => {
    const initialPosition = initialPositions[index];
    piece.style.left = initialPosition.x + 'px';
    piece.style.top = initialPosition.y + 'px';
    piece.style.position = 'absolute';
    piece.draggable = true;
    // Unfix the pieces and return them to their initial positions
    document.querySelector('.pieces').appendChild(piece);
  });

  // Shuffle the positions of the puzzle pieces
  shufflePieces();
}

function shufflePieces() {
  // Use the Fisher-Yates shuffle algorithm, learned from YouTube, to randomly arrange the puzzle pieces
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pieces[i].style.left, pieces[j].style.left] = [pieces[j].style.left, pieces[i].style.left];
    [pieces[i].style.top, pieces[j].style.top] = [pieces[j].style.top, pieces[i].style.top];
  }
}

// Ensure that the puzzle pieces' positions are randomly shuffled when the webpage is initialized
shufflePieces();