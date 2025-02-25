import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../model/course.model';
import { UsuarioFirestoreService } from '../../services/usuario-firestore.service'; 

@Component({
  selector: 'app-purchased-courses',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './purchased-courses.component.html',
  styleUrls: ['./purchased-courses.component.scss']
})
export class PurchasedCoursesComponent implements OnInit {
  purchasedCourses: Course[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private usuarioService: UsuarioFirestoreService
  ) {}

  ngOnInit(): void {
    const userId = this.usuarioService.usuarioLogado
      ? (this.usuarioService.usuarioLogado.email || this.usuarioService.usuarioLogado.id)
      : 'guest';
    const key = 'purchased_' + userId;

    const data = localStorage.getItem(key);
    if (data) {
      this.purchasedCourses = JSON.parse(data);
    }
  }

  /**
   * Converte o ID ou URL do YouTube em uma URL confiável (SafeResourceUrl)
   */
  getSafeVideoUrl(course: Course): SafeResourceUrl {
    if (!course.videoId) return '';
    
    // Se "videoId" for só o ID (e.g. "dQw4w9WgXcQ"), ou uma URL
    const embedId = this.extrairVideoId(course.videoId);
    const embedUrl = 'https://www.youtube.com/embed/' + embedId;

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  /**
   * Extrai apenas o ID do vídeo a partir de várias formas de URL
   * Ex: "https://youtu.be/dQw4w9WgXcQ" → "dQw4w9WgXcQ"
   *     "https://www.youtube.com/watch?v=dQw4w9WgXcQ" → "dQw4w9WgXcQ"
   * Se já for só "dQw4w9WgXcQ", retorna ele mesmo
   */
  extrairVideoId(videoString: string): string {
    if (videoString.includes('youtu.be/')) {
      return videoString.split('youtu.be/')[1];
    } else if (videoString.includes('watch?v=')) {
      return videoString.split('watch?v=')[1];
    }
    // Se não tiver "youtu.be/" ou "watch?v=", assume que já seja o ID
    return videoString;
  }
}
