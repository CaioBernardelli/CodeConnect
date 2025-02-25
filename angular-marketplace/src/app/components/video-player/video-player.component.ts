import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

// Para evitar erros de typings da variável YT:
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

@Component({
  selector: 'app-video-player',
  standalone: true,
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {

  @Input() videoId!: string; // Recebe o ID do vídeo no YouTube
  @Input() purchased = false; // Indica se o usuário tem permissão de assistir

  player: any;

  ngOnInit() {
    // Se o usuário não comprou, não carrega a API
    if (!this.purchased) {
      return;
    }

    // Carrega o script da IFrame API se não estiver carregado ainda
    const scriptTag = document.getElementById('youtube-iframe-api') as HTMLScriptElement;
    if (!scriptTag) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    // Quando a API estiver pronta, ela chamará 'onYouTubeIframeAPIReady'
    window.onYouTubeIframeAPIReady = () => {
      this.createPlayer();
    };
  }

  ngAfterViewInit(): void {
    // Caso a API já esteja pronta antes do AfterViewInit, pode criar o player direto
  }

  createPlayer() {
    // Cria o player a partir do elemento <div id="player"></div> no HTML
    this.player = new window.YT.Player('player', {
      height: '360',
      width: '640',
      videoId: this.videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,            // remove vídeos relacionados ao fim
        modestbranding: 1, // remove logo do YouTube
      },
      events: {
        onReady: (event: any) => {
          // Opcional: iniciar a reprodução automaticamente
          // event.target.playVideo();
        },
        onStateChange: (event: any) => {
          // Exemplo: pausar, exibir logs etc.
        }
      }
    });
  }
}
