const searchEmployee = require('./searchEmployee');

describe('searchEmployee', () => {
  test('Verifica se a funcao esta definida', () => {
    expect(!!searchEmployee).toBe(true);
  });

  test('Verifica se ao passar id e um item retorna o employees', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
  });

  test('Deve enviar uma mensagem caso o id não exista', () => {
    expect(searchEmployee('12345', 'firstName')).toEqual('ID não identificada');
  });

  test('Deve enviar uma message caso a infomacao não exista', () => {
    expect(searchEmployee('8579-6', 'cep')).toEqual('Informação indisponível');
  });
});
