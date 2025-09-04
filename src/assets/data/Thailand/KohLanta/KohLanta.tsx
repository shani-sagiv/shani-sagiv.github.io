import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";

export const KohLanta: Destination = {
  id: "KohLanta",
  profileImg: IMAGES.profileImg,
  displayName: {
    hebrew: "קו לנטה",
    english: "Koh Lanta",
  },
  images: IMAGES.general,
  shells: IMAGES.shells,
  description:
    "קו לנטה הוא אי שקט ורגוע בדרום תאילנד, הידוע בחופים זהובים, מי טורקיז ושוניות אלמוגים מושלמות לצלילה ושנורקלינג. האי מציע אווירה נינוחה עם עיירות חוף קטנות, נופים ירוקים ומקומות מפלט למי שמחפש להתרחק מהמולת התיירות.",
  hotels: [
    {
      name: "Lanta Riviera Resort",
      dates: [{ from: createDate("17/04/2024"), to: createDate("30/04/2024") }],
      description:
        "מלון על החוף, חדרים גדולים ונקיים, בריכה כייפית! המקום ממש לא עמוס ויש המון ברים ומסעדות על החוף במרחק הליכה",
      price: "75 ש״ח ללילה",

      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
      images: IMAGES.hotelLantaRiviera,
    },
  ],
  foods: [
    {
      name: "Lanta Riviera Resort",
      description: "המסעדה בבריכה של המלון הייתה אחלה ממש, אכלנו בה מלאאא  ",
      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
      id: "restaurantsLantaRiviera",
    images: IMAGES.restaurantsLantaRiviera,
    },
    {
      name: "Moonwalk Restaurant & Bar",
      description:
        "מסעדה ממש חמודה על החוף, כמה דק הליכה מהחוף של המלון. המלצריות היו ממש נחמדות והאוכל מצויין",
      googleMapLink: "https://maps.app.goo.gl/t66ajYqb2s9AKVnw5",
      id: "restaurantsMoonwalk",
    images: IMAGES.restaurantsMoonwalk,
    },

    {
      name: "M Thai Food",
      description:
        "ארוחת בוקר חמודה ב100 באט!! יש גם אחלה של צהריים/ערב. ממש דקה הליכה מהמלון",
      googleMapLink: "https://maps.app.goo.gl/9T8JspxesXBq9HnTA",
      // images: KHO_LANTA.restaurantsMoonwalk,
    },
  ],
  attractions: [
    {
      name: "Following Giants",
      description:
        "חוות פילים ממש מוסרית, הפילים משוחררים בחופשיות, לא נוגעים בהם או מציקים להם. הסבירו לנו בכניסה על שיקום פילים ששימשו לבידור בני אדם.",
      googleMapLink: "https://maps.app.goo.gl/1B1HYB4Soi51KvLU8",
      id: "FollowingGiants",
    images: IMAGES.FollowingGiants,
    },
    {
      name: "גאות ושפל ממש גדולים",
      description: "יש שם גאות ושפל ממש חזקים אז אפשר לבוא לשם לראות המון מהים",
      id: "beachTravel",
    images: IMAGES.beachTravel,
    },
    {
      name: "שוק לילה",
      description:
        "בצפון האי יש שוק קטן וחמוד בלילה, יש דוכני אוכל נחמד וכיף להסתובב",
      googleMapLink: "https://maps.app.goo.gl/FxiaFTCA2EckFqUV6",
      id: "nightMarket",
    images: IMAGES.nightMarket,
    },
  ],
  nightlife: [
    {
      name: "Beach Bars",
      description:
        "יש על החוף מלא ברים, מושלם לראות את השקיעה ולשבת בלילה. לפעמים גם יש מופעי אש, אפשר לשאול",
      id: "BeachBars",
    images: IMAGES.BeachBars,
    },
  ],
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