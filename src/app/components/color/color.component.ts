import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  @Input() color = this.defaultColor;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.color = params['couleur'];
    });
  }
  changeColor(newColor: string): void {
    this.color = newColor;
  }
  reset(): void {
    this.color = this.defaultColor;
  }
}
