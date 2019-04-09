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
    reps = 1
  }
  
  export class Record {
    private ageGroups: Array<AgeGroup>;
    public description:string;
  
    constructor(private name:string,
                private recordType:RecordType, 
                ageGroups: Array<AgeGroup>) {
      this.ageGroups = [];
  
      for(var i = 0; i < ageGroups.length; i++) {
        this.ageGroups.push(ageGroups[i]);
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
            index++;

            this.records.push(new Record("Grace",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n30 reps of\nClean & Jerk";
            index++;

            this.records.push(new Record("Cindy",RecordType.reps, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "150",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "As many rounds\nin 20 mins of\n5 Pullups\n10 Pushups\n15 Squats";
            index++;

            this.records.push(new Record("Diane",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n21-15-9 reps of\nDeadlifts\nHandstand-Pushups";
            index++;

            this.records.push(new Record("Elizabeth",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n21-15-9 reps of\nSquat Cleans\nRing Dips";
            index++;

            this.records.push(new Record("Isabel",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n30 reps of\nSnatches";
            index++;

            this.records.push(new Record("Jackie",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n1,000 meter Row\n50 Thrusters\n30 Pullups";
            index++;

            this.records.push(new Record("Karen",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n150 Wallballs";
            index++;

            this.records.push(new Record("Amanda",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For time\n9-7-5 reps of\nMuscleups\nSquat Snatches";
            index++;

            this.records.push(new Record("Linda",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n10 to 1 reps\nDeadlifts\nBench Presses\nCleans";
            index++;

            this.records.push(new Record("Angie",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Time\n100 Pullups\n100 Pushups\n100 Situps\n100 Squats";
            index++;

            this.records.push(new Record("Total",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "For Max Weight\nBack Sqaut\nPress\nDeadlift";
            index++;

            this.records.push(new Record("Fight Gone Bad",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "N/A";
            index++;

            this.records.push(new Record("DT",RecordType.time, this.allAgeGroups));
            this.records[index].setRecord(AgeGroupType.ag1834, "1:41",new Date(2019,21,3),"Israel Israeli");
            this.records[index].description = "N/A";
            index++;

            this.selectedRecord = this.records[0];
        }))
    }
}