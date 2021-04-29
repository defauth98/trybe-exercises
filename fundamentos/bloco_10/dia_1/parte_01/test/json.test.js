const { obj1, obj2, obj3 } = require('../json');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  test('Verifique se o obj1 e igual ao obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Verifique se o obj1 nao e igual ao obj2', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
