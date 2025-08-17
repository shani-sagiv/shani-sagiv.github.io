import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";

export const SEOUL: Destination = {
  id: "SEOUL",
  displayName: {
    hebrew: "סיאול",
    english: "seoul",
  },
  images:IMAGES.general,
  description: "ממש חמודה וענקית ויש מליון לעשות",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
  name: "PIPE Hostel Myeongdong - 402",
  dates: [{ from: createDate("07/08/2025"), to: createDate("14/08/2025") }],
  description:"חדר בגודל של קופסאת גפרורים אבל וואלה היה ממש אחלה ונקי והמיקום פצצה",
  googleMapLink: "https://www.airbnb.com/rooms/24947938?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvbkNvbmZpcm1hdGlvblRlbXBsYXRl&euid=d9728e2c-5568-11c7-d941-1c25cf2debf3&source_impression_id=p3_1755069652_P3MMrw7tToJDGRqU",
  images: IMAGES.PIPE,
},  {
  name: "Entire home in Donggyo-dong, Mapo-gu, South Korea",
  dates: [{ from: createDate("14/08/2025"), to: createDate("28/08/2025") }],
  description:"קצת שבורה אבל אחלה ממש ואחלה מיקום ויש הכל",
  googleMapLink: "https://www.airbnb.com/rooms/46609346?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvblBlbmRpbmdUZW1wbGF0ZQ%3D%3D&euid=3970760f-eae6-adbe-9d80-e2fe471b6283&source_impression_id=p3_1755069824_P3TiCKLDMdveeXrC",
  images: IMAGES.DonggyoDong,
}
  ],
  foods: [],
  attractionsGroups:[
    {
      name: "מרכז-צפן (Insadong / Jongno / Ikseon-dong), צפון-מערב (Gyeongbokgung / Bukchon / Samcheong-dong)",
      description:"",
      // description: "אזור מאוד חמוד להסתובב, מלא גלריות, מסעדות, בתי קפה וחנויות",}
      attractions:[
      {
        name: "Ssamziegil / Insa-dong Culture Street",
        description:"אזור מאוד חמוד להסתובב",
        googleMapLink: "https://maps.app.goo.gl/sub8foPesA1PsgiGA",
        images: IMAGES.InsaDong,
      },
      {
        name:"jogyesa temple",
        description:"מקדש בודהיסטי מאוד יפה",
        googleMapLink:"https://maps.app.goo.gl/hvc93enJYaiCtSa87",
        images: IMAGES.jogyesa,
      },
      {
        name: "Bukchon Hanok Village",
        description:"כפר מסורתי עם בתים יפים",
        googleMapLink: "https://maps.app.goo.gl/4SqiVentgrWgL6ig6",
        images: IMAGES.bukchon,
      }
  ]
}],
  attractions: [
    {
      name:"Running man & Dynamic maze",
      description:"אטרקציית מבוך קצת מורה אבל הrunning man נדיר מאוד",
      googleMapLink: "https://maps.app.goo.gl/n8ehhnQotjKQTbZZ8",
      images: IMAGES.runningMan,
    }

  ],
  // attractionsGroups: [],
  nightlife: [
    {
    name: "Hongdae",
    description: "אזור מאוד חזק עם הרבה מועדונים וברים",
    googleMapLink: "https://maps.app.goo.gl/DMQTgvH6zGZkMbrf7",
    images: IMAGES.hongdaeNightLife,
  },
  {
    name: "La Bamba",
    description: "אחלה בר רגאטון",
    googleMapLink:"https://maps.app.goo.gl/t2huShr7ticSvTmt5",
    images: IMAGES.LaBamba,
  },
    {
    name: "홍대클럽 레이저 hongdae club razer seoul nightclub edm",
    description: "אחלה מייז",
    googleMapLink:"https://maps.app.goo.gl/K43WCaYKu5Fet3G79",
    images: IMAGES.razer,
  },
  {
    name: "Jongno Bar Street",
    description: "אזור ברים מאוד חזק",
    googleMapLink: "https://maps.app.goo.gl/HMCwmhpnWgrsu6Kc7",
    images: IMAGES.Jongno,

  }
  ],
  shells: [],
  gold_recommendation: [],
};


// {
//   name: "",
//   dates: [{ from: createDate("00/00/2025"), to: createDate("00/00/2025") }],
//   description:"",
//   images: IMAGES.,
// }

// {
//   name: "",
//   description: "",
//   googleMapLink: "",
//   images: IMAGES.,
// }