const n = 5;

for (let index = 0; index <= n; index += 1) {
  let asterisks = '';

  for (
    let whiteSpaceIndex = 0;
    whiteSpaceIndex <= n - index;
    whiteSpaceIndex += 1
  ) {
    asterisks += ' ';
  }

  for (let asterisksIndex = 0; asterisksIndex <= index; asterisksIndex += 1) {
    asterisks += '*';
  }

  console.log(asterisks);
}
