import React, { Fragment } from "react";

// Components
import GameBoardHeader from "./GameboardHeader";
import GameDetails from "./GameDetails";
import GameBoxContainer from "./GameBoxContainer";

import classes from "../styles/game.module.scss";


const Dashboard = () => {
    return (
        <Fragment>
            <div className={classes.wrapperContainer}>
                <div className={classes.gameContainer}>
                    <GameBoardHeader />
                    <GameBoxContainer />
                </div>
                <GameDetails />
            </div>
        </Fragment>
    )
};

export default Dashboard;