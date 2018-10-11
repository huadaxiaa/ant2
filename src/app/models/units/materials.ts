import { UnitGroup } from '../unit-group';
import { Game } from '../game';
import { FullUnit } from '../full-unit';

export class Materials extends UnitGroup {

    food: FullUnit;

    constructor(game: Game) {
        super('Materials', game);
    }

    declareStuff(): void {
        this.food = new FullUnit('food');
        this.food.unlocked = true;

        this.addUnits([this.food]);

        console.log('add food unit');

        this.list.forEach(m => (m.winNonLiner = false));

    }

}
