import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { words } from '../words';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {
    word;

    constructor(
	private route: ActivatedRoute,
    ) { }

    ngOnInit() {
	this.route.paramMap.subscribe(params => {
	    this.word = words.find(function(word) { 
		return word.id == params.get('wordId'); 
	    }); 
	});
    }
}
