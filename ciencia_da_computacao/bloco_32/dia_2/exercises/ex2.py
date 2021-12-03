# Jogo da palavra embaralhada. Desenvolva um jogo
#  em que a pessoa usuária tenha que adivinhar
#  uma palavra que será mostrada com as letras
# embaralhadas. O programa terá uma lista de palavras
# e escolherá uma aleatoriamente. O jogador terá três
# tentativas para adivinhar a palavra. Ao final a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
import random

file = open("words.txt", mode="r")

aleatory_words = file.read().split("\n")

file.close()

sorted_word = random.choice(aleatory_words)

scrambled_word = "".join(random.sample(sorted_word, len(sorted_word)))

count = 3

while count > 0:
    print(scrambled_word)

    input_word = input("Qual é a palavra? ")

    if sorted_word == input_word:
        print("Você acertou!! Parabéns")
        count = 0
    else:
        count -= 1
