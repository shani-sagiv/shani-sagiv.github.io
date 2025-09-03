import {createDate} from "helpers/dateHelpers";
import { dates } from "models/Recommendation";


export interface people{
    name:string,
    dates: dates[];
}

const cyprus_with_friens:dates = { from: createDate("06/03/2024"), to: createDate("11/03/2024") }


const MIKA:people = {
    name:"מיקה",
    dates:[{from: createDate("29/09/2024"), to: createDate("17/10/2024") }]
}
const TOMER_HADAD:people = {
    name:"תומר חדד",
    dates:[{from: createDate("07/10/2024"), to: createDate("17/10/2024") }]
}
const ROTEM:people = {
    name:"רותם",
    dates:[{from: createDate("24/08/2024"), to: createDate("28/08/2024") }, {from: createDate("12/10/2024"), to: createDate("17/10/2024") }]
}
const OMER:people = {
    name:"עומר",
    dates:[{from: createDate("27/09/2024"), to: createDate("11/10/2024") }]
}
const EILON:people = {
    name:"אילון",
    dates:[cyprus_with_friens, {from: createDate("27/09/2024"), to: createDate("11/10/2024") }]
}
const ARI:people = {
    name:"ארי",
    dates:[cyprus_with_friens]
}
const SHAY_MOR:people = {
    name:"שי",
    dates:[{from: createDate("05/11/2024"), to: createDate("19/11/2024") }]
}
const LUSTIG:people = {
    name:"לוסטיג ורוני",
    dates:[cyprus_with_friens]
}
const KLIL:people = {
    name:"כליל ורוני",
    dates:[cyprus_with_friens]
}
const TOMER_SEGEV:people = {
    name:"תומר שגב",
    dates:[cyprus_with_friens]
}
const ITZIK:people = {
    name:"איציק אבא שגיב",
    dates:[{from: createDate("19/09/2024"), to: createDate("21/09/2024") }]
}
const YONI:people = {
    name:"יוני",
    dates:[
        {from: createDate("18/11/2024"), to: createDate("26/11/2024") },
        {from: createDate("20/01/2025"), to: createDate("28/01/2025") }
    ]
}
const DANON:people = {
    name:"דנון",
    dates:[{from: createDate("18/11/2024"), to: createDate("26/11/2024") }]
}
const NOFAR:people = {
    name:"נופר",
    dates:[
        {from: createDate("27/02/2025"), to: createDate("02/04/2025") },
        {from: createDate("15/06/2025"), to: createDate("18/06/2025") }
    ]
}
const AMIT_OFRI:people = {
    name:"עמית ועופרי",
    dates:[
        {from: createDate("20/01/2025"), to: createDate("23/01/2025") },
        {from: createDate("12/03/2025"), to: createDate("14/03/2025") },
        {from: createDate("08/04/2025"), to: createDate("10/04/2025") },
    ]
}
const YANIV_AND_IDO:people = {
    name:"יניב ועידו",
    dates:[
        {from: createDate("18/11/2024"), to: createDate("26/11/2024") },
        {from: createDate("30/12/2024"), to: createDate("19/01/2025") }
    ]
}
const ZIV_NOAM:people = {
    name:"זיו ונועם",
    dates:[
        {from: createDate("22/06/2025"), to: createDate("06/07/2025") },
    ]
}
const NOY_MANOR:people = {
    name:"נוי ומנור",
    dates:[
        {from: createDate("27/06/2025"), to: createDate("07/07/2025") },
    ]
}
const MAAYAN:people = {
    name:"מעיין",
    dates:[
        {from: createDate("13/07/2025"), to: createDate("21/07/2025") },
    ]
}

const SHANIS_PARENTS:people = {
    name:"הורים שני",
    dates:[{from: createDate("16/07/2025"), to: createDate("02/08/2025") }]
}

const SAGIVS_PARENTS:people = {
    name:"הורים שגיב",
    dates:[{from: createDate("28/11/2024"), to: createDate("07/12/2024") }]
}

export const PEOPLES: people[] = [
  MIKA,
  TOMER_HADAD,
  ROTEM,
  OMER,
  EILON,
  ARI,
  SHAY_MOR,
  LUSTIG,
  KLIL,
  TOMER_SEGEV,
  ITZIK,
  YONI,
  DANON,
  NOFAR,
  AMIT_OFRI,
  YANIV_AND_IDO,
  ZIV_NOAM,
  NOY_MANOR,
  MAAYAN,
  SHANIS_PARENTS,
  SAGIVS_PARENTS,
];


//  npx plop component --name=seoul --location=south_korea