import { UnitGroup } from './../models/unit-group';
import { Component, OnInit, AfterViewInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-unit-tabs',
  templateUrl: './unit-tabs.component.html',
  styleUrls: ['./unit-tabs.component.scss']
})
export class UnitTabsComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  unitGroup: UnitGroup;

  unitsSpan = '';
  overviewActive = true;
  sub: any;

  forceChange = false;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.forceChange = true;
    this.getGroup();

  }

  ngOnDestroy() {

  }

  getGroup() {
    this.unitsSpan = this.unitGroup.unlocked.map(u => u.name).reduce((p, c) => p + ',' + c);

  }

}
