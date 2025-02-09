import {
  AttractionGroupRecommendation,
  AttractionRecommendation,
  HotelRecommendation,
  InfoRecommendation,
  KidsRecommendation,
  NightLifeRecommendation,
  RestaurantRecommendation,
} from "models";
import { DisplayName } from "models/GenericModels"; // Assuming Recommendation is defined in a separate file

export interface Destination {
  // Basic Info
  id: string;
  displayName: DisplayName;
  description: string; // Description of the location
  shells?: string[];
  transportation?: string;
  profileImg: string;

  // Recommendations
  hotels: HotelRecommendation[]; // Array of hotel recommendations
  foods: RestaurantRecommendation[]; // Array of food/restaurant recommendations
  attractions: AttractionRecommendation[]; // Array of attraction recommendations
  kids?: KidsRecommendation[]; // Array of attraction recommendations
  attractionsGroups?: AttractionGroupRecommendation[]; // Array of attraction recommendations
  nightlife: NightLifeRecommendation[]; // Array of nightlife recommendations
  gold_recommendation?: InfoRecommendation[];
  images?: string[];
  moreInfo?: Info[];
}

export interface Info {
  name: string;
  description: string;
  images?: string[];
}
