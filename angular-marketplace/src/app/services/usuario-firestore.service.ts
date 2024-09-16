import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, where, query, getDocs, doc, deleteDoc } from '@angular/fire/firestore';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {
  private collectionName: string = 'usuarios'; 

 

  constructor(private firestore: Firestore) {}
  

  listar(): Observable<Usuario[]> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    return collectionData(usuariosCollection, { idField: 'id' }) as Observable<Usuario[]>;
  }
  async remover(id: string): Promise<void> {
    // Verifica se o ID foi passad
    // Obtém a referência da coleção de usuários
    const usuarioDoc = doc(this.firestore, `${this.collectionName}/${id}`);  // Referência ao documento pelo ID
    // Remove o documento do Firestore
    return deleteDoc(usuarioDoc).then(() => {
      console.log('Usuário removido com sucesso!');
    }).catch(error => {
      // Lida com erros de remoção
      console.error('Erro ao remover usuário:', error);
      throw new Error('Erro ao remover o usuário!');
    });
  }
  

  async inserir(usuario: Usuario): Promise<void> {
    // Espera a validação do e-mail antes de continuar
    await this.validarEmailsDiferentes(usuario.email);
    this.validarEmail(usuario.email) 
    // Realiza as outras validações
    this.validarMaiorIdade(usuario);

    const { id, ...usuarioSemId } = usuario;
    const usuariosCollection = collection(this.firestore, this.collectionName);
    
    // Adiciona o documento apenas após a validação bem-sucedida
    return addDoc(usuariosCollection, usuarioSemId).then(() => {
      // Sucesso, sem ações adicionais
    });
  }
   // Validações Inserir 
   private validarMaiorIdade(usuario: Usuario) {
    if (usuario.idade < 18) {
      throw new Error('Usuário não pode ser menor de idade!');
    }
  }

  private validarEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Endereço de email inválido!');
    }
  }
  

   // Método que verifica se já existe um usuário com o mesmo email
   async validarEmailsDiferentes(email: string): Promise<void> {
    const usuariosCollection = collection(this.firestore, this.collectionName);
    const q = query(usuariosCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      throw new Error('Usuário já cadastrado com o mesmo endereço de email!');
    }
  }
}



