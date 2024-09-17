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
  price?: number | string;
  coordinates?: string;
  googleMapLink?: string;
}
