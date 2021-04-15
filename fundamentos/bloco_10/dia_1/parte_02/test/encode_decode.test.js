const encode = require('../encode');
const decode = require('../decode');

describe('Encode e decode', () => {
  test('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
    expect(decode('12345')).toEqual('aeiou');
  });

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
    expect(decode('12345')).toEqual('aeiou');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('fgb')).toEqual('fgb');
    expect(decode('fgb')).toEqual('fgb');
  });

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const string = 'teste';

    expect(encode(string).length).toEqual(string.length);
    expect(decode(string).length).toEqual(string.length);
  });
});
