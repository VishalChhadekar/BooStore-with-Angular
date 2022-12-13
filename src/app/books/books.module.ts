import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookServiceService } from './book-service.service';
import { BookComponent } from '../book/book.component';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [CommonModule],
  providers: [BookServiceService],
  exports:[BooksComponent] //exporting BooksComponent, so it can be used  by other modules. 
})
export class BooksModule { }
