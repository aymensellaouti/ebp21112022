import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  /* CE que je veux gérer comme style */
  @HostBinding('style.color') color = 'red';
  @HostBinding('style.borderColor') bc = 'red';
  @HostBinding('style.border') borderStyle = '4px solid';

  constructor() {}

  /* Les event auwquelles je vais réagir */
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
