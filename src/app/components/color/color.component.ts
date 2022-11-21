import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  @Input() color = this.defaultColor;
  constructor() {}

  ngOnInit(): void {}
  changeColor(newColor: string): void {
    this.color = newColor;
  }
  reset(): void {
    this.color = this.defaultColor;
  }
}
