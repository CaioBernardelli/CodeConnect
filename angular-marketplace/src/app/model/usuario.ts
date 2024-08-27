export class Usuario {
  id: string;
  nome: string;
  email: string;
  idade: number;
  senha: string;

  constructor(id: string, nome: string, email: string, idade: number, senha: string,) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.senha = senha;

  }
}
