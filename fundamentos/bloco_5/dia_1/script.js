function changeText() {
  const paragraph = document.getElementsByTagName('p')[0];

  paragraph.innerText = 'Eu quero me tornar um desenvolvedor junior';
}

function changeSquareColorToGreen() {
  const square = document.getElementsByClassName('main-content')[0];

  square.style.backgroundColor = 'rgb(76,164,109)';
}

function changeSquareColorToWhite() {
  const square = document.getElementsByClassName('center-content')[0];

  square.style.backgroundColor = 'white';
}

function changeTitleContent() {
  const title = document.getElementsByClassName('title')[0];

  title.innerText = 'Exercício 5.1 - Javascript';
}

function changeParagraphTextToUpperCase() {
  const paragraph = document.getElementsByTagName('p')[0];
  const paragraphContent = paragraph.innerText;

  paragraph.innerText = paragraphContent.toUpperCase();
}

function logParagraphsContent() {
  const paragraph = document.getElementsByTagName('p');

  for (let index = 0; index < paragraph.length; index += 1) {
    console.log(paragraph[index].innerText);
  }
}

changeText();
changeSquareColorToGreen();
changeSquareColorToWhite();
changeTitleContent();
changeParagraphTextToUpperCase();
logParagraphsContent();
