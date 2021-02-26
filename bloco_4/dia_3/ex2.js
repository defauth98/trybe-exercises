const n = 5;

for (let index = 0; index <= n; index += 1) {
  let string = '';

  for (let insideIndex = 0; insideIndex <= index; insideIndex += 1) {
    string += '*';
  }

  console.log(string);
}
