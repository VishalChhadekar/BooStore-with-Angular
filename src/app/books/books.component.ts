import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../Types/Book';
import { BookServiceService } from './book-service.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  //array of books type Book
  books: Book[] = [];

  isDisabled = false;
  isShowing = true;

  //Dependancy Injection: Injecting BookService
  constructor(private bookService: BookServiceService) { 
    console.log("Constructor get called") }



  ngOnInit(): void {
    console.log('OnInIt called');
    this.books = this.bookService.getBooks()
  }


  // updatedName: string = 'Lucifer';
  // handleInput(event: any) {
  //   this.updatedName = event.target.value;
  // }


  onClick() {
    console.log("Working on it.")
  }

  addToCart(book: Book) {

    console.log("Event is listened by Books")
    console.log("Selected BooK!")
    console.log(book)
  }

}
