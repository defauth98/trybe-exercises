let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

for (propriedade in info) {
  console.log(info[propriedade]);
}
