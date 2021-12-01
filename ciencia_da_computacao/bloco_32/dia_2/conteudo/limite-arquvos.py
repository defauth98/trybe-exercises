# Mas por que devemos sempre fechar um arquivo? A resposta vem do sistema
# operacional.Temos um limite de quantos arquivos podemos abrir de uma
# só vez, e um erro é lançadoquando atingimos esse limite.
#  Vamos ver um código para demonstrar a ocorrência
#  de um erro ao abrir muitos arquivos ao mesmo tempo:

arquivos = []
for index in range(10240):
    arquivos.append(open(f"arquivo{index}.txt", "w"))
