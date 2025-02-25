import os

def salvar_codigos_em_txt(diretorio_origem, arquivo_saida):
    with open(arquivo_saida, "w", encoding="utf-8") as output_file:
        for raiz, _, arquivos in os.walk(diretorio_origem):
            for arquivo in arquivos:
                if arquivo.endswith(('.ts', '.html', '.scss', '.css', '.json', '.spec.ts', '.js')):  # Extensões relevantes
                    caminho_completo = os.path.join(raiz, arquivo)
                    try:
                        with open(caminho_completo, "r", encoding="utf-8") as file:
                            output_file.write(f"### {caminho_completo} ###\n")
                            output_file.write(file.read())
                            output_file.write("\n\n" + "#" * 80 + "\n\n")  # Separador entre arquivos
                    except Exception as e:
                        print(f"Erro ao ler {caminho_completo}: {e}")

# Caminho do diretório do código-fonte
diretorio_codigo = r"C:\Users\Gabri\Documents\CodeConnect\angular-marketplace\src"

# Nome do arquivo de saída
arquivo_saida = "codigo_completo.txt"

# Executa a função
salvar_codigos_em_txt(diretorio_codigo, arquivo_saida)

print(f"Código salvo em {arquivo_saida} com sucesso!")
