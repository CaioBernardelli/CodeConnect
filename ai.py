import os

def listar_arquivos_pastas(caminho, nivel=0):
    try:
        for item in os.listdir(caminho):
            item_path = os.path.join(caminho, item)
            if os.path.isdir(item_path):
                print("  " * nivel + f"[📁] {item}")
                listar_arquivos_pastas(item_path, nivel + 1)
            else:
                print("  " * nivel + f"  - {item}")
    except PermissionError:
        print("  " * nivel + "[⛔] Acesso negado")

# Caminho do repositório
caminho_repositorio = r"C:\Users\Gabri\Documents\CodeConnect\angular-marketplace\src"

# Listar arquivos e pastas
print(f"Conteúdo de {caminho_repositorio}:")
listar_arquivos_pastas(caminho_repositorio)
