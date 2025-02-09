import { DisplayName, InfoRecommendation } from "models";

export interface Country {
  id: string;
  name: string;
  displayName: DisplayName;
  description: string;
  gold_recommendation: InfoRecommendation[];
  profileImg: string;
  inProgress?: boolean;
}
