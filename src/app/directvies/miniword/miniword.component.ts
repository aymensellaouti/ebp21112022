import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css'],
})
export class MiniwordComponent implements OnInit {
  color = 'red';
  font = 'garamond';
  size = 50;
  constructor() {}

  ngOnInit(): void {}
}
