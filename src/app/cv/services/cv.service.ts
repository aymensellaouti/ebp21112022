import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[] = [];
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
      new Cv(2, 'sellaouti', 'skander', 'dev', '   ', 40, '1111'),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
