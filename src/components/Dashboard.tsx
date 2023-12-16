import React, { Fragment } from "react";

// Components
import CardDeck from "./CardDeck";
import GameBoardHeader from "./GameboardHeader";
import GameDetails from "./GameDetails";

import classes from "../styles/game.module.scss";


const Dashboard = () => {
    return (
        <Fragment>
            <div className={classes.wrapperContainer}>
                <div className={classes.gameContainer}>
                    <GameBoardHeader />
                    <div className={classes.cardBoxContainer}>
                        <CardDeck content={'1'}/>
                    </div>
                </div>
                <GameDetails />
            </div>
        </Fragment>
    )
};

export default Dashboard;