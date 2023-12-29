import React, { Fragment } from "react";

// Utils
import { useAppSelector } from "../../hooks";

import classes from "./index.module.scss";

const GameDetails = () => {
    const { player1, player2 } = useAppSelector(state => state.gameReducer);
    return (
        <Fragment>
            <div className={classes.gameDetailPanel}>
                <div className={classes.playerDetails}>
                    <h3>Player 1</h3>
                    <span>Number Of Moves : </span>
                    <h2>{`${player1?.numberOfMoves}`}</h2>
                    <span>Matched Pairs : </span>
                    <h2>{`${player1?.matchedPairs}`}</h2>
                </div>

                <div className={classes.playerDetails}>
                    <h3>Player 2</h3>
                    <span>Number Of Moves : </span>
                    <h2>{`${player2?.numberOfMoves}`}</h2>

                    <span>Matched Pairs : </span>
                    <h2>{`${player2?.matchedPairs}`}</h2>
                </div>
            </div>
        </Fragment>
    );
};

export default GameDetails;