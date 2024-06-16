const pieces = document.querySelectorAll('.draggable');
const boxes = document.querySelectorAll('.droppable');
const resetButton = document.getElementById('reset');

let draggedPiece = null;

// 将拼图碎片的初始位置保存在一个数组中
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
    // 检查是否放置在正确的位置
    const boxId = parseInt(event.target.id.replace('box', ''));
    const pieceId = parseInt(draggedPiece.id.replace('img', ''));
    if (boxId === pieceId) {
      // 正确的位置，将碎片固定到盒子中
      event.target.appendChild(draggedPiece);
      draggedPiece.style.position = 'static'; // 取消绝对定位
      draggedPiece.draggable = false; // 禁止再次拖动
    } else {
      // 不正确的位置，将碎片返回到初始位置
      const initialPosition = initialPositions[pieceId - 1];
      draggedPiece.style.left = initialPosition.x + 'px';
      draggedPiece.style.top = initialPosition.y + 'px';
    }
  }
}

function resetPuzzle() {
  // 将所有碎片返回到初始位置并恢复可拖动状态
  pieces.forEach((piece, index) => {
    const initialPosition = initialPositions[index];
    piece.style.left = initialPosition.x + 'px';
    piece.style.top = initialPosition.y + 'px';
    piece.style.position = 'absolute';
    piece.draggable = true;
    // 将碎片从盒子中移除并放回初始容器中
    document.querySelector('.pieces').appendChild(piece);
  });

  // 打乱拼图碎片的位置
  shufflePieces();
}

function shufflePieces() {
  // 使用 Fisher-Yates 洗牌算法随机排列拼图碎片
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pieces[i].style.left, pieces[j].style.left] = [pieces[j].style.left, pieces[i].style.left];
    [pieces[i].style.top, pieces[j].style.top] = [pieces[j].style.top, pieces[i].style.top];
  }
}

// 初始化时打乱拼图碎片的位置
shufflePieces();