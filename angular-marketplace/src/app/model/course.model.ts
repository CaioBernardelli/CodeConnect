export class Course {
    id: string;
    name: string;
   category: string;
    imgLink: string;
    price: number;
  
    constructor(id: string, name: string, category: string, imgLink: string, price: number) {
      this.id = id;
      this.name= name;
      this.category = category;
      this.imgLink = imgLink;
      this.price = price;
    }
  }
  