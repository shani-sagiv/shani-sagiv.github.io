import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";

export const BANGKOK: Destination = {
  id: "BANGKOK",
  profileImg: IMAGES.profileImg,
  displayName: {
    hebrew: "בנגקוק",
    english: "Bangkok",
  },
  images: IMAGES.general,
  description: "אחלה של בנגקוק מאוד כיפית",
  hotels: [
    {
      name: "New Siam II",
      dates: [{ from: createDate("13/04/2024"), to: createDate("17/04/2024") }],
      description: "מלון חמוד אחלה אזור בריכה חמדודה",
      googleMapLink: "https://maps.app.goo.gl/aPa7xCb6AwvWzWWq6",
      images: IMAGES.NewSiam,
    },
    {
      name: "Bangkok Sleep Nest Hostel",
      dates: [{ from: createDate("05/09/2024"), to: createDate("06/09/2024") }],
      description: "אחלה מלון קרוב לשדה תעופה אין המון לעשות באזור",
      googleMapLink: "https://maps.app.goo.gl/y6wWgh5HteNwuXFK6",
    },
    {
      name: "Baan Kraivit Asok, K HOME ASOK",
      dates: [{ from: createDate("04/04/2025"), to: createDate("08/04/2025") }],
      description: "מאוד מאוד חמוד אחלה של מיקום סבבה",
      googleMapLink: "https://maps.app.goo.gl/cP4w1CtoNUG9GYzV6",
    },
    {
      name: "Holiday Inn Bangkok Silom by IHG",
      dates: [{ from: createDate("08/04/2025"), to: createDate("10/04/2025") }],
      images: IMAGES.HolidayInn,
      description: "אחלה של פינוק תודה רבה לסבא דוד של שני",
      googleMapLink: "https://maps.app.goo.gl/Dk7B9KWzEhDiCcgc8",
    },    {
      name: "Vismaya Suvarnabhumi Hotel",
      dates: [{ from: createDate("08/04/2025"), to: createDate("09/04/2025") }],
      images: IMAGES.Vismaya,
      description: "מלון ממש ממש חמוד קרוב רצח לשדה מומלץ אם צריך עצירה של יום",
      googleMapLink: "https://maps.app.goo.gl/Dk7B9KWzEhDiCcgc8",
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Chatuchak Weekend Market",
      description: "שוק ענק ענק ענק",
      googleMapLink: "https://maps.app.goo.gl/i5RLkigxRiQiYMPS6",
      images: IMAGES.chatuchak,
    },
    {
      name: "Terminal 21 Asok",
      description: "קניון חמוד",
      googleMapLink: "https://maps.app.goo.gl/vTr9PudCH4eZ1HKV7",
      images: IMAGES.Terminal,
    },
    {
      name: "Platinum mall",
      description: "קניון חמוד חצי שוק",
      googleMapLink: "https://maps.app.goo.gl/UMJco4TqpbumdBps6",
      images: IMAGES.Platinum,
    },
  ],
  nightlife: [],
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