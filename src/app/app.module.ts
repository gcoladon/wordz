import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './book-list/book-list.component';
import { WordListComponent } from './word-list/word-list.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: BookListComponent },
    ])
    ],
  declarations: [ AppComponent, HelloComponent, BookListComponent, WordListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
