import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'display' })
export class DisplayPipe implements PipeTransform  {
  transform(value: string): string {
    return value
      .split('-')
      .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(' ');
  }
}
