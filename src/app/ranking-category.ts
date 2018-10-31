import { Province } from "./province";
import { RankingGroup } from "./ranking-group";

/*
 vrCode    - identifies category in the vrapi
 id        - identifying string used as a translation token for the category name
 vrURLCode - identifies the category when building a URL to
             navigate to the corresponding VR rankings page

 */
export class RankingCategory {
  constructor(  public vrCode: string,
                public id: string,
                public vrURLcode: string,
                public lower: number = 0,
  ) {
  }

  // depending on the province, the url may differ somewhat
  getVRURL(p:Province, rg: RankingGroup):string {
    let url = "https://" + p.vrSite + "/ranking/category.aspx?rid=" + rg.vrId + "&category=" +this.vrURLcode;
    if (!p.isCanada()) {
      url = url + "&ogid=" + p.vrid;
    }
    return url;
  }
}
