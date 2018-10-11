
import { UnitGroup } from './unit-group';
import { STRINGS } from './string';
import { Decimal } from 'decimal.js';
export class BaseUnit {
    unlocked = true;
    unitGroup: UnitGroup;

    constructor(
        public id: string,
        public name: string = '',
        public description: string = '',
        public quantity: Decimal = new Decimal(0),
        noAutoName = false
    ) {
        if (!noAutoName && id in STRINGS.units) {
            this.name = STRINGS.units[id][0];
            this.description = STRINGS.units[this.id][1];
            // this.getDescription();
        }
    }

    // getDescription() {
        
    // }

    reset() {
        this.quantity = new Decimal(0);
    }

}
