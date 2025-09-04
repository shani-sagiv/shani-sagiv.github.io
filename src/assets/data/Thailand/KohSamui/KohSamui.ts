import { Destination } from "models/Destination";
import { createDate } from "helpers/dateHelpers";
import IMAGES from "./images";

export const KohSamui: Destination = {
  id: "KohSamui",
  profileImg: IMAGES.profileImg,
  displayName: {
    hebrew: "קו סמוי",
    english: "Koh Samui",
  },
  images: IMAGES.general,
  description: "אחלה של אחלב של אי יש בו הכל לא מבין למה האחרים יותר בדיבור",
  hotels: [
    {
      name: "Bhundhari Chaweng Beach Resort",
      googleMapLink: "https://maps.app.goo.gl/wzBtKCQj6VKYQukE9",
      images: IMAGES.Bhundhari,
      dates: [{ from: createDate("27/09/2024"), to: createDate("29/09/2024") }],
      description: "מלון חמוד על הים קצת רחוק מהכל יותר מדי רעש של ישראלים",
    },
    {
      name: "Surisa Seaview Pool Villa",
      googleMapLink: "https://maps.app.goo.gl/pDP2JWJvjpFq3x1J7",
      images: IMAGES.Surisa,
      dates: [{ from: createDate("02/10/2024"), to: createDate("06/10/2024") }],
      description: "מלון סבבה אחלה של מיקום אחלה של בריכה ואוכל",
    },
    {
      name: "Nautilus Apartments",
      googleMapLink: "https://maps.app.goo.gl/v8hbSuQGC5E8ffJy9",
      images: IMAGES.Nautilus,
      dates: [{ from: createDate("17/10/2024"), to: createDate("03/11/2024") }],
      description:
        "אחלה של מקום קצת רחוק במידה שווה מהכל אז צריך אופנוע אבל דירה שווה רצח",
      price: "150 ללילה דרך איירבנב 130 במקום",
    },
    {
      name: "PTK Beach",
      googleMapLink: "https://maps.app.goo.gl/ZwTdShkmZL8SYrUh8",
      images: IMAGES.ptk,
      dates: [
        { from: createDate("03/11/2024"), to: createDate("09/11/2024") },
        { from: createDate("09/06/2025"), to: createDate("15/06/2025") },
        { from: createDate("21/06/2025"), to: createDate("04/07/2025") },
        { from: createDate("07/07/2025"), to: createDate("12/07/2025") }
      ],
      description:
        "מיקום פצצה ויחסית לזה שכל המלונות באזור עולים פי 3 ממש נדיר",
      price: "700 באט ללילה",
    },
    {
      name: "ZAYN Samui Hotel",
      googleMapLink: "https://maps.app.goo.gl/uGxymu9v64w9RqKg8",
      // images: IMAGES.ptk,
      dates: [{ from: createDate("26/11/2024"), to: createDate("27/11/2024") }],
      description: "מיקום חמוד על השוק דייגים",
    },{
      name: "LOVE Beach Club Koh Samui",
      googleMapLink: "https://maps.app.goo.gl/xLmy1iRsy2RxKjR17",
      images: IMAGES.love,
      dates: [
              { from: createDate("04/07/2025"), to: createDate("07/07/2025") }
],
      description: "אחלה מלון שווה אחלה בריכה",
    },
  ],
  foods: [
    {
      name: "Ever Green מסעדה על החוף",
      googleMapLink: "https://maps.app.goo.gl/df4Y433ngxiPuUB5A",
      description: "אחלה של ארוחת בוקר סט ובכללי אחלה מקום לשבת חמודים",
      images: IMAGES.EverGreen,
    },    {
      name: "Shabushi by Oishi",
      googleMapLink: "https://maps.app.goo.gl/oqyn7NNiLRRFS51g6",
      description: "שאבושי אוצאצי תמיד כיף הוטפוט אכול כפי יכולתך",
      images: IMAGES.shabushi,
    },
    {
      name: "Basilicom/בזיליקום",
      googleMapLink: "https://maps.app.goo.gl/3JeYucFBjN9azKfh7",
      description: "וואלה היה טעים",
      images: IMAGES.Basilicom,
    },
        {
      name: "Napa Food",
      googleMapLink: "https://maps.app.goo.gl/qasQwsYdyWDP87S56",
      description: "מקומי היה ממש טעים",
      images: IMAGES.napa,
    },
    {
      name: "בורקס רמלה קוסמוי-מסעדה כשרה",
      googleMapLink: "https://maps.app.goo.gl/uQsLEkyA4mEboEPv6",
      description: "אחלה של אוכל ישרלאי טעים רצח",
      images: IMAGES.ramle,
    },    {
      name: "vibes 360",
      googleMapLink: "https://maps.app.goo.gl/Lr91gpznPcTggJos7",
      description: "מסעדה בורמזית עם אחלה קריוקי",
      images: IMAGES.vibes,
    },
  ],
  attractions: [
    {
      name: "Grandfather and Grandmother Rocks (Hin Ta Hin Yai) סלע הבולבול פות ",
      description:
        "סלעים שאם ממש מנסים אפשר לראות בולבול ופות אפשר עוד יותר לנסות לוותר על זה",
      images: IMAGES.bulbul,
      googleMapLink: "https://maps.app.goo.gl/XVVjaNzQ3mM4k8TdA",
    },
    {
      name: "Big Buddha Temple (Wat Phra Yai)",
      description:
        "בודה גדול נחמד",
      images: IMAGES.buddha,
      googleMapLink: "https://maps.app.goo.gl/WyPpsT6zm18uVeBH6",
    },    {
      name: "Coral Cove Beach",
      description:
        "חוף חמוד עם דגים חמודים ברדודים",
      images: IMAGES.coral,
      googleMapLink: "https://maps.app.goo.gl/5Lo5G9Vc2XcKmDFG6",
    },    {
      name: "Capybara World Koh Samui",
      description:
        "אחלה מקום מתנהגים יפה לחיות",
      images: IMAGES.Capybara,
      googleMapLink: "https://maps.app.goo.gl/x9a6Sfw5E4iV8CaY9",
    },
  ],
  nightlife: [],
  gold_recommendation: [
    {
      name: "כביסה",
      description: "איזה טוב היא מריחה אינעל דינק",
      phones: ["+66 85 795 7771", "+66 95 661 6568"],
      links: ["https://g.co/kgs/Tvd53dR"],
    },
    {
      name: "אופנוע",
      description: "190 באט ל125 באים אליך",
      phones: ["+66 87 276 5927"],
      images: IMAGES.motorcycle,
      links: ["https://maps.app.goo.gl/5FQFrgc4dZUVsWx18"],
    },
    {
      name: "מושון",
      description: "מושון האגוז",
      images: IMAGES.Mushon,
    },
  ],
};
