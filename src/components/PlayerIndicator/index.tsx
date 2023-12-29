import React, { Fragment } from "react";

// Utils
import { useAppSelector } from '../../hooks';
import { PLAYERS_ID } from "../../constants";

// CSS
import classes from "../../styles/game.module.scss";

const PlayerIndicator = () => {

    const { activePlayer } = useAppSelector(state => state.gameReducer);

    const getActivePlayerClass = (playState:string) => {
        return playState === activePlayer ? classes.activePlayer : null
    };
    
    return (
        <Fragment>
            <div className={classes.playerIndicator}>
                <ul>
                    <li className={getActivePlayerClass(PLAYERS_ID.PLAYER_1)}>Player 1</li>
                    <li className={getActivePlayerClass(PLAYERS_ID.PLAYER_2)}>Player 2</li>
                </ul>
            </div>
        </Fragment>
    );
};

export default PlayerIndicator;