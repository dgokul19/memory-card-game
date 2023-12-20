import React, { Fragment } from "react";

// Utils
import { useAppSelector } from "../../hooks";

import classes from "./index.module.scss";

const GameDetails = () => {
    const { numberOfMoves } = useAppSelector(state => state.gameReducer);
    return (
        <Fragment>
            <div className={classes.gameDetailPanel}>
                <div className={classes.playerDetails}>
                    <h3>Player 1</h3>
                    <span>Number Of Moves : </span>
                    <h2>{`${numberOfMoves}`}</h2>
                </div>
            </div>
        </Fragment>
    );
};

export default GameDetails;