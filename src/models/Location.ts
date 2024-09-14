import { Recommendation } from "models";
import { DisplayName } from "models/GenericModels"; // Assuming Recommendation is defined in a separate file

interface Location {
  // Basic Info
  id: string;
  name: string;
  displayName: DisplayName;
  description: string; // Description of the location

  // Recommendations
  hotels: Recommendation[]; // Array of hotel recommendations
  foods: Recommendation[]; // Array of food/restaurant recommendations
  attractions: Recommendation[]; // Array of attraction recommendations
  nightlife: Recommendation[]; // Array of nightlife recommendations
}
