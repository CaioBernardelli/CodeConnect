export class Usuario {
  id: number;
  nome: string;
  email: string;
  idade: number;
  senha: string;

  constructor(id: number, nome: string, email: string, idade: number, senha: string,) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.senha = senha;

  }
}
