import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  /* @Output() selectItem = new EventEmitter<Cv>(); */
  @Input() size = 50;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {}

  onSelectItem() {
    /* if (this.cv) this.selectItem.emit(this.cv); */
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
