let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
};

info.recorrente = 'Sim';
info2.recorrente = 'Sim';

for (propriedade in info) {
  console.log(info[propriedade] + ' e ' + info2[propriedade]);
}
