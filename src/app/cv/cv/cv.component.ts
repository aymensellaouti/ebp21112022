import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  constructor() {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile2.png',
        40,
        '1111'
      ),
      new Cv(
        2,
        'sellaouti',
        'skander',
        'dev',
        'rotating_card_profile3.png',
        40,
        '1111'
      ),
      new Cv(
        2,
        'sellaouti',
        'skander',
        'dev',
        'rotating_card_profile3.png',
        40,
        '1111'
      ),
    ];
  }

  ngOnInit(): void {}
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
