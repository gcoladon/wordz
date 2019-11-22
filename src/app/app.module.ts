import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { WordListComponent } from './word-list/word-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { WordDetailsComponent } from './word-details/word-details.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: BookListComponent },
      { path: 'log-in', component: WordListComponent },
    ])
    ],
    declarations: [
	AppComponent,
	BookListComponent,
	TopBarComponent,
	WordListComponent,
	BookDetailsComponent,
	WordDetailsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
