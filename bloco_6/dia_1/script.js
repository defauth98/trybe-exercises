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

window.onload = addSelectOptions;
