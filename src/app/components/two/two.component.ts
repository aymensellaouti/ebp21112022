import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  two = 'init value';
  constructor() {}

  ngOnInit(): void {}
  reset(): void {
    this.two = 'init value';
  }
}
