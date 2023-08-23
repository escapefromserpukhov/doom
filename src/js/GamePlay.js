export default class GamePlay {
  constructor(board, char) {
    this.board = board;
    this.boardSize = 4;
    this.char = char;
    this.activeChar = null;
  }

  init() {
    this.redrawBoard();

    this.start();
  }

  redrawBoard() {
    const board = this.board.getBoard(this.boardSize);
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = '<h1 class=\'title\'>Goblin Battle!</h1>';
    container.appendChild(board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...board.children];
  }

  generateposition() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generateposition();
      return;
    }
    this.deletedChar();
    this.position = position;
    this.adventChar();
    // console.log(this.activeChar);
  }

  deletedChar() {
    if (this.activeChar === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  adventChar() {
    this.activeChar = this.char.getChar();
    this.cells[this.position].appendChild(this.activeChar);
    // console.log(this.position);
  }

  start() {
    setInterval(() => {
      this.generateposition();
    }, 1000);
  }
}
