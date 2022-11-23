import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  monObservable$: Observable<number>;
  constructor(private toastr: ToastrService) {
    this.monObservable$ = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.monObservable$.subscribe((val) => {
      console.log(val);
    });
    this.monObservable$
      .pipe(
        map((x) => x * 3),
        filter((x) => !(x % 2))
      )
      .subscribe({
        next: (data) => {
          this.toastr.info('' + data);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.toastr.warning('BOOM !!!');
        },
      });
  }

  ngOnInit(): void {}
}
