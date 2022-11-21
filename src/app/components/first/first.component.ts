import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  color = 'red';
  isHidden = false;
  message = '';
  constructor() {}
  interrupteur() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string): void {
    this.message = newMessage;
  }
  ngOnInit(): void {
  }
}
