import { expect } from 'chai'

import writeFile from './writeFile.js';

describe('funcao writeFile', () => {
  describe('quando a função recebe o nome do arquivo e conteudo e', () => {
    it('escreve o resultado', async () => {
      const result = await writeFile('nomes.txt', 'josue, carlos, thiago')

      expect(result).to.be.equal('ok')
    })  
  })

  describe('quando a funcão não recebe', () => {
    it('o nome do arquivo', async () => {
      const result = await writeFile(null, 'josue, carlos, thiago')

      expect(result).to.be.equal('o nome do arquivo deve ser informado')
    })

    it('o conteudo do arquivo', async () => {
      const result = await writeFile('nomes.txt', null)

      expect(result).to.be.equal('o conteúdo do arquivo deve ser informado')
    })
  })
})