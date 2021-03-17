const n = 5;

for (let index = 1; index <= n; index += 2) {
  let asterisks = '';
  let spacesCount = (n - 1 - index) / 2;

  if (spacesCount == 2) {
    spacesCount = 1;
  }

  for (let leftSpaces = 0; leftSpaces <= spacesCount; leftSpaces += 1) {
    asterisks += '-';
  }

  for (let asterisksIndex = 1; asterisksIndex <= index; asterisksIndex += 1) {
    asterisks += '*';
  }

  for (let rightSpaces = 0; rightSpaces <= spacesCount; rightSpaces += 1) {
    asterisks += '-';
  }

  console.log(asterisks);
}
