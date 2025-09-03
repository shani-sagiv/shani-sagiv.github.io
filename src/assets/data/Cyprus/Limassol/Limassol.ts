import LIMASSOL_IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";
import {  Destination } from "models";

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