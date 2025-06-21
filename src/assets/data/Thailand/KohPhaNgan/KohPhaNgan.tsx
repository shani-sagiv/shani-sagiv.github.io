import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";


export const KOH_PHA_NGAN: Destination = {
  id: "KOH_PHA_NGAN",
  profileImg: IMAGES.profile,
  displayName: {
    hebrew: "קו פנגן",
    english: "Koh Pha Ngan",
  },
  shells: [],
  images: IMAGES.general,
  description: "אחלה אי אחלה מסיבות להיזהר בעיקולים!",
  hotels: [
    {
      name: "Island Life Bungalows",
      dates: [{ from: createDate("30/04/2024"), to: createDate("07/05/2024") }],
      description:
        "דיי ממוצע המלון והאזור אחלה בריכה וקרוב לhalf moon שהיה ממוצע גם כן(כי זה היה באיזה ביץ קלאב ולא בגונגל ששם דווקא כיף)",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/wFpmvsshdNTRJXPf7",
      images: IMAGES.islandLife,
    },
    {
      name: "The Sea Resort",
      dates: [{ from: createDate("07/05/2024"), to: createDate("17/05/2024") }],
      description: "מצריך אופנוע אבל מקום ממש שווה",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/yBoVNcQYotoZzSqy8",
      images: IMAGES.seaResortImages,
    },
    {
      name: "Delight Resort",
      googleMapLink: "https://maps.app.goo.gl/My1VTPHeg2jXbgsi7",
      dates: [{ from: createDate("29/09/2024"), to: createDate("02/10/2024") }],
      description: "פצצה של מיקום מלון חמוד מינימלי זול",
    },
    {
      name: "Shiralea Backpackers Resort",
      googleMapLink: "https://maps.app.goo.gl/rBqm8domgegkkyK97",
      images: IMAGES.shiralea,
      dates: [{ from: createDate("15/10/2024"), to: createDate("17/10/2024") }],
      description:
        "קצת רחוק מהכל אבל מקום ממש חמוד אחלה אנשים אחלה מקומות ישיבה",
    },
    {
      name: "Pure Laguna Residence by Nice Sea Resort",
      googleMapLink: "https://maps.app.goo.gl/xDQ4UQudrqxDVeCW8",
      images: IMAGES.PureLaguna,
      dates: [{ from: createDate("09/11/2024"), to: createDate("12/11/2024") }],
      description:
        "אחלה מלון באזור הזן ביץ חדרים שווים עם מטבח קצת ריח של גופה וביוב לפעמים",
    },  {
      name: "Sea Escapes Resort",
      googleMapLink: "https://maps.app.goo.gl/q3regvvWhCVg2b7a9",
      // images: IMAGES.PureLaguna,
      dates: [{ from: createDate("15/06/2025"), to: createDate("21/06/2025") }],
      description:
        "באנו רק בשביל נופר",
    },
  ],
  foods: [
    {
      name: "Mama Homemade Restaurant",
      description: "מסעדה ממש נחמדה ליד הsea resort, מקומית תאילדית זולה",
      googleMapLink: "https://maps.app.goo.gl/p6UneWTsZG4MehoYA",
      images: IMAGES.mamaRestaurant,
    },
    {
      name: "Pantip Market שוק אוכל",
      description: "אזור עם כמה דוכני אוכל  ושטויות וברים",
      googleMapLink: "https://maps.app.goo.gl/fzSnN2UaiK2rrfhV6",
      images: IMAGES.pantip,
    },
    {
      name: "Mama Market שוק אוכל",
      description: "אזור עם כמה דוכני אוכל חמודים",
      googleMapLink: "https://maps.app.goo.gl/15HQMgFhoVhC8ynXA",
      images: IMAGES.Mama,
    },
  ],
  attractions: [
    {
      name: "Halfmoon festival",
      description:
        "ממש פחדנו שלא יהיו כרטיסים כי החלטנו להגיע ממש ברגע האחרון, בפועל ממש לא בעיה לקנות יום לפני בקבלה במלון.. היה כיף",
      googleMapLink: "https://maps.app.goo.gl/EUHfANZURF8T8S5B9",
      images: IMAGES.halfmoon,
    },
    {
      name: "Saturday Walking Street Market",
      description: "שוק לילה ממש נחמד שפתוח בסופש. יש גם אוכל וגם קניות",
      googleMapLink: "https://maps.app.goo.gl/swCqNZDrkTy6AJd46",
      images: IMAGES.walkingStreet,
    },
    {
      name: "Chaloklum Sunday market",
      description: " שוק עם אוכל ממש נחמד! אזור יפה להסתובב ואפשר גם להכנס לים",
      googleMapLink: "https://maps.app.goo.gl/yNymoUHjqMCMfmh16",
      images: IMAGES.chaloklumMarket,
    },

    {
      name: "מקום בדרך עם המון קופים",
      description:
        "לשים לב אם מגיעים עם אופנוע לא להשאיר כלום בתא ולקחת את המפתחות הם חכמים",
      googleMapLink: "https://maps.app.goo.gl/DQBcudn59LarPh7w7",
      images: IMAGES.monkeys,
    },
    {
      name: "Zen Beach",
      description:
        "חוף חמוד עם אחלה נוף לשקיעה, הרבה אנשים שבאים לעשות יוגה ערסלים ואנערף, יש באחד הצדדים חוף נודיסטים",
      googleMapLink: "https://maps.app.goo.gl/JKr5o76eoi3Q6EdA8",
      images: IMAGES.zen,
    },
    {
      name: "Bluerama",
      description:
        "בר על הר, נוף מהמם עלייה של אי אפשר להנות שם כי אתה עסוק בלחשוב איך תרד את זה" +
        "\n" +
        "משלמים בכניסה איזה 600 באט לראש אבל אפשר לקנות שם עם הכסף הזה",
      googleMapLink: "https://maps.app.goo.gl/ZDENA8MKoXWqXrAP7",
      images: IMAGES.bluerama,
    },
    {
      name: "קפה חתולים",
      description:
        "בית קפה עם מלא חתולים, ממש התלבטנו אם להכנס כי חשבנו שאולי החתולים סובלים. בסוף היינו שם שעה והעובדים התייחסו לכל החתולים ממש יפה, האכילו ושיחקו איתם והחתולים באמת נראים שמחים והיה כיף מאווווווווווווווווד!!!!",
      googleMapLink: "https://maps.app.goo.gl/8QGYfNaTWFEHJTeu6",
      images: IMAGES.catCafe,
    },
  ],
  nightlife: [
    {
      name: "Haad Rin beach bars",
      description:
        "יש על החוף כל ערב מלא ברים עם מופעי אש. באף אחד לא היה כתוב שיש האפי האוור אבל ברגע ששאלנו אז הם ענו שכן חחח קיצר תשאלו אם יש",
      googleMapLink: "https://maps.app.goo.gl/wzWoLNs6X7HBrCuG7",
      images: IMAGES.HaadRinBeachBars,
    },
  ],
  gold_recommendation: [
    {
      name: "אירועים",
      description: "יש מסיבות כל יום, פה ראינו שיש כמעט אם לא את כל המידע",
      links: ["https://phangan.events/"],
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