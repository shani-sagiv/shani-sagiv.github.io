import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
import PAPHOS_IMAGES from "./images";


export const PAPHOS: Destination = {
  id: "PAPHOS",
  profileImg: PAPHOS_IMAGES.profile,
  displayName: {
    hebrew: "פאפוס",
    english: "Paphos",
  },
  images: PAPHOS_IMAGES.general,
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
