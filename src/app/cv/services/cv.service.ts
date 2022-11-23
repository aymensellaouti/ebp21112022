import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[] = [];
  private selectCvSubject: Subject<Cv> = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  constructor(private http: HttpClient) {
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

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }

  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteCv(id: number): Observable<any> {
    /*     const params = new HttpParams().set(
      'access_token',
      localStorage.getItem('token') ?? ''
    ); */
    return this.http.delete<Cv>(API.cv + id);
  }
  deleteFakeCv(cv: Cv): Boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv): void {
    this.selectCvSubject.next(cv);
  }
}
