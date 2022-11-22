import { Component, OnInit } from '@angular/core';
import { getRandomArbitrary } from '../../utils/nombres.utils';

@Component({
  selector: 'app-tab-fib',
  templateUrl: './tab-fib.component.html',
  styleUrls: ['./tab-fib.component.css'],
})
export class TabFibComponent implements OnInit {
  tab: number[] = [];
  constructor() {
    for (let i = 0; i < 50; i++) {
      this.tab.push(getRandomArbitrary(20, 30));
    }
    console.log(this.tab);
  }
  fibonaci(n: number): number {
    if (n == 0 || n == 1) {
      return 1;
    }
    return this.fibonaci(n - 1) + this.fibonaci(n - 2);
  }

  getFibonaci(n: number) {
    const x = this.fibonaci(n);
    console.log(n);
    return n;
  }

  ngOnInit(): void {}
}
