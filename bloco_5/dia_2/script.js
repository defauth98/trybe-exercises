const body = document.body;
const title = document.createElement('h1');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const paragraph = document.createElement('p');

div1.classList.add('main-content');
div2.classList.add('center-content');
div3.classList.add('left-content');
div4.classList.add('right-content');

title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
paragraph.innerHTML = 'Exercicios sobre criação de elemento na dom via JS';

div1.appendChild(div2);
div1.appendChild(div3);
div1.appendChild(div4);
div2.appendChild(paragraph);
body.appendChild(title);
body.appendChild(div1);
