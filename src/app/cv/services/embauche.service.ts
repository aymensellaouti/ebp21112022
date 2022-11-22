import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauchees: Cv[] = [];
  constructor() {}

  getEmbauchees(): Cv[] {
    return this.embauchees;
  }
  embaucher(cv: Cv): boolean {
    if (this.embauchees.indexOf(cv) == -1) {
      this.embauchees.push(cv);
      return true;
    }
    return false;
  }
}
