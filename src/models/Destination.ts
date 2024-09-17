import { Recommendation } from "models";
import { DisplayName } from "models/GenericModels"; // Assuming Recommendation is defined in a separate file

export interface Destination {
  // Basic Info
  id: string;
  name: string;
  displayName: DisplayName;
  description: string; // Description of the location
  dates: { from: Date; to: Date }[];
  shells?: string[];
  transportation?: string;
  profileImg?: string;

  // Recommendations
  hotels: Recommendation[]; // Array of hotel recommendations
  foods: Recommendation[]; // Array of food/restaurant recommendations
  attractions: Recommendation[]; // Array of attraction recommendations
  nightlife: Recommendation[]; // Array of nightlife recommendations
}
