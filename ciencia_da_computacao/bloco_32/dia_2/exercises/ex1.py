# Faça um programa que receba um nome e imprima o mesmo
# na vertical em escada invertida

name = input("Digite seu nome: ")

length = len(name)

while length > 0:
    for index in range(length):
        print(name[index], end="")
    print()
    length -= 1
