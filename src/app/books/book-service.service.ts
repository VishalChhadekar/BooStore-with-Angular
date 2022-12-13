import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  getBooks(){
    
   return [
      {
        name: 'Sandman',
        author: 'Neil Gaiman',
        img_source: 'https://images-na.ssl-images-amazon.com/images/I/616DPaonu8L._SX323_BO1,204,203,200_.jpg',
        amount: 2100
      },
      {
        name: 'Batman',
        author: 'Greg Cox',
        img_source: 'https://images-na.ssl-images-amazon.com/images/I/511TZTUMWQL._SX327_BO1,204,203,200_.jpg',
        amount: 800
      },
      {
        name: 'Lucifer',
        author: 'God',
        img_source: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627780255i/58671080.jpg',
        amount: 989
      }
    ]
  }
}
