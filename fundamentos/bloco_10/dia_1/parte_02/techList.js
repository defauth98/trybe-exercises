function techList(techListArray, name) {
  const listTechObj = [];
  const OrdenedTechListArray = techListArray.sort();

  if (techListArray.length === 0) {
    return 'Vazio!';
  }

  for (let index in OrdenedTechListArray) {
    // Referencia: https://eslint.org/docs/rules/guard-for-in
    if (Object.prototype.hasOwnProperty.call(OrdenedTechListArray, index)) {
      listTechObj.push({
        tech: OrdenedTechListArray[index],
        name,
      });
    }
  }

  return listTechObj;
}

module.exports = techList;
