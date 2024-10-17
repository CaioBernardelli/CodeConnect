export class Post {
  id?: number;  // O "?" indica que o id é opcional
  message: string;

  constructor(message: string, id?: number) {
    this.id = id;
    this.message = message;
  }
}
