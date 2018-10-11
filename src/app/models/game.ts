import { FullUnit } from './full-unit';
import { MainService } from '../main.service';
import { Materials } from './units/materials';
import { UnitGroup } from './unit-group';
import { Decimal } from 'decimal.js';
const STARTING_FOOD = new Decimal(1000000);
export class Game {

    isPaused = false;

    lastUnitUrl = 'nav/unit/f';

    firstEndigUnit: FullUnit;
    experience: FullUnit;
    time: FullUnit;


    unitGroups = new Array<UnitGroup>();
    unlockedGroups = new Array<UnitGroup>();
    units = new Array<FullUnit>();
    unlockedUnits = new Array<FullUnit>();

    materials: Materials;

    constructor(public ms: MainService) {
        this.materials = new Materials(this);
        this.unitGroups.push(this.materials);

        this.experience = new FullUnit('prest');
        this.time = new FullUnit('time');

        this.unitGroups.forEach(g => g.declareStuff());

        this.unitGroups.map(g => g.list).forEach(l => l.forEach(u => this.units.push(u)));

        this.units.push(this.experience, this.time);


        // 解锁
        this.unitGroups.forEach(g => g.check(true));
        // console.log(this.materials);
        this.unitGroups.forEach(g => (g.selected = g.list.filter(u => u.unlocked)));


        // 设置初始物资
        this.setStartStuff();

        // 创建已解锁的导航
        this.buildLists();

    }

    buildLists() {
        this.unlockedUnits = [];
        // console.log(this.materials);
        // 获取解锁的unit
        this.units.forEach(u => {
            if (u instanceof FullUnit && u.unlocked) { this.unlockedUnits.push(u); }
        });
        // console.log(this.materials);
        this.unlockedGroups = this.unitGroups.filter(g => g.unlocked.length > 0);

        // this.materials.unlocked = this.units;

    }

    setStartStuff() {
        this.materials.food.unlocked = true;
        this.materials.food.quantity = STARTING_FOOD;
        this.materials.food.c = new Decimal(0);
    }


}
