import { Decimal } from 'decimal.js';
import { BaseUnit } from './base-unit';
import { Iunlocable } from './iunlocable';
import uniq from 'lodash-es/uniq';

export class FullUnit extends BaseUnit implements Iunlocable {

    unlocked = false;

    endIn = Number.POSITIVE_INFINITY;
    efficiency = 100;
    winNonLiner = true;

    isEnding = false;
    isNew = false;

    // perSec
    c = new Decimal(0);

    constructor(
        id: string,
        name: string = '',
        description: string = '',
        quantity: Decimal = new Decimal(0)
    ) {
        super(id, name, description, quantity);
    }

    unlock() {
        if (this.unlocked) { return; }


        this.unlocked = true;
        this.isNew = true;
        if (this.unitGroup) {
            this.unitGroup.check();
            this.unitGroup.selected.push(this);
            this.unitGroup.selected = uniq(this.unitGroup.selected);
        }
    }

    reset() {
        super.reset();

        this.unlocked = false;
        this.efficiency = 100;
        
        this.c = new Decimal(0);
    }

    isActive(): boolean {
        return (
            this.unlocked && this.efficiency > Number.EPSILON && this.quantity.gt(0)
        );
    }

    isStopped(): boolean {
        return this.efficiency < 0.01;
    }

}
