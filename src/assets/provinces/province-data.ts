import { Province } from "../../app/utils/province";
import { KeyedStaticCollection } from "../../app/utils/keyed-static-collection";

import {
  AB_BOYS_RATING,
  AB_GIRLS_RATING,
  ATLANTICS_BOYS_RATING,
  ATLANTICS_GIRLS_RATING,
  BC_BOYS_RATING,
  BC_GIRLS_RATING,
  CAN_BOYS_RATING,
  CAN_GIRLS_RATING,
  MB_BOYS_RATING,
  MB_GIRLS_RATING,
  ON_BOYS_RATING,
  ON_GIRLS_RATING,
  QC_BOYS_RATING,
  QC_GIRLS_RATING,
  SK_BOYS_RATING,
  SK_GIRLS_RATING
} from "./ratings";

export const PROVINCES: KeyedStaticCollection<Province> =
  new KeyedStaticCollection<Province>({
    "_AB_":   new Province("_AB_", "AB",
      "E750191D-B2AE-4B93-9159-5A20BD286BFA", 11883,
      "tc.tournamentsoftware.com",
      "Tennis Alberta",
      "http://www.courtsidecanada.ca/communities/alberta/",
      AB_BOYS_RATING, AB_GIRLS_RATING
    ),
    "_BC_":   new Province("_BC_", "BC",
      "3658EAEE-013F-47EA-B5C8-101DF2A076F5", 11884,
      "tc.tournamentsoftware.com",
      "Tennis BC",
      "http://tennisbc.org/",
      BC_BOYS_RATING, BC_GIRLS_RATING
    ),
    "_MB_":  new Province("_MB_", "MB",
      "DEC870CF-18E6-436D-876C-7209AD699470", 11885,
      "tc.tournamentsoftware.com",
      "Tennis Manitoba",
      "http://www.tennismanitoba.com/",
      MB_BOYS_RATING, MB_GIRLS_RATING
    ),

    "_NB_":  new Province("_NB_", "NB",
      "476E729C-4DAF-4A1B-BFA4-17C5AF7FF2C2", 11886,
      "tc.tournamentsoftware.com",
      "Tennis NB",
      "http://www.courtsidecanada.ca/communities/new_brunswick/",
      ATLANTICS_BOYS_RATING, ATLANTICS_GIRLS_RATING
    ),

    "_NL_":  new Province("_NL_", "NL",
      "0EFD65BC-909D-4E90-A6EE-7FA869544EF7", 11887,
      "tc.tournamentsoftware.com",
      "Tennis NL",
      "http://www.courtsidecanada.ca/communities/newfoundland_labrador/",
      ATLANTICS_BOYS_RATING, ATLANTICS_GIRLS_RATING
    ),

    "_NS_":  new Province("_NS_", "NS",
      "147B2CE5-2863-4577-B024-CC607BA386D8", 11888,
      "tc.tournamentsoftware.com",
      "Tennis Nova Scotia",
      "http://www.courtsidecanada.ca/communities/nova_scotia/",
      ATLANTICS_BOYS_RATING, ATLANTICS_GIRLS_RATING
    ),

    "_ON_":  new Province("_ON_", "ON",
      "1E0C1B66-6BCC-427A-9B16-D5F3F06913A4", 11889,
      "ota.tournamentsoftware.com",
      "OTA",
      "http://www.tennisontario.com",
      ON_BOYS_RATING, ON_GIRLS_RATING
    ),

    "_PE_":  new Province("_PE_", "PE",
      "E337253B-50EB-4731-BB88-6364CA3AC5E5", 11890,
      "tc.tournamentsoftware.com",
      "Tennis PEI",
      "http://www.courtsidecanada.ca/communities/pei/",
      ATLANTICS_BOYS_RATING, ATLANTICS_GIRLS_RATING
    ),

    "_QC_":  new Province("_QC_", "QC",
      "0BA02037-F413-4AC2-B291-5793C2172E14",
      11891,
      "tq.tournamentsoftware.com",
      "Tennis Quebec",
      "http://www.tennis.qc.ca/SiteWeb/index.php",
      QC_BOYS_RATING, QC_GIRLS_RATING
    ),

    "_SK_":  new Province("_SK_", "SK",
      "D1BEE73E-93F5-4590-A88A-98BD2A231221",
      11892,
      "tc.tournamentsoftware.com",
      "Tennis Saskatchewan",
      "http://www.courtsidecanada.ca/communities/saskatchewan/",
      SK_BOYS_RATING, SK_GIRLS_RATING
    ),

    "_CAN_":  new Province("_CAN_", "CAN",
      "XXXXXX",
      11892,
      "tc.tournamentsoftware.com",
      "Tennis Canada",
      "http://tenniscanada.com",
      CAN_BOYS_RATING, CAN_GIRLS_RATING
    )
  });
