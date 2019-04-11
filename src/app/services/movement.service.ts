import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap }  from 'rxjs/operators'

export class Movement {
    constructor(public number:number, public name:string) {

    }
}

@Injectable()
export class MovementService {
    public movements: Array<Movement> = [];

    constructor() {

    }

    loadMovements() : Observable<any> {
        return of({}).pipe(tap(() => {
            this.movements.push(new Movement(1, "Thruster"));
            this.movements.push(new Movement(2, "Pullup"));
            this.movements.push(new Movement(4, "Clean"));
            this.movements.push(new Movement(5, "Squat Clean"));
            this.movements.push(new Movement(6, "Hang Power Clean"));
            this.movements.push(new Movement(7, "Pushup"));
            this.movements.push(new Movement(8, "Squat"));
            this.movements.push(new Movement(9, "Deadlift"));
            this.movements.push(new Movement(10, "Handstand Pushup"));
            this.movements.push(new Movement(11, "Ring Dip"));
            this.movements.push(new Movement(12, "Snatch"));
            this.movements.push(new Movement(13, "Squat Snatch"));
            this.movements.push(new Movement(14, "Row"));
            this.movements.push(new Movement(15, "Wallball"));
            this.movements.push(new Movement(16, "Muscleup"));
            this.movements.push(new Movement(17, "Bench Press"));
            this.movements.push(new Movement(18, "Press"));
            this.movements.push(new Movement(19, "Push Press"));
            this.movements.push(new Movement(20, "Sumo Deadlift High Pull"));
            this.movements.push(new Movement(21, "Box Jump"));
        }));
    }
}