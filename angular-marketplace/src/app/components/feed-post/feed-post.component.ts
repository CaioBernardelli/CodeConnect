import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { generateUniqueId } from '../../Util/id-gerate'; // Importa a função de geração de ID

@Component({
  selector: 'app-feed-post',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.scss']
})
export class FeedPostComponent implements OnInit {
  listPost: Post[] = [];
  postForm!: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.postForm = this.fb.group({
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.findPosts();
  }

  findPosts() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.listPost = posts;
    });
  }

  publicarMensagem() {
    if (this.postForm.valid) {
      const newPost: Post = {
        id: generateUniqueId(),  // Gerando um ID único
        message: this.postForm.value.mensagem
      };

      this.postService.postMensagem(newPost).subscribe((post: Post) => {
        this.listPost.push(post);
        this.postForm.reset();
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}

  

