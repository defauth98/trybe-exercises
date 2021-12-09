# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def media(numberList):
    soma = 0

    for number in numberList:
        soma += number

    return soma / len(numberList)


print(media([1, 1, 1, 1, 1]))
