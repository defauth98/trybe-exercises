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

window.onload = addSelectOptions;
