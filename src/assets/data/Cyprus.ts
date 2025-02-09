import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
import profile from "assets/img/Cyprus/profile_compressed.jpeg";
import {
  LARNACA_IMAGES,
  LIMASSOL_IMAGES,
  PAPHOS_IMAGES,
  VASA_IMAGES,
} from "../img/Cyprus";
import { shells } from "../img/Cyprus/Limassol";

export const CYPRUS: Country = {
  id: "CYPRUS",
  name: "CYPRUS",
  displayName: {
    hebrew: "קפריסין",
    english: "Cyprus",
  },
  description: "קפריסין לא יודע",
  // description:
  //   "תאילנד היא מדינה טרופית בדרום-מזרח אסיה, המפורסמת בחופים קסומים, מקדשים בודהיסטיים מרהיבים ותרבות עשירה. בנוסף, המדינה מציעה חוויות קולינריות מגוונות, חיי לילה תוססים ושווקים ססגוניים",
  gold_recommendation: [],
  profileImg: profile,
  // inProgress: true,
};

export const LIMASSOL: Destination = {
  id: "LIMASSOL",
  profileImg: LIMASSOL_IMAGES.profile,
  displayName: {
    hebrew: "לימסול",
    english: "Limassol",
  },
  description: "שני תשלימי",
  shells: LIMASSOL_IMAGES.shells,
  images: LIMASSOL_IMAGES.general,
  hotels: [
    {
      name: "Chrysta Villa",
      dates: [{ from: createDate("06/03/2024"), to: createDate("11/03/2024") }],
      description: "וילה גדולה ומאובזרת בהכל",
      price: "4,785 שח לכל הלילות",
      googleMapLink: "https://maps.app.goo.gl/FuEJkGXGz14hDC27A",
      images: LIMASSOL_IMAGES.Chrysta,
    },
    {
      name: "Stay cypress St1",
      dates: [{ from: createDate("24/03/2024"), to: createDate("31/03/2024") }],
      description: "דירה חמודה אחלה של מיקון",
      price: "1,763 שח לכל הלילות",
      googleMapLink:
        "https://www.booking.com/hotel/cy/stay-cypress-st.he.html#map_closed",
      images: LIMASSOL_IMAGES.Stay,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Limassol Castle - Cyprus Medieval Museum",
      description: "מוזיאון מאוד כיף",
      images: LIMASSOL_IMAGES.Castle,
    },
    {
      name: "Limassol Municipal Garden",
      description: "גן חיות",
      images: LIMASSOL_IMAGES.MunicipalGarden,
    },
  ],
  nightlife: [],
};

export const VASA: Destination = {
  id: "VASA",
  profileImg: VASA_IMAGES.profile,
  displayName: {
    hebrew: "ואסה",
    english: "Vasa",
  },
  description: "כפר עם מעט מאוד אנשים חנויות או משהו לעשות",
  hotels: [
    {
      name: "Andre Marie studios",
      dates: [{ from: createDate("11/03/2024"), to: createDate("17/03/2024") }],
      description: "דירה ממש יפה וחמודה וגדולה",
      price: "1484 שח לכל הלילות",
      googleMapLink: "https://maps.app.goo.gl/ANyHN6FZTPJdtLAt5",
      images: VASA_IMAGES.Andre,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Papaioannou winery",
      description: "יקב נחמד עם בעלים חמוד",
      googleMapLink: "https://maps.app.goo.gl/LWJ9BbJtyuuLzTP39",
      images: VASA_IMAGES.Papaioannou,
    },
    {
      name: "Linos Winery",
      description: "יקב נחמד עם אחלה יין כחול",
      googleMapLink: "https://maps.app.goo.gl/NrqabDKvBoo1don58",
      images: VASA_IMAGES.Linos,
    },
  ],
  nightlife: [],
};

export const PAPHOS: Destination = {
  id: "PAPHOS",
  profileImg: PAPHOS_IMAGES.profile,
  displayName: {
    hebrew: "פאפוס",
    english: "Paphos",
  },
  description: "עיר מרכזית, חיי לילה",
  hotels: [
    {
      name: "Nereus Hotel",
      dates: [{ from: createDate("17/03/2024"), to: createDate("20/03/2024") }],
      description: "מקום מסריח ברחנו משם",
      price: "772 שח לכל הלילות",
      googleMapLink: "https://maps.app.goo.gl/TpfZTg9Bbk7SrTyr6",
    },
    {
      name: "Almyria Apartments - Apartment 5",
      dates: [{ from: createDate("20/03/2024"), to: createDate("22/03/2024") }],
      description: "אחלה של דירה אולי המקלחת הייתה בעייתית",
      googleMapLink:
        "https://www.airbnb.com/rooms/899859288626235968?guests=1&adults=1&s=67&unique_share_id=333d45be-d338-48fa-9681-0319ea79b9e7",
    },
    {
      name: "Dionysos Central Hotel",
      dates: [{ from: createDate("22/03/2024"), to: createDate("24/03/2024") }],
      description: "אחלה של מלון",
      googleMapLink: "https://maps.app.goo.gl/oqwV1SYFmiQqz5tZ8",
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Catacombs",
      description: "מערכות קבורה תת-קרקעיות",
      images: PAPHOS_IMAGES.Catacombs,
    },
    {
      name: "Island Cove Adventure Mini Golf",
      description: "מיני גולף חמוד",
      images: PAPHOS_IMAGES.MiniGolf,
    },
  ],
  nightlife: [],
};

export const LARNACA: Destination = {
  id: "LARNACA",
  profileImg: LARNACA_IMAGES.profile,
  displayName: {
    hebrew: "לרנקה",
    english: "Larnaca",
  },
  description: "עיר מרכזית, חיי לילה",
  hotels: [
    {
      name: "Studio apartment central",
      dates: [{ from: createDate("31/03/2024"), to: createDate("01/04/2024") }],
      description: "אחלה דירה חדשה",
      price: "185",
      googleMapLink:
        "https://www.airbnb.com/rooms/897623147844851502?guests=1&adults=1&s=67&unique_share_id=026f6041-8c55-435d-8ad2-d22e8a94967b",
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
};
