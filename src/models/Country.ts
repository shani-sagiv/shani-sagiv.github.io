import { DisplayName, Recommendation } from "models";

export interface Country {
  id: string;
  name: string;
  displayName: DisplayName;
  description: string;
  gold_recommendation: Recommendation[];
  profileImg: string;
}
