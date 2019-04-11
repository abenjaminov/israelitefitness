import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap }  from 'rxjs/operators'

export class Movement {
    constructor(public number:number, public name:string) {

    }
}

export enum MovementID {
    thruster = 1,
    pullup = 2,
    clean = 3,
    squatClean = 4,
    hangPowerClean = 5,
    pushup = 6,
    airSquat = 7,
    deadlift = 8,
    hadnstandPushup = 9,
    ringDip = 10,
    snatch = 11,
    squatSnatch = 12,
    row = 13,
    wallball = 14,
    muscleup = 15,
    benechPress = 16,
    press = 17,
    jerk = 18,
    situp = 19,
    backSquat = 20,
    shoulderToOverhead = 21,
    barMuscleup = 22
}

@Injectable()
export class MovementService {
    public movements: Array<Movement> = [];

    constructor() {

    }

    loadMovements() : Observable<any> {
        return of({}).pipe(tap(() => {
            this.movements.push(new Movement(MovementID.thruster, "Thruster"));
            this.movements.push(new Movement(MovementID.pullup, "Pullup"));
            this.movements.push(new Movement(MovementID.clean, "Clean"));
            this.movements.push(new Movement(MovementID.squatClean, "Squat Clean"));
            this.movements.push(new Movement(MovementID.hangPowerClean, "Hang Power Clean"));
            this.movements.push(new Movement(MovementID.pushup, "Pushup"));
            this.movements.push(new Movement(MovementID.airSquat, "Air Squat"));
            this.movements.push(new Movement(MovementID.deadlift, "Deadlift"));
            this.movements.push(new Movement(MovementID.hadnstandPushup, "Handstand Pushup"));
            this.movements.push(new Movement(MovementID.ringDip, "Ring Dip"));
            this.movements.push(new Movement(MovementID.snatch, "Snatch"));
            this.movements.push(new Movement(MovementID.squatSnatch, "Squat Snatch"));
            this.movements.push(new Movement(MovementID.row, "Row"));
            this.movements.push(new Movement(MovementID.wallball, "Wallball"));
            this.movements.push(new Movement(MovementID.muscleup, "Muscleup"));
            this.movements.push(new Movement(MovementID.benechPress, "Bench Press"));
            this.movements.push(new Movement(MovementID.press, "Press"));
            this.movements.push(new Movement(MovementID.jerk, "Jerk"));
            this.movements.push(new Movement(MovementID.situp, "Situp"));
            this.movements.push(new Movement(MovementID.situp, "Back Squat"));
            this.movements.push(new Movement(MovementID.shoulderToOverhead, "Shoulder to Overhead"));
            this.movements.push(new Movement(MovementID.barMuscleup, "Bar Muscleup"));
        }));
    }
}