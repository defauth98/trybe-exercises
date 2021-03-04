const body = document.body;

// Exercise - 01
const title = document.createElement('h1');
title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(title);

// Exercise - 02
const mainContentDiv = document.createElement('div');
mainContentDiv.classList.add('main-content');
body.appendChild(mainContentDiv);

// Exercise - 03
const centerContentDiv = document.createElement('div');
centerContentDiv.classList.add('center-content');
mainContentDiv.appendChild(centerContentDiv);

// Exercise - 04
const paragraph = document.createElement('p');
paragraph.innerHTML = 'Algum texto qualquer';
centerContentDiv.appendChild(paragraph);

// Exercise - 05
const leftContentDiv = document.createElement('div');
leftContentDiv.classList.add('left-content');
mainContentDiv.appendChild(leftContentDiv);

// Exercise - 06
const rightContentDiv = document.createElement('div');
rightContentDiv.classList.add('right-content');
mainContentDiv.appendChild(rightContentDiv);

// Exercise - 07
const image = document.createElement('img');
image.classList.add('small-image');
image.src = 'https://picsum.photos/200';
leftContentDiv.appendChild(image);

// Exercise - 08
const list = document.createElement('ul');
title.classList.add('title');
const numbersArray = [
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Novo',
  'Dez',
];
for (let index in numbersArray) {
  const listItem = document.createElement('li');
  listItem.innerHTML = numbersArray[index];
  list.appendChild(listItem);
}

// Exercise - 09
for (let index = 0; index < 3; index += 1) {
  const title = document.createElement('h1');
  title.classList.add('description');
  mainContentDiv.appendChild(title);
}

// Segunda parte dos exercícios:

rightContentDiv.style.marginRight = 'auto';
centerContentDiv.style.backgroundColor = 'green';

// Referência: Gabarito da trybe
list.lastChild.remove();
list.lastChild.remove();

rightContentDiv.appendChild(list);
mainContentDiv.removeChild(leftContentDiv);
