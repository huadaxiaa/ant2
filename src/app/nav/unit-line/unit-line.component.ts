import { Component, OnInit, Input } from '@angular/core';
import { FullUnit } from '../../models/full-unit';
import { OptionsService } from '../../options.service';

@Component({
  selector: 'app-unit-line',
  templateUrl: './unit-line.component.html',
  styleUrls: ['./unit-line.component.scss']
})
export class UnitLineComponent implements OnInit {

  @Input()
  id: string;
  @Input()
  name: string;
  @Input()
  quantity: Decimal;
  @Input()
  perSec: Decimal;
  @Input()
  isNew: boolean;
  @Input()
  isEnding: boolean;
  @Input()
  isStopped: boolean;
  @Input()
  unit: FullUnit;
  @Input()
  team: boolean;
  @Input()
  twin: boolean;
  @Input()
  isMalus = false;

  constructor(public os: OptionsService) { }

  ngOnInit() {
    console.log('unit-line: ', this.unit);
  }

}
