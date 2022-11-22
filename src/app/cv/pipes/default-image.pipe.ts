import { Pipe, PipeTransform } from '@angular/core';
import { IMAGES } from '../../config/images.const';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (!path.trim()) {
      return IMAGES.defaultImage;
    }
    return path;
  }
}
