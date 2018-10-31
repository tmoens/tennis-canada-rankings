import { Province } from "./province";
import { RankingGroup } from "./ranking-group";

/*
 id   - is just an id, but is also used to look up a textual name in english or french
 name - is going to go away
 vrid - is used to build a URL to go to navigate to the corresponding VR rankings page
 gender - also used in 

 */
export class RankingCategory {
  constructor(  public id: string,
                public name: string,
                public vrid: string,
                public gender: string,
                public category: string,
                public group:string,
                public lower: number = 0,
  ) {
  }

  // depending on the province, the url may differ somewhat

  getVRURL(p:Province, rg: RankingGroup):string {
    let url = "https://" + p.vrSite + "/ranking/category.aspx?rid=" + rg.vrId + "&category=" +this.vrid;
    if (!p.isCanada()) {
      url = url + "&ogid=" + p.vrid;
    }
    return url;
  }

  // Check if the ID contains the specified string
  checkIdForString(s:string):boolean {
    return this.id.includes(s);
  }
}
