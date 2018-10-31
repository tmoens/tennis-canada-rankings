import {Rating} from "./rating";

export class Province {
  constructor(
    public name:string,
    public abbrv:string,
    public vrid:string,
    public vrshortId:number,
    public vrSite:string,
    public PTAName:string,
    public website:string,
    public boysRating: Rating,
    public girlsRating: Rating){
  }
  getFlagPath():string {
    return "assets/images/PTAs/" + this.abbrv + "/flag.svg.png";
  }
  getLogoPath():string {
    return "assets/images/PTAs/" + this.abbrv + "/logo.jpg";
  }

  isCanada():boolean {
    return (this.abbrv == "CAN");
  }
}
