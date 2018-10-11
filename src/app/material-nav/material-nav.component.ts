import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { BaseUnit } from '../models/base-unit';

declare let preventScroll;

@Component({
  selector: 'app-material-nav',
  templateUrl: './material-nav.component.html',
  styleUrls: ['./material-nav.component.scss']
})
export class MaterialNavComponent implements OnInit, AfterViewInit, OnDestroy {

  sub: any;

  constructor(private ms: MainService) {
    console.log(ms);
  }

  ngOnInit() {
    console.log(this.ms.game.materials.unlocked);
  }

  ngAfterViewInit(): void {
    if (typeof preventScroll === typeof Function) { preventScroll(); }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUnitId(index, base: BaseUnit) {
    // console.log(base.id);
    return base.id;
  }

}
