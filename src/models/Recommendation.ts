export type RecommendationType =
  | "Hotel"
  | "Restaurant"
  | "Attraction"
  | "NightLife"
  | "Info";

export interface Recommendation {
  name: string;
  type: RecommendationType;
  description: string;
  images?: string[];
  imagesPath?: string;
  price?: number | string;
  googleMapLink?: string;
}

export interface HotelRecommendation extends Recommendation {
  dates: { from: Date; to: Date }[];
  type: "Hotel";
}
export interface RestaurantRecommendation extends Recommendation {
  type: "Restaurant";
}
export interface AttractionRecommendation extends Recommendation {
  type: "Attraction";
}
export interface AttractionGroupRecommendation {
  type: "AttractionGroup";
  name: string;
  description: string;
  attractions: AttractionRecommendation[];
}
export interface NightLifeRecommendation extends Recommendation {
  type: "NightLife";
}
export interface InfoRecommendation extends Recommendation {
  type: "Info";
  links?: string[];
  phones?: string[];
}

export type AllRecommendationTypes =
  | HotelRecommendation
  | RestaurantRecommendation
  | AttractionRecommendation
  | NightLifeRecommendation
  | InfoRecommendation;
// | AttractionGroupRecommendation;
