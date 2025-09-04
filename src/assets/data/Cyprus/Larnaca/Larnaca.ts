
import { createDate } from "helpers/dateHelpers";
import { Destination } from "models";
import LARNACA_IMAGES from "./images";

export const Larnaca: Destination = {
  id: "Larnaca",
  profileImg: LARNACA_IMAGES.profileImg,
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
