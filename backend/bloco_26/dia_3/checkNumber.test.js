import { expect } from 'chai'

import checkNumber from './checkNumber.js';

describe('funcao checkNumber', () => {
  describe('quando a funcao recebe', () => {
    it('um número positivo', () => {
      const result = checkNumber(10)

      expect(result).to.be.equal('positivo')
    })

    it('um número negativo', () => {
      const result = checkNumber(-10)

      expect(result).to.be.equal('negativo')
    })

    it('um número neutro', () => {
      const result = checkNumber(0)

      expect(result).to.be.equal('neutro')
    })

    it('um parametro que não é um número', () => {
      const result = checkNumber('número')

      expect(result).to.be.equal('o valor deve ser um número')
    })
  })
})