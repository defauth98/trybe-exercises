characters_file = open("meus_personagens.txt", mode="w")

characters_file.write("Tio Patinhas\n")
characters_file.write("Neo\n")
characters_file.write("Homem Aranha\n")
characters_file.write("Mulher Gato\n")

print("Batman", file=characters_file)

more_characters = ["Goku\n", "Naruto\n", "Luffy\n", "Gohan"]

characters_file.writelines(more_characters)

characters_file.close()
