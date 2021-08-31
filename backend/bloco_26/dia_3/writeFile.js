import fs from 'fs';

async function writeFile(filename, content) {
  if(!filename) {
    return 'o nome do arquivo deve ser informado'
  }

  if(!content) {
    return 'o conteúdo do arquivo deve ser informado'
  }

  try {
    fs.writeFileSync(filename, content)

    return 'ok'
  } catch (error) {
    return 'error'
  }
}

export default writeFile