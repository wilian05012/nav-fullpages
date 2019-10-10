import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
  constructor() { }
  name = "Green";
  content :Content = new Content();

  ngOnInit() {
  }

}