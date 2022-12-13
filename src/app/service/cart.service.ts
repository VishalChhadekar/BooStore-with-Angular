import { Injectable } from '@angular/core';
import { Book } from '../Types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
    // console.log("Selected Book");
    // console.log(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b) => b != book); //filter out all books, if book: b is not equal to this.book from cart
  }

}
