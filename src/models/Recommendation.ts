export type RecommendationType =
  | "Hotel"
  | "Restaurant"
  | "Attraction"
  | "NightLife"
  | "Info";

export interface Recommendation {
  name: string;
  // type: RecommendationType;
  description: string;
  images?: string[];
  imagesPath?: string;
  price?: number | string;
  googleMapLink?: string;
}
export interface dates {
  from: Date;
  to: Date;
}
export interface HotelRecommendation extends Recommendation {
  dates: dates[];
}
export interface RestaurantRecommendation extends Recommendation {}
export interface AttractionRecommendation extends Recommendation {}
export interface KidsRecommendation extends Recommendation {}
export interface AttractionGroupRecommendation {
  name: string;
  description: string;
  attractions: AttractionRecommendation[];
}
export interface NightLifeRecommendation extends Recommendation {}
export interface InfoRecommendation extends Recommendation {
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
