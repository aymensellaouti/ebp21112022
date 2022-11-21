import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();
  constructor() {}

  ngOnInit(): void {}
  forwardItem(cv: Cv): void {
    this.forwardCv.emit(cv);
  }
}
