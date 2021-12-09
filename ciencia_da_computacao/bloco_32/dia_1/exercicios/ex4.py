# Exercício 4: Crie uma função que receba uma lista de nomes e
#  retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo",
#  "Joana"] , o retorno deve ser "Fernanda" .

list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def get_bigger_name(nameList):
    biggerName = ''

    for name in nameList:
        if(len(name) > len(biggerName)):
            biggerName = name

    return biggerName


print(get_bigger_name(list))
