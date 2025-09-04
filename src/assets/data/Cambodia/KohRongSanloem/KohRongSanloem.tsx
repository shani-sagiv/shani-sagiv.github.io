import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const KohRongSanloem: Destination = {
  id: "KohRongSanloem",
  displayName: {
    hebrew: "קו רונג סנלואם",
    english: "koh rong sanloem",
  },
  images: IMAGES.general,
  description: "",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Beach House Cambodia",
      dates: [{ from: createDate("28/01/2025"), to: createDate("01/02/2025") }],
      description: "מקום דלוח אבל מים חמים ומזגן",
      googleMapLink: "https://maps.app.goo.gl/MBCpRs9k7oi2neGH8",
      images: IMAGES.BeachHouse,
    },
    {
      name: "Mpay Bay Guest House",
      dates: [{ from: createDate("01/02/2025"), to: createDate("11/02/2025") }],
      description: "וואו וואו אמאלה ואבאלה",
      price: "40 דולר ללילה",
      googleMapLink: "https://maps.app.goo.gl/z5yurKyDFZURRXGm6",
      images: IMAGES.MpayBayGuest,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "View Point Bar and Restaurant",
      description: "התנדנדנו כיף",
      googleMapLink: "https://maps.app.goo.gl/5zZX8NAgfi3hbSuN7",
      id: "ViewPoint",
    images: IMAGES.ViewPoint,
    },
  ],
  kids: [
    {
      name: "התעוררה",
      description: "חמודה מאוד",
      id: "kama",
    images: IMAGES.kama,
    },
    {
      name: "ילד הסרטנים",
      description: "מנגו פיש",
      id: "crabBoy",
    images: IMAGES.crabBoy,
    },
    {
      name: "סע",
      description: "",
      id: "sa",
    images: IMAGES.sa,
    },
  ],
  nightlife: [],
  shells: [],
  gold_recommendation: [],
};

// {
//   name: "",
//   type: "Hotel",
//   dates: [{ from: createDate("00/00/2024"), to: createDate("00/00/2024") }],
//   description:"",
//   images: IMAGES.,
// }

// {
//   type: "",
//   name: "",
//   description: "",
//   googleMapLink: "",
//   images: IMAGES.,
// }
