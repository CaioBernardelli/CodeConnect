// course.model.ts
export class Course {
  id: string;
  name: string;
  category: string;
  imgLink: string;
  price: number;
  videoId?: string; // ⇐ novo campo para o ID do vídeo do YouTube

  constructor(id: string, name: string, category: string, imgLink: string, price: number, videoId?: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.imgLink = imgLink;
    this.price = price;
    this.videoId = videoId;
  }
}
