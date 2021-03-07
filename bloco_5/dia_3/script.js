function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

// Exercício 01
function createCalendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysList = document.getElementById('days');

  for(let index in dezDaysList) {
    const listItem = document.createElement('li');

    listItem.classList.add('day');

    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      listItem.classList.add('holiday');
    }

    if(dezDaysList[index] === 4 ||dezDaysList[index] === 11 ||dezDaysList[index] === 18 ||dezDaysList[index] === 25){
      listItem.classList.add('friday');
    }

    listItem.innerHTML = dezDaysList[index];

    daysList.appendChild(listItem);
  }
}

// Exercício 02
function createHolidayButton(){
  const buttonElement = document.createElement('button');
  buttonElement.id = 'btn-holiday';
  buttonElement.innerHTML = 'Feriados'

  const buttonsContainerElement = document.getElementsByClassName('buttons-container')[0];
  buttonsContainerElement.appendChild(buttonElement);

}

// Exercício - 03
function addClickEvent(){
  const button = document.getElementById('btn-holiday');

  button.addEventListener('click', () => {
    const days = document.getElementsByClassName('holiday')

    for(let index = 0; index < days.length; index += 1){
      if(days[index].style.backgroundColor === 'blue'){
        days[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        days[index].style.backgroundColor = 'blue';
        days[index].style.border = '1px solid white'
      }
    }
  })
}

createDaysOfTheWeek();
createCalendarDays();
createHolidayButton();
addClickEvent()