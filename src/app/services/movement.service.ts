import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { tap }  from 'rxjs/operators'
import { PopupService, PopupData } from './popup.service';

export class Movement {
    standardText:string;

    constructor(public movementId:MovementID, public name:string) {

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
    barMuscleup = 22,
    general = 23
}

@Injectable()
export class MovementService {
    public movements: Array<Movement> = [];

    constructor(private popupService: PopupService) {

    }

    loadMovements() : Observable<any> {
        return of({}).pipe(tap(() => {
            this.movements = [];
            var index = 0;

            this.movements[index] = new Movement(MovementID.general, "General");
            this.movements[index].standardText = 'בתחילת האימון יש להציג את שם האתלט בן כמה הוא ואיזה אימון הוא עושה\n\nאין להעיזר בברכיים על מנת לקום באמצע תנועה\n\nאין להעיזר בידיים על מנת להתיישר בכל תנועות הסקווט\n\nאין לזרוק את המוט מאחורי הראש בשום מצב\n\nאין לזרוק מוט ריק על הרצפה\n\nעל האתלט להשאר בכל זמו נתון בתוך זוית הצילום\n\nניתן להיעזור באדם נוסף לספירה של חזרות ומיקום של ציוד לפני, במהלך ואחרי האימון\n\nיש להציג שעון תקין בכל זמן הצילום\n\nבסוף כל אימון יש להציג את המשקולות והמוט בהן השתמשתם'
            index++;

            this.movements.push(new Movement(MovementID.thruster, "Thruster"));
            this.movements[index].standardText = "התנועה מתחילה כאשר המוט נמצא על הרצפה\n\n על האתלט להרים את המוט לגובה כתפיים ולרדת לסקווט כאשר גובה האגן מתחת לקו הברך\n\n לאחר מכן תוך כדי התיישרות לדחוף את המוט עד מעל הראש\n\nהחזרה נספרת כאשר האתלט נמצא בהתיישרות מלאה בברכיו ובידיו בקו אחד מתוח והמוט מעל ראשו"
            index++;

            this.movements.push(new Movement(MovementID.pullup, "Pullup"));
            this.movements[index].standardText = 'התנועה מתחילה כאשר האתלט בתליה מלאה על המתח כאשר ידיו ישרות לגמרי ונגמרת כאשר האתלט משך את עצמו למעלה עד אש סנתרו עבר את קו המתח'
            index++;

            this.movements.push(new Movement(MovementID.clean, "Clean \\ Squat Clean"));
            this.movements[index].standardText = 'בתנועה זו קיימות 2 אופציות, האחת היא כאשר מצוין שיש לרדת לסקווט באופן מפורש והשניה ללא ציון מפורש.\n\n התנועה מתחילה כאשר המוט נמצא על הרצפה, על האתלט להביא את המוט לגובה כתפיו\n\n התנועה נספרת כאשר האתלט עומד כאשר ברכיו ישרות והוא ישר לחלוטין ומרפקיו נמצאים מלפני המוט. \n\n כאשר מצוין בצורה מפרושת שיש לבצע סקווט, עלמנת שהחזרה תספר על האתלט לעבור דרך סקווט מלא לפני שנעמד כלומר שהאגן שלו נמצא נמוך יותר מקו ברכיים\n\n פאוור קליו + פרונט סקווט הוא חוקי אך דדליפט ולאחריו הנג קלין הוא אינו חוקי'
            index++;

            // this.movements.push(new Movement(MovementID.squatClean, "Squat Clean"));
            // this.movements[index].standardText = ''
            // index++;
            this.movements.push(new Movement(MovementID.hangPowerClean, "Hang Power Clean"));
            this.movements[index].standardText = 'לפני תחילת כל מספר חזרות רצוף על האתלט להרים את המוט לגובה מתניו\n\nהתנועה מתחילה כאשר האתלט נמצא עם המוט בגובה אגן, על האתלט לבצע קלין כאשר הוא מביא את המוט לגובה כתפיו ואינו עובר דרך סקווט\n\nהאתלט רשאי לקפל את ברכיו כך שאגנו לא ירד נמוך יותר מקו ברכיו\n\nהחזרה תספר כאשר האתלט ישר לחלוטין עם המוט במנח קדמי בגובה כתפיו.'
            index++;


            this.movements.push(new Movement(MovementID.pushup, "Pushup"));
            this.movements[index].standardText = 'החזרה מתחילה כאשר שתי ידיו ושתי רגליו של האתלט נמצאים על הקרקע ואף חלק אחר של גופו\n\n על האתלט לרדת כאשר החזה שלו נוגע ברצפה ולהתרומם ממנה כאשר הגוף נשאר בקו אחיד.\n\n אין להתרומם בעזרת הברכיים או הירכיים, כלומר על כל הגוף להתנתק מהרצפה יחדיו.'
            index++;

            this.movements.push(new Movement(MovementID.airSquat, "Air Squat"));
            this.movements[index].standardText = 'התנועה מתחילה כאשר האתלט ישר לחלוטין\n\nעל האתלט לרדת לסקווט כאשר האגן שלו יורד מתחת לקו הברכיים ולאחר מכן להתיישר\n\nעל מנת שהחזרה תספר על האתלט לעמוד ישר לגמרי כאשר ברכיו אינם מקופלות ופלג גופו העליון ישר'
            index++;

            this.movements.push(new Movement(MovementID.deadlift, "Deadlift"));
            this.movements[index].standardText = 'התנועה מתחילה כאשר המוט מונח על הרצפה\n\n על האתלט להרים את המוט ולהתיישר איתו \n\nהתנועה נספרת כאשר האתלט מחזיק את המוט ועומד איתו ישר בברכיו ובאגנו'
            index++;

            this.movements.push(new Movement(MovementID.hadnstandPushup, "Handstand Pushup"));
            this.movements[index].standardText = 'התנועה מתחילה כאשר האתלט הפוך עומד על ידיו ורגליו נשענות על הקיר, עליו לאחר מכן לרדת עד אשר ראשו נוגע ברצפה ולאחר מכן להתיישר כלפי מעלה כאשר הוא עדיין הפוך\n\nהתנועה תספר כאשר ידיו של האתלט ושאר גופו ישרים לגמרי על הקיר\n\nעל האתלט להראות באופן ברור קופסא על הרצפה בעומק של 66 סנטימרים וברוחב של 91 סנטימטרים\n\nכפות ידיו של האתלט צריכות להשאר בתוך הקופסא לאורך כל התנועה אך אצבעותיו רשאיות לצאת ממנה'
            index++;
            this.movements.push(new Movement(MovementID.ringDip, "Ring Dip"));
            this.movements[index].standardText = 'התנועה מתחילה כאשר האתלט אוחז בטבעות ונמצא מעליהן, תליה מלאה וידיו ישרות\n\nעל האתלט להוריד את עצמו כלפי מטה עד שהוא עובר את קו המרפק עם החלק העליון של הזרוע כך שזוית המרפק היא פחות מ90 מעלות\n\nהתנועה תספר כאשר האתלט חוזר ליישר מלא במרפקיו'
            index++;
            this.movements.push(new Movement(MovementID.snatch, "Snatch \\ Squat Snatch"));
            this.movements[index].standardText = 'התנועה מתחיל כאשר המוט מונח על הרצפה, על האתלט להרים את המוט עד מעל ראשו בתנועה אחידה\n\nבמידה ומצוין באופן מפורש שיש לבצע סקווט, על האתלט ברכו למעלה לעבור דרך סקווט מלא כלומר שאגנו נמוך יותר מקו ברכיו\n\nהחזרה תספר כאשר האתלט עומד ישר לגמרי בברכיו וידיו על המוט מעל ראשו'
            index++;

            this.movements.push(new Movement(MovementID.row, "Row"));
            this.movements[index].standardText = 'על האתלט להראות בתחילת כל מקטע את צג המכשיר המציג 0 קלוריות / מטרים\n\nעל האתלט לשבת לחלוטין על המכשיר כאשר 2 רגליו מונחות על המכשיר לפני שהוא מתחיל לחתור\n\nעל האתלט להראות את כמות הקלוריות / מטרים בסוף כל מקטע ואינו יכול לקום מהמכשיר לפני שהצג מראה את המספר הנדרש.'
            index++;
            this.movements.push(new Movement(MovementID.wallball, "Wallball"));
            this.movements[index].standardText = 'על האתלט להראות בבירור את גובה המטרה אליה הוא מכוון בהתאם לקטגוריה שלו\n\nהתנועה מתחילה כאשר הכדור מונח על הרצפה\n\nעל האתלט להחזיק בכדור ולרדת לסקווט כאשר עד אשר האגן שלו נמוך יותר מקו ברכיו, לאחר מכן לזרוק את הכדור כלפי המטרה\n\nהחזרה תספר כאשר הכדור יגע עם מרכזו במטרה או מעליה\n\nבמידה והכדור נופל על הרצפה הוא חייב להגיע לעצירה מוחלטת לפני המשך התרגיל'
            index++;
            this.movements.push(new Movement(MovementID.muscleup, "Ring Muscleup"));
            this.movements[index].standardText = 'התנועה מתחיל כאשר האתלט בתליה מלאה על הטבעות, ידיו ישרות\n\nעל האתלט להביא את עצמו עד אשר הוא עולה מעל הטבעות כאשר הוא אינו נוגע בטבעות עם שום חלק אחר של הגוף מאשר ידיו\n\nהתנועה תספר כאשר האתלט נמצא מעל המתח כאשר ידיו ישרות לגמרי, המידה והאתלט בוחר לשרשר חזרות עליו להגיע לתליה מלאה בכל פעם לפני שהחזרה הבאה תתחיל\n\nבמידה והאתלט בוחר בשיטת הקיפינג אין לעבור את גובה הטבעות עם הרגליים';
            index++;

            this.movements.push(new Movement(MovementID.press, "Press"));
            this.movements[index].standardText = 'על האתלט להחזיק את המוט במנח הקדמי בגובה כתפיים וללחוץ את המוט כלפי מעלה בתנועה אחידה\n\nאין לקפל ברכיים באף חלק של התנועה\n\nברגע שמתחילים את התנועה יש לסיים אותה אחרת ישר להניח את המוט טלהתחיל מחדש\n\nהחזרה תספר כאשר האתלט ישר לגמרי, ידיו ישרות מעל ראשו עם המוט'
            index++;
            this.movements.push(new Movement(MovementID.jerk, "Jerk"));
            this.movements[index].standardText = 'על האתלט להחזיר את המוט במנח הקדמי בגובה כתפיים\n\nהאתלט ידחוף את המוט כלפי מעלה, כאשר הוא יכול להיעזר בכיפוף רגליים ולאחר הדחיפה יכנס מתחת למוט עם כפיפה חוזרת של הברכיים ויתפוס אותו\n\nהחזרה תספר כאשר האתלט ישר לגמרי עם המוט מעל ראשו'
            index++;
            this.movements.push(new Movement(MovementID.situp, "Back Squat"));
            this.movements[index].standardText = 'על האתלט להחזיק את המוט במנח אחורי בגובה כתפיו\n\nהאתלט ירד לסקווט עד אשר אגנו נמוך יותר מקו ברכיו ולאחר מכן יתיישר\n\nהחזרה תספר כאשר האתלט ישר לגמרי בברכיו ובחלק גופו העליון'
            index++;
            this.movements.push(new Movement(MovementID.shoulderToOverhead, "Shoulder to Overhead"));
            this.movements[index].standardText = 'על האתלט להביא את המוט מכתפיו עד מעל ראשו בכל תנועה אשר יבחר\n\nהתנועה מתחיל כאשר המוט במנח קדמי בגובה כתפיים ונגמרת כאשר האתלט מחזיק במוט מעל ראשו\n\nהחזרה תספר כאשר האתלט ישר לגמרי בברכיו, בידיו ובפלג גופו העליו כאשר המוט מעל ראשו'
            index++;
            this.movements.push(new Movement(MovementID.barMuscleup, "Bar Muscleup"));
            this.movements[index].standardText = 'התנועה מתחיל כאשר האתלט בתליה מלאה על המתח, ידיו ישרות\n\nעל האתלט להביא את עצמו עד אשר הוא עולה מעל המתח כאשר הוא אינו נוגע במתח עם שום חלק אחר של הגוף מאשר ידיו\n\nהתנועה תספר כאשר האתלט נמצא מעל המתח כאשר ידיו ישרות לגמרי, המידה והאתלט בוחר לשרשר חזרות עליו להגיע לתליה מלאה בכל פעם לפני שהחזרה הבאה תתחיל\n\nבמידה והאתלט בוחר בשיטת הקיפינג אין לעבור את גובה המתח עם הרגליים';
        }));
    }

    movementClicked(movement: Movement) {
        this.popupService.showPopup(new PopupData(movement.name,movement.standardText,'','סרטון התדגה'));
      }
}