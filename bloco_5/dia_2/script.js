const body = document.body;
const title = document.createElement('h1');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const paragraph = document.createElement('p');

title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
div1.classList.add('main-content');
div2.classList.add('center-content');

paragraph.innerHTML = 'Exercicios sobre criação de elemento na dom via JS';

div2.appendChild(paragraph);

body.appendChild(title);
body.appendChild(div1);
body.appendChild(div2);
