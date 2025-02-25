export class Post {
  id?: string;  // O "?" indica que o id é opcional
  message: string;
 

  constructor(message: string, id?: string) {
    this.id = id;
    this.message = message;
 
  }
}
