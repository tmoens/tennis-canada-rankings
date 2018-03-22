import { Province } from "./province";
import { RankingGroup } from "./ranking-group";

export class RankingCategory {
  id: string;
  name: string;
  vrid: string;
  gender: string;
  category: string;
  group:string;
  constructor(  id: string,
                name: string,
                vrid: string,
                gender: string,
                category: string,
                group:string,
  ) {
    this.id = id;
    this.name = name;
    this.vrid = vrid;
    this.gender = gender;
    this.category = category;
    this.group = group;
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
