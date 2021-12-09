# elementos são definidos separados por vírgula, envolvidos por colchetes
fruits = ["orange", "apple", "grape", "pineapple"]

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("pineapple")  # removendo uma fruta

# acrescenta uma lista de frutas a lista original
fruits.extend(["pear", "melon", "kiwi"])

# retorna o índice onde a fruta está localizada, neste caso 1
fruits.index("apple")
# em seu programa
fruits.sort()  # ordena a lista de frutas
