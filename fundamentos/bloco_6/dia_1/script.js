function addSelectOptions(){
  const stateSelectElement = document.getElementById('state');
  
  const brazilStates = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];
  
  for(let index = 0; index < brazilStates.length; index += 1){
    const optionElement = document.createElement('option');

    optionElement.innerHTML = brazilStates[index];
    optionElement.value = brazilStates[index];
    
    stateSelectElement.appendChild(optionElement);
  }
}

// Referencia: Gabarito da Trybe
function validadeData(data){
  if(data.indexOf('/') === 2 &&  data.indexOf('/') === 5){
    const day = data.substr(0,2);
    const month = data.substr(3,2);
    const year = data.substr(6,4);
    if((day > 0 && day <= 31) && (month > 0 && month <= 12)){
      return true;
    }

    return false;
  }
}

// Referencia: Gabarito da Trybe
function checkData(){
  const dateInputElement = document.getElementById('date');

  let data = dateInputElement.value;
  const dataUser = validadeData(data);

  if(!dataUser && data.length){
    dataInputElement.value = '';
    alert('data invalida');
    return false;
  }

  return dataUser;
}

function renderCurriculum (){
  event.preventDefault();

  const curriculumNameElement = document.getElementById('curriculum-name');
  if(curriculumNameElement){
    alert('Currículo ja foi criado');
    return;
  }

  const curriculumSession = document.getElementById('curriculum');
  const nameInputElement = document.getElementById('name');
  const emailInputElement = document.getElementById('email');
  const cpfInputElement = document.getElementById('cpf');
  const addressInputElement = document.getElementById('address');
  const cityInputElement = document.getElementById('city');
  const stateInputElement = document.getElementById('state');
  const typeHouseInputElement = document.getElementById('type-house');
  const typeApartmentInputElement = document.getElementById('type-house');
  const resumeInputElement = document.getElementById('resume');
  const officeInputElement = document.getElementById('office');
  const officeDescriptionInputElement = document.getElementById('office-description');
  const dateInputElement = document.getElementById('date');

  let name = nameInputElement.value;
  let email = emailInputElement.value;
  let cpf = cpfInputElement.value;
  let address = addressInputElement.value;
  let city = cityInputElement.value;
  let state = stateInputElement.value;
  let resume = resumeInputElement.value;
  let office = officeInputElement.value;
  let officeDescription = officeDescriptionInputElement.value;
  let date = dateInputElement.value;
  let type;

  if(typeApartmentInputElement.value === 'on'){
    type = 'Apartamento';
  }

  if(typeHouseInputElement.value === 'on'){
    type = 'Casa';
  }

  if(!name || !email || !cpf || !address || !city || !state || !type || !resume || !office || !officeDescription || !date){
    alert('Necessário preencher as informações');
    return;
  }

  const titleElement = document.createElement('h1');
  titleElement.innerHTML = name;
  titleElement.id = 'curriculum-name';

  const emailElement = document.createElement('h2');
  emailElement.innerHTML = email;
  emailElement.id = 'curriculum-email';

  const cpfElement = document.createElement('p');
  cpfElement.innerHTML = cpf;
  cpfElement.id = 'curriculum-cpf';

  const addressElement = document.createElement('p');
  addressElement.innerHTML = address;
  addressElement.id = 'curriculum-address';

  const cityElement = document.createElement('p');
  cityElement.innerHTML = city;
  cityElement.id = 'curriculum-city';

  const stateElement = document.createElement('p');
  stateElement.innerHTML = state;
  stateElement.id = 'curriculum-state';

  const typeElement  = document.createElement('p');
  typeElement.innerHTML = type;
  typeElement.id = 'curriculum-type';

  const resumeElement = document.createElement('p');
  resumeElement.innerHTML = resume;
  resumeElement.id = 'curriculum-resume';

  const officeElement = document.createElement('p');
  officeElement.innerHTML = office
  officeElement.id = 'curriculum-office';

  const officeDescriptionElement = document.createElement('p');
  officeDescriptionElement.innerHTML = officeDescription;
  officeDescriptionElement.id = 'curriculum-office-description';

  const dateElement = document.createElement('p');
  dateElement.innerHTML = date;
  dateElement.id = 'curriculum-date';

  curriculumSession.appendChild(titleElement);
  curriculumSession.appendChild(emailElement);
  curriculumSession.appendChild(cpfElement);
  curriculumSession.appendChild(addressElement);
  curriculumSession.appendChild(cityElement);
  curriculumSession.appendChild(stateElement);
  curriculumSession.appendChild(typeElement);
  curriculumSession.appendChild(resumeElement);
  curriculumSession.appendChild(officeElement);
  curriculumSession.appendChild(officeDescriptionElement);
}

function clearAllFields(){
  event.preventDefault();

  const curriculumSession = document.getElementById('curriculum');
  const nameInputElement = document.getElementById('name');
  const emailInputElement = document.getElementById('email');
  const cpfInputElement = document.getElementById('cpf');
  const addressInputElement = document.getElementById('address');
  const cityInputElement = document.getElementById('city');
  const stateInputElement = document.getElementById('state');
  const typeHouseInputElement = document.getElementById('type-house');
  const typeApartmentInputElement = document.getElementById('type-house');
  const resumeInputElement = document.getElementById('resume');
  const officeInputElement = document.getElementById('office');
  const officeDescriptionInputElement = document.getElementById('office-description');
  const dateInputElement = document.getElementById('date');

  curriculumSession.innerHTML = '';
  nameInputElement.value = '';
  emailInputElement.value = '';
  cpfInputElement.value = '';
  addressInputElement.value = '';
  cityInputElement.value = '';
  stateInputElement.value = '';
  typeHouseInputElement.value = '';
  typeApartmentInputElement.value = '';
  resumeInputElement.value = '';
  officeInputElement.value = '';
  officeDescriptionInputElement.value = '';
  dateInputElement.value = '';
}

window.onload = () => {
  addSelectOptions();

  const renderButton = document.getElementById('render-curriculum');
  renderButton.onclick = () => renderCurriculum();

  const clearButton = document.getElementById('clear');
  clearButton.onclick = () => clearAllFields();
};
