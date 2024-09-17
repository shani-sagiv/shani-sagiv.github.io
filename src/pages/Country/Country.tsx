import React from "react";
import "./Country.scss";
import { useNavigate } from "react-router-dom";
import { Cards, Collapsibles, Title } from "components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Destination, Recommendation } from "models";
import { COUNTRIES } from "../../Routes";
import { getNameToDisplay } from "../../helpers/dateHelpers";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  description?: string;
  destinations: Destination[];
  goldRecommendation: Recommendation[];
}

const Country: React.FC<CountryProps> = ({
  name = "Country test",
  description,
  destinations,
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
    image: dest.profileImg,
    navigate: dest.id,
  }));
  return (
    <div className={"country"}>
      <Title title={name} />
      {description ? (
        <div style={{ margin: "10px 50px" }}>{description}</div>
      ) : null}
      <Collapsibles items={items2} />
      <Cards items={cards} />
    </div>
  );
};
export default Country;
