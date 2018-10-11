import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { Decimal } from 'decimal.js';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  id = '';
  @Input()
  name = '';
  @Input()
  isEnding = false;
  @Input()
  quantity = new Decimal(0);
  @Input()
  perSec = new Decimal(1);

  constructor(public ms: MainService) { }

  ngOnInit() {
    console.log(this.id, this.name, this.isEnding, this.quantity, this.perSec);
  }

}
