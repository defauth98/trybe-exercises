let price = 10;
let sale = 30;

if (price >= 0 && sale >= 0) {
  let totalCost = price * 1.2;

  let totalProfit = (sale - totalCost) * 1000;

  console.log(totalProfit);
} else {
  console.log('Erro: Valores menores que zero ou iguais a zero');
}
