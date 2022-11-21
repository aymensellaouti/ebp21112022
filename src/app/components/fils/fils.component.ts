import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  /* On a crée un evenement */
  @Output() sayHelloToPapa = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sayHello(): void {
    /* On a emi l'event et on y a mis la data */
    this.sayHelloToPapa.emit('cc papa');
  }
}
