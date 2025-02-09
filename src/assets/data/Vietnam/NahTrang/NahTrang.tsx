import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const NAH_TRANG: Destination = {
  id: "NAH_TRANG",
  displayName: {
    hebrew: "נה טראנג",
    english: "nah trang",
  },
  images: IMAGES.general,
  description: "וואו איזה יעד הכל כיף הכל זול אחד המומלצים",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Maris Hotel",
      googleMapLink: "https://maps.app.goo.gl/2Aar11nizgVfbQnx8",
      dates: [{ from: createDate("11/12/2024"), to: createDate("24/12/2024") }],
      description: "וואו מלון מפנק כיף חיים אחלה מיקון",
      price: "75 שקל ללילה כולל ארוחת בוקר",
      images: IMAGES.Maris,
    },
  ],
  foods: [
    {
      name: "Hanami japanese restaurant",
      description: "סושי טעים רצח",
      googleMapLink: "https://maps.app.goo.gl/TWQs8TGKfq4zeo6P8",
      images: IMAGES.Hanami,
    },
  ],
  attractions: [
    {
      name: "Museum of Oceanography",
      description: "מוזיאון ימי ממש כיף",
      googleMapLink: "https://maps.app.goo.gl/HGuCZEg2wPTtumtX7",
      images: IMAGES.Oceanography,
    },
    {
      name: "Vinpearl Nha Trang",
      description: "עוד אחד של וין המטורף יש הכל דיסני",
      googleMapLink: "https://maps.app.goo.gl/rYZJUotkM8DVgokcA",
      images: IMAGES.Vinpearl,
    },
    {
      name: "ארקייד",
      description: "וואו וואו איזה כיף 15 שקל 40 מטבעות",
      googleMapLink: "https://maps.app.goo.gl/j3GE7bY8zA4SyhLx9",
      images: IMAGES.arcade,
    },
  ],
  nightlife: [],
  shells: [],
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
