import { Pipe, PipeTransform } from '@angular/core';
const BTCTOUSD = 15719;
@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number): number {
    return amount * BTCTOUSD;
  }
}
