import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

function fibonaci(n: number): number {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}

@Pipe({
  name: 'fibo'
})
export class FiboPipe implements PipeTransform {
  @memo()
  transform(n: number): number {
    const result = fibonaci(n);
    console.log(result);
    return result;
  }
}
