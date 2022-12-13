import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  //instead of importing BookComp and BooksComp Serparatly: scop is global
  //We are importing BooksModule
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BooksModule,
    AppRoutingModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
