export type RecommendationType = "Hotel" | "Restaurant" | "Attraction";

export interface Recommendation {
  name: string;
  type: RecommendationType;
  description: string;
  images?: string[];
  price?: number | string;
}
