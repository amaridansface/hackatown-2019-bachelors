import { Component, OnInit } from '@angular/core';
import Products from '../assets/products.json';

@Component({
  selector: 'app-reading-json-files',
  templateUrl: './reading-json-files.component.html',
  styleUrls: ['./reading-json-files.component.css']
})

export class ReadingJsonFilesComponent implements OnInit {

constructor() {
 console.log('Reading local json files');
 console.log(Products.Stores[0].storeName);
}

ngOnInit() {}

}