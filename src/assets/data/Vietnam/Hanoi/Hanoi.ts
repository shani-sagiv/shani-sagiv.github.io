import { Destination } from "models/Destination";
// import { IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import { HanoiHaLongCruise } from "../HanoiHaLongCruise";
// import IMAGES from "./MuiNe/images";
import IMAGES from "./images";

export const Hanoi: Destination = {
  id: "Hanoi",
  displayName: {
    hebrew: "האנוי",
    english: "hanoi",
  },
  images: IMAGES.general,
  description:
    "העיר בירה של ויאטם, שווקים בתי קפה צפוף ורעש ולחצות כביש זה 50% הצלחה 50% מוות",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Tung Trang Hotel",
      dates: [{ from: createDate("13/07/2024"), to: createDate("19/07/2024") }],
      description: "מלון סביר מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/rm32r6HW1cTYM6mU6",
      // images: [],
    },
    {
      name: "Little Hanoi Old Quarter Hostel",
      dates: [{ from: createDate("28/08/2024"), to: createDate("05/09/2024") }],
      description: "מלון סביר מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/rm32r6HW1cTYM6mU6",
      // images: [],
    },
    {
      name: "Hanoi Holiday Diamond Hotel",
      dates: [{ from: createDate("27/11/2024"), to: createDate("28/11/2024") }],
      description: "מלון חמוד מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/LgY2ntxsBekUzSFw8",
      // images: [],
    },
    {
      name: "Solare De Monte Hotel & Spa",
      dates: [{ from: createDate("28/11/2024"), to: createDate("02/12/2024") }],
      description: "מלון טוב מיקום טוב בחיים לא התייחסו אלי ככ יפה",
      googleMapLink: "https://maps.app.goo.gl/v89CN3jwiVWcrqRh7",
      id: "Solare", images: IMAGES.Solare,
    },
  ],
  foods: [
    {
      name: "SushiLAB",
      googleMapLink: "https://maps.app.goo.gl/Mwt4uvxxzZWnmPdX6",
      description: "אחלה של סושי!",
      id: "SushiLAB", images: IMAGES.SushiLAB,
    },
  ],
  attractions: [
    HanoiHaLongCruise.Hanoi,
    {
      name: "Gifthaus",
      googleMapLink: "https://maps.app.goo.gl/SbaRRnY3yFjNFRRg6",
      description:
        "חנות עם מליון משחקי קלפים וקופסא והכל אחלה מחירים, יש שם גם חתול ממש ממש חמוד",
      id: "gifthouse", images: IMAGES.gifthouse,
    },
    {
      name: "Hanoi Weekend Night Market",
      googleMapLink: "https://maps.app.goo.gl/mtLwXuXLXExovP7X9",
      description: "שוק ממש חמוד לא הרבה אוכל אבל מלא דוכנים של הכל",
      id: "NightMarket", images: IMAGES.NightMarket,
    },
    {
      name: "טיול ברגל מסביב לאגם הואן קיים",
      googleMapLink: "https://maps.app.goo.gl/koRjQqmkh1uCxPE16",
      description: "סתם להסתובב ברגל אם המזג אוויר נעים",
      id: "lake", images: IMAGES.lake,
    },    {
      name: "Vietnam National Museum of History",
      googleMapLink: "https://maps.app.goo.gl/pynBdefBxCQ8FqK6A",
      description: "מאוד כיף נשארנו עד הסגירה עלאק הישראלים המטומטים אמרו שמשעמם שם",
      id: "historia", images: IMAGES.historia,
    },
  ],
  nightlife: [
    {
      name: "Unmute hanoi",
      googleMapLink: "https://maps.app.goo.gl/vxXKWfVm8PZrEW8u5",
      description:
        "מועדון מעניין, אנשים מוזרים מערכת סאונג מטורפת אחלה של גג רגוע רק באסה שאין אמצע בין הרחבה הסגורה לגג הרגוע",
      id: "unmute", images: IMAGES.unmute,
    },
  ],
  shells: [],
};
