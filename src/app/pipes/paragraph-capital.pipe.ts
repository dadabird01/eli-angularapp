import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const trimmed = value.trim();
      return trimmed[0].toUpperCase() + trimmed.substr(1).toLowerCase();
    }
    
    return '';
  }
}
