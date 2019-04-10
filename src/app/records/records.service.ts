import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap }  from 'rxjs/operators'

export enum AgeGroupType {
    ag1834 = 0,
    ag3539 = 1,
    ag4044 = 2,
    ag4549 = 3,
    ag5054 = 4,
    ag5559 = 5,
    ag60plus = 6
  }
  
  export class AgeGroup {
    constructor(private ageGroupType:AgeGroupType, private name:string, public result?:string, public breaker?:string) {
  
    }
  }
  
  export enum RecordType {
    time = 0,
    reps = 1,
    weight = 2
  }
  
  export class Record {
    private ageGroups: Array<AgeGroup>;
    public description:string;
    public weights:string;
    public iconClass:string;
  
    constructor(private name:string,
                private recordType:RecordType, 
                ageGroups: Array<AgeGroup>) {
      this.ageGroups = [];
  
      for(var i = 0; i < ageGroups.length; i++) {
        this.ageGroups.push(ageGroups[i]);
      }

      if(this.recordType == RecordType.reps) {
        this.iconClass = "far fa-clipboard";
      }
      else if(this.recordType == RecordType.time){
        this.iconClass = "far fa-clock";
      }
      else if(this.recordType == RecordType.weight) {
        this.iconClass = "fas fa-weight-hanging";
      }
    }

    setRecord(ageGroupType:AgeGroupType, result:string, date:Date, breaker:string) {
        this.ageGroups[ageGroupType].result = result;
        this.ageGroups[ageGroupType].breaker = breaker;
    }
  }

@Injectable()
export class RecordService {
    allAgeGroups:Array<AgeGroup> = [];
    public records:Array<Record> = [];

    selectedRecord: Record;

    constructor() {
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag1834, "18-34"));
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag3539, "35-39"));
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag4044, "40-44"));
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag4549, "45-49"));
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag5054, "50-54"));
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag5559, "55-59"));
        this.allAgeGroups.push(new AgeGroup(AgeGroupType.ag60plus, "60+"));
    }

    loadRecords() : Observable<any> {
        this.records = [];

        return of({}).pipe(tap(() => {
            var index = 0;

            this.records.push(new Record("Fran",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "2:34",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n21-15-9 reps of\nThrusters\nPullups"
            this.records[index].weights = "Men - 42.5kg Barbell\nWomen - 30kg Barbell"
            index++;

            this.records.push(new Record("Grace",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n30 reps of\nClean & Jerk";
            this.records[index].weights = "Men - 60kg Barbell\nWomen - 42.5kg Barbell"
            index++;

            this.records.push(new Record("Cindy",RecordType.reps, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "150",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "As many rounds in 20 mins of\n5 Pullups\n10 Pushups\n15 Squats";
            index++;

            this.records.push(new Record("Diane",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n21-15-9 reps of\nDeadlifts\nHandstand Pushups";
            this.records[index].weights = "Men - 102.5kg Barbell \nWomen - 70kg Barbell\n**For Handstand Pushup standards - Click"
            index++;

            this.records.push(new Record("Elizabeth",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n21-15-9 reps of\nSquat Cleans\nRing Dips";
            this.records[index].weights = "Men - 60kg Barbell\nWomen - 42.5kg Barbell"
            index++;

            this.records.push(new Record("Isabel",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n30 reps of\nSnatches";
            this.records[index].weights = "Men - 60kg Barbell\nWomen - 42.5kg Barbell"
            index++;

            this.records.push(new Record("Jackie",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n1,000 meter Row\n50 Thrusters\n30 Pullups";
            this.records[index].weights = "Concept 2 Rower\nMen - 20kg Barbell\nWomen - 15kg Barbell"
            index++;

            this.records.push(new Record("Karen",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n150 Wallballs";
            this.records[index].weights = "Men - 9kg WallBall to 3 meter target \nWomen - 6kg WallBall to 2.74 meter target";
            index++;

            this.records.push(new Record("Amanda",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For time\n9-7-5 reps of\nMuscleups\nSquat Snatches";
            this.records[index].weights = "Men - 60kg Barbell\nWomen - 42.5kg Barbell"
            index++;

            this.records.push(new Record("Linda",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n10-9-8-7-6-5-4-3-2-1 reps of\nDeadlifts\nBench Presses\nCleans";
            this.records[index].weights = "Deadlift - 1.5 Bodyweight Barbell\nBench Press - Bodyweight Barbell\nClean - 3/4 Bodyweight Barbell";
            index++;

            this.records.push(new Record("Angie",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n100 Pullups\n100 Pushups\n100 Situps\n100 Squats";
            index++;

            this.records.push(new Record("Total",RecordType.weight, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Max Weight\nBack Squat\nPress\nDeadlift";
            index++;

            this.records.push(new Record("Fight Gone Bad",RecordType.reps, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "3 Rounds for total reps in 17 minutes\n1 min WallBalls\n1 min Sumo Deadlift High pull\n1 min Box Jumps\n1 min Push Press\n1 min Row Cal\n1 min Rest";
            this.records[index].weights = "Wallbals Men - 9kg to 3m target\n\t Women - 6kg to 2.74 target\nMen - 35kg Barbell\nWomen - 25kg Barbell";
            index++;

            this.records.push(new Record("DT",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "5 Rounds for time\n12 Deadlift\n9 Hang Power Clean\n6 Shoulder to Overhead";
            this.records[index].weights = "Men - 70kg Barbell\nWomen - 47.5kg Barbell";
            index++;

            this.records.push(new Record("Pullups",RecordType.reps, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "Max reps unbroken";
            index++;

            this.selectedRecord = this.records[0];
        }))
    }
}