import React from "react";
import "./Country.scss";
import { useNavigate } from "react-router-dom";
import { Cards, Collapsibles, Title } from "components";
import { Destination, DisplayName, Recommendation } from "models";
import {
  calculateTotalNightsAtAllDestinations,
  getNameToDisplay,
  parseDaysToHebrew,
} from "../../helpers/dateHelpers";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  displayName: DisplayName;
  description: string;
  destinations: Destination[];
  profileImg: string;
  goldRecommendation: Recommendation[];
}

const Country: React.FC<CountryProps> = ({
  description,
  destinations,
  profileImg,
  displayName,
  goldRecommendation,
}) => {
  const navigate = useNavigate();
  const items2 = goldRecommendation.map((r) => ({
    title: r.name,
    content: r.description,
    images: r.images,
    // content: (
    //   <>
    //     {r.description}
    //     {/*{!r.images ? null : (*/}
    //     {/*  <span>*/}
    //     {/*    <ImageGallery*/}
    //     {/*      showPlayButton={false}*/}
    //     {/*      showThumbnails={false}*/}
    //     {/*      items={r.images.map((i) => ({ original: i, thumbnail: i }))}*/}
    //     {/*    />*/}
    //     {/*  </span>*/}
    //     {/*)}*/}
    //   </>
    // ),
  }));
  const cards = destinations.map((dest) => ({
    title: getNameToDisplay(dest.displayName),
    displayName: dest.displayName,
    image: dest.profileImg,
    navigate: dest.id,
  }));
  const totalNightsSlept = calculateTotalNightsAtAllDestinations(destinations);

  return (
    <div className={"country"}>
      <img
        src={profileImg}
        style={{
          height: "35vh",
          width: "100%",
          borderBottomRightRadius: "80px",
        }}
      />

      <Title title={displayName.hebrew} />
      <Title
        title={displayName.english}
        style={{ fontSize: 25, marginTop: -10 }}
      />
      {description ? (
        <div style={{ margin: "5px 10px 10px 10px" }}>{description}</div>
      ) : null}
      <div style={{ marginRight: 10 }}>
        ({parseDaysToHebrew(totalNightsSlept)})
      </div>
      <Collapsibles items={items2} />
      <Cards items={cards} />
    </div>
  );
};
export default Country;
