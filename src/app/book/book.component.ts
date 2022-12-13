
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Book } from '../Types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 //property book
 //Data Interaction: from Parent to child, using @Input decorator
 @Input() book: Book ={} as Book;


 isInCart: boolean= false;

 //Data Interaction: from Child to Parent, using EventEmiitor
 @Output() emitBook = new EventEmitter<Book>();

 myInterval:any=null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.myInterval = setTimeout(()=>{
    //   console.log("Hello");
    // }, 1000);
  }

  addToCart(){
  console.log("Add to cart method is called");
  //emit the book: 
  console.log("Emitting event");
  // this.emitBook.emit(this.book); //Now, instead of emiting this event books comp: we are adding book to cartService
  this.isInCart= true;
  this.cartService.add(this.book);
  }

  removeFromCart()
{
  this.isInCart = false;
  this.cartService.remove(this.book);
}
//   ngOnDestroy(): void {
//     clearInterval(this.myInterval);
//     console.log("OnDestroy get called")
// }

}
