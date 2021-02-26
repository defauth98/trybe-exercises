const n = 5;

for (let index = 0; index <= n; index += 1) {
  let asterisks = '';

  for (let insideIndex = 0; insideIndex <= n; insideIndex += 1) {
    asterisks += '*';
  }

  console.log(asterisks);
}
