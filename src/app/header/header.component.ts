import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()
  lab = false;
  @Input()
  labBadge = false;
  @Input()
  travel = false;

  sub: any;
  subGroup: any;
  timeModal = false;

  headerClass = 'header-6';
  percentPreset = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
  minuteWarps = [1, 5, 10, 20, 30, 60, 90, 120, 240];
  // groupNoEnemy = new Array<UnitGroup>();
  buyMulti = 1;

  constructor(
    private router: Router,
    public ms: MainService
  ) {}

  ngOnInit() {
  }

  navigateLast(){
    this.router.navigateByUrl(this.ms.game.lastUnitUrl);
  }

}
