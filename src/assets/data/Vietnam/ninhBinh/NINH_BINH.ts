import { Destination } from "models/Destination";
import { NINH_BINH_IMAGES } from "./images";
// import { NINH_BINH_IMAGES } from "../../img/Vietnam";

export const NINH_BINH: Destination = {
  id: "NINH_BINH",
  displayName: {
    hebrew: "נין בין",
    english: "Ninh Bình",
  },
  
  description: "באנו לטיול יום מהאנוי",
  profileImg: NINH_BINH_IMAGES.profileImg,
  hotels: [],
  foods: [],
    images: NINH_BINH_IMAGES.general,

  attractions: [
    {
      name: "Hoa Lu Ancient Capital",
      googleMapLink: "https://maps.app.goo.gl/2QAu5xwVDeDQapUp9",
      description: "מקדש מאוד נחמד ",
      images: NINH_BINH_IMAGES.HoaLu,
    },
    {
      name: "נהר Tràng An",
      googleMapLink: "https://maps.app.goo.gl/MSWKbg6itPispWpX9",
      description: "מפליגים בנהר עם איזה סירה קטנה מאוד נחמד ויפה",
      images: NINH_BINH_IMAGES.river,
    },
    {
      name: "טיול אופניים התחיל איפשהו פה",
      googleMapLink: "https://maps.app.goo.gl/Czt8jWbmd621gqMq8",
      description: "סיבוב עם אופניים שם היה מאוד נחמד ונעים בנס",
      images: NINH_BINH_IMAGES.Cycle,
    },
    {
      name: "Hang Múa",
      googleMapLink: "https://maps.app.goo.gl/PcU684Yiq5EHXNHY6",
      description: "נקודת תצפית נחמדה 500 מדרגות ואזור חמוד גם לסתם קפה למטה",
      images: NINH_BINH_IMAGES.HangMua,
    },
  ],
  nightlife: [],
  shells: [],
};
