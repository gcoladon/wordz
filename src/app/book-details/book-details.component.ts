import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { books } from '../books';
import { words } from '../words';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book;
    words = words;

    constructor(
	private route: ActivatedRoute,
    ) { }

    ngOnInit() {
	this.route.paramMap.subscribe(params => {
	    this.book = books.find(function(book) { 
		return book.id == params.get('bookId'); 
	    }); 
	});
    }
}
