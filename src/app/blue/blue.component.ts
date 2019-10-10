import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {
  constructor() { }
  name = "Blue";
  content :Content = new Content();

  ngOnInit() {
  }

}