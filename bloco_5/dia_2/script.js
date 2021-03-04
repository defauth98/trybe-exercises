const body = document.body;
const title = document.createElement('h1');
const div1 = document.createElement('div');
const div2 = document.createElement('div');

title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
div1.classList.add('main-content');
div2.classList.add('center-content');

body.appendChild(title);
body.appendChild(div1);
