# Arquivos python

Todos os arquivos .py são modulos e podem ser importados por outros arquivos

# Pacotes

Um pacote é um diretório que pode contem vários modulos.

# Virtual env

Comando para instalar o venv
`curl https://pyenv.run | bash`

Criar um ambiente virtual
`python3 -m venv .venv`

Ativar um ambiente virtual
`source .venv/bin/activate`

# Aula 01 - Entrada e saida de dados
Em python o padrão para criar variaveis e nome de arquvos é com snake case

`soma_de_dois_numero.py`

`number_one = 1`
`number_one = 1`

# Aula 02 - Manipulando arquivos

characters_file = open("meus_personagens.txt", mode="w")

> Python aceita parametros explicitos, que nesse caso é o mode