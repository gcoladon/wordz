import { Component, OnInit } from '@angular/core';

import { words } from '../words';

@Component({
    selector: 'app-word-list',
    templateUrl: './word-list.component.html',
    styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
    words = words

    constructor() { }

    ngOnInit() {
    }
}
