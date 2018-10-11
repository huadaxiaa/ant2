import { UnitGroup } from './../models/unit-group';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MainService } from '../main.service';
import { BaseUnit } from '../models/base-unit';
import { FullUnit } from '../models/full-unit';
import { Malus } from '../models/malus';

declare let preventScroll;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit, OnDestroy {

  sub: any;

  constructor(public ms: MainService) { }

  ngOnInit() {
    // console.log('nav component:', this.ms.game.unlockedGroups);
  }

  ngAfterViewInit(): void {
    if (typeof preventScroll === typeof Function) { preventScroll(); }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getListId(index, list: UnitGroup) {
    return list.name;
  }

  getUnitId(index, base: BaseUnit) {
    return base.id;
  }

  isMalus(unit: FullUnit): boolean {
    return unit instanceof Malus;
  }


}
