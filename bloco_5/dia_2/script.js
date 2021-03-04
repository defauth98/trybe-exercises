const body = document.body;
const title = document.createElement('h1');
const mainContentDiv = document.createElement('div');
const centerContentDiv = document.createElement('div');
const leftContentDiv = document.createElement('div');
const rightContentDiv = document.createElement('div');
const paragraph = document.createElement('p');
const image = document.createElement('img');
const list = document.createElement('ul');

mainContentDiv.classList.add('main-content');
centerContentDiv.classList.add('center-content');
leftContentDiv.classList.add('left-content');
rightContentDiv.classList.add('right-content');
image.classList.add('small-image');
title.classList.add('title');

title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
paragraph.innerHTML = 'Exercicios sobre criação de elemento na dom via JS';

image.src = 'https://picsum.photos/200';

for (let index = 0; index < 10; index += 1) {
  const listItem = document.createElement('li');

  listItem.innerHTML = index + 1;

  list.appendChild(listItem);
}

for (let index = 0; index < 3; index += 1) {
  const title = document.createElement('h1');

  title.classList.add('description');

  mainContentDiv.appendChild(title);
}

rightContentDiv.style.marginRight = 'auto';
centerContentDiv.style.backgroundColor = 'green';

// Referência: Gabarito da trybe
list.lastChild.remove();
list.lastChild.remove();

rightContentDiv.appendChild(list);
leftContentDiv.appendChild(image);

mainContentDiv.appendChild(centerContentDiv);
mainContentDiv.appendChild(leftContentDiv);
mainContentDiv.appendChild(rightContentDiv);

centerContentDiv.appendChild(paragraph);

mainContentDiv.removeChild(leftContentDiv);

body.appendChild(title);
body.appendChild(mainContentDiv);
