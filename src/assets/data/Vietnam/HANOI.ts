import { Destination } from "models/Destination";
import { HANOI_IMAGES } from "../../img/Vietnam";
import { createDate } from "../../../helpers/dateHelpers";
import { HANOI_HA_LONG_CRUISE } from "./HANOI_HA_LONG_CRUISE";

export const HANOI: Destination = {
  id: "HANOI",
  displayName: {
    hebrew: "האנוי",
    english: "hanoi",
  },
  description:
    "העיר בירה של ויאטם, שווקים בתי קפה צפוף ורעש ולחצות כביש זה 50% הצלחה 50% מוות",
  profileImg: HANOI_IMAGES.profileImg,
  hotels: [
    {
      name: "Tung Trang Hotel",
      dates: [{ from: createDate("13/07/2024"), to: createDate("19/07/2024") }],
      description: "מלון סביר מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/rm32r6HW1cTYM6mU6",
      images: [],
    },
    {
      name: "Little Hanoi Old Quarter Hostel",
      dates: [{ from: createDate("28/08/2024"), to: createDate("05/09/2024") }],
      description: "מלון סביר מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/rm32r6HW1cTYM6mU6",
      images: [],
    },
    {
      name: "Hanoi Holiday Diamond Hotel",
      dates: [{ from: createDate("27/11/2024"), to: createDate("28/11/2024") }],
      description: "מלון חמוד מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/LgY2ntxsBekUzSFw8",
      images: [],
    },
    {
      name: "Solare De Monte Hotel & Spa",
      dates: [{ from: createDate("28/11/2024"), to: createDate("02/12/2024") }],
      description: "מלון טוב מיקום טוב בחיים לא התייחסו אלי ככ יפה",
      googleMapLink: "https://maps.app.goo.gl/v89CN3jwiVWcrqRh7",
      images: HANOI_IMAGES.Solare,
    },
  ],
  foods: [
    {
      name: "SushiLAB",
      googleMapLink: "https://maps.app.goo.gl/Mwt4uvxxzZWnmPdX6",
      description: "אחלה של סושי!",
      images: HANOI_IMAGES.SushiLAB,
    },
  ],
  attractions: [
    HANOI_HA_LONG_CRUISE.HANOI,
    {
      name: "Gifthaus",
      googleMapLink: "https://maps.app.goo.gl/SbaRRnY3yFjNFRRg6",
      description:
        "חנות עם מליון משחקי קלפים וקופסא והכל אחלה מחירים, יש שם גם חתול ממש ממש חמוד",
      images: HANOI_IMAGES.gifthouse,
    },
    {
      name: "Hanoi Weekend Night Market",
      googleMapLink: "https://maps.app.goo.gl/mtLwXuXLXExovP7X9",
      description: "שוק ממש חמוד לא הרבה אוכל אבל מלא דוכנים של הכל",
      images: HANOI_IMAGES.NightMarket,
    },
    {
      name: "טיול ברגל מסביב לאגם הואן קיים",
      googleMapLink: "https://maps.app.goo.gl/koRjQqmkh1uCxPE16",
      description: "סתם להסתובב ברגל אם המזג אוויר נעים",
      images: HANOI_IMAGES.lake,
    },
  ],
  nightlife: [
    {
      name: "Unmute hanoi",
      googleMapLink: "https://maps.app.goo.gl/vxXKWfVm8PZrEW8u5",
      description:
        "מועדון מעניין, אנשים מוזרים מערכת סאונג מטורפת אחלה של גג רגוע רק באסה שאין אמצע בין הרחבה הסגורה לגג הרגוע",
      images: HANOI_IMAGES.unmute,
    },
  ],
  shells: [],
};
