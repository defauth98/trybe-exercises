let piece = 'bishop';

switch (piece.toLowerCase()) {
  case 'bishop':
    console.log('diagonals');
    break;
  case 'king':
    console.log('move one in all directions');
    break;
  case 'queen':
    console.log('move in all directions');
    break;
  case 'rooks':
    console.log('colums and lines');
    break;
  case 'knights':
    console.log('move in L');
    break;
  case 'pawns':
    console.log('move one forward');
    break;
  default:
    console.log('ERRO, peça invalida');
    break;
}
