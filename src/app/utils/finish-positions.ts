import {Injectable} from '@angular/core';

@Injectable()
export class FinishPositionLabeler {
  constructor() {  }

  getLabel(fp:number):string {
    switch(fp) {
      case 1: return "_winner_abbrv_";
      case 2: return "_finalist_abbrv_";
      case 4: return "_semi_finalist_abbrv_";
      case 8: return "_quarter_finalist_abbrv_";
      case 11: return "11th";
      case 12: return "12th";
      case 13: return "13th";
      default: return this.addSuffix(fp);
    }
  }
  getLabelLong(fp:number):string {
    switch(fp) {
      case 1: return "_winner_";
      case 2: return "_finalist_";
      case 4: return "_semi_finalist_";
      case 8: return "_quarter_finalist_";
      case 11: return "11th";
      case 12: return "12th";
      case 13: return "13th";
      default: return this.addSuffix(fp);
    }
  }

  addSuffix(fp:number):string {
    switch (fp % 10) {
      case 1:
        return fp.toString()+ "st";
      case 2:
        return fp.toString() + "nd";
      case 3:
        return fp.toString() + "rd";
      default:
        return fp.toString() + "th";
    }
  }
}
