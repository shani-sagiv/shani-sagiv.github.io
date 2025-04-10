import React from "react";
import { WordArtTitle, Card } from "components";
import { getTopPlaces } from "helpers/locations.helpers";
import { getNameToDisplay, parseDaysToHebrew } from "helpers/dateHelpers";
import { useNavigate } from "react-router-dom";

interface TopPlacesProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopPlaces: React.FC<TopPlacesProps> = ({}) => {
  const navigate = useNavigate();
  const renderCards = () => {
    const cards = getTopPlaces(6).map((single) => {
      const dest = single[1].data[0];
      return {
        title: getNameToDisplay(dest.displayName),
        displayName: dest.displayName,
        bottomData: parseDaysToHebrew(single[1].totalNights),
        image: dest.profileImg,
        navigate: "/" + dest.country.id + "/" + dest.id,
      };
    });

    return cards.map((card) => (
      <Card
        size="small"
        onClick={() => navigate(card.navigate)}
        displayName={card.displayName}
        bottomData={card.bottomData}
        image={card.image}
      />
    ));
  };

  return (
    <>
      <div className={"flex-center"} style={{ width: "100%" }}>
        <WordArtTitle title={"הכי הרבה"} />
      </div>
      <div className={"flex-row"} style={{ flexWrap: "wrap" }}>
        {renderCards()}
      </div>
    </>
  );
};
export default TopPlaces;
