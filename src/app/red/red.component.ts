import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  constructor() { }
  name :string = "Red";
  content :Content = new Content();

  ngOnInit() {
  }

}