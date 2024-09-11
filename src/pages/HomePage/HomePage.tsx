import React from "react";
import {Button} from "components";
import "./HomePage.scss";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {

    return (
        <div className={"home-page"}>
            <Button onClick={console.log}>Hello</Button>
            <Button onClick={console.log}>שני לוזרית?</Button>
            <Button onClick={console.log} variant={"secondary"}>שני לוזרית...</Button>
        </div>
    );
};
export default HomePage;

