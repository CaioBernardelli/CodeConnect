import { v4 as uuidv4 } from 'uuid'; // Biblioteca para gerar IDs únicos

export function generateUniqueId(): string {
  return uuidv4();
}
