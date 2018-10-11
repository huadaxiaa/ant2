import { FullUnit } from './full-unit';
import { Game } from './game';
export class UnitGroup {
    static maxId = 0;
    level = 0;
    unlocked: FullUnit[] = new Array<FullUnit>();
    list: FullUnit[] = new Array<FullUnit>();
    id: number;

    selected = new Array<FullUnit>();


    constructor(public name: string, public game: Game) {
        this.id = UnitGroup.maxId;
        UnitGroup.maxId++;
    }

    check(noGame = false) {
        this.unlocked = this.list.filter(u => u.unlocked);
        if (!noGame) { this.game.buildLists(); }
    }

    addUnits(units: FullUnit[]) {
        units.forEach(u => (u.unitGroup = this));
        this.list = units;
    }

    declareStuff() {}
}
