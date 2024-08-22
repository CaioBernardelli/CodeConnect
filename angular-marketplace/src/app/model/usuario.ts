export class Usuario {
    id: string; 
    nome: string;
    email: string;
    idade: number;
    senha: string;
  
    constructor(nome: string, email: string, idade: number, senha: string, id: string) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.idade = idade;
      this.senha = senha;
      
    }
  }
  