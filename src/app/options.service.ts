import { Injectable, EventEmitter } from '@angular/core';
declare let numberformat;

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  usaFormat = true;
  numFormat = 'scientific';
  formatter: any;
  showI = true;
  timeFormatDetail = false;
  formatEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    try {
      const n = 1.1;
      const separator = n.toLocaleString().substring(1, 2);
      if (separator === ',') { this.usaFormat = false; }

    } catch (ex) {}

    this.generateFormatter();

  }

  generateFormatter() {
    try {
      this.formatter = new numberformat.Formatter({
        format: this.numFormat,
        flavor: 'short'
      });
    } catch (ex) {
      console.log('Error generateFormatter:' + ex);
    }

    if (!!this.formatEmitter) { this.formatEmitter.emit(1); }

  }

}
