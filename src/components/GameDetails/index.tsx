import React, { Fragment } from "react";

// Utils
import { GENERAL_CONSTANTS, PLAYERS_ID, PLAYER_MODE } from "../../constants";
import { useAppSelector } from "../../hooks";

// CSS
import classes from "./index.module.scss";

type ActivePlayerPosition = {
    top? : string
    color? : string
}

const GameDetails = () => {
    const { activePlayer, playerMode, player1, player2 } = useAppSelector(state => state.gameReducer);

    const getActiveIndicatorPosition = (styleId:string, currentPlayer:string) => {
        if(styleId === GENERAL_CONSTANTS.INDICATOR){
            let style:ActivePlayerPosition = { top : '10px' };
            if(activePlayer === PLAYERS_ID.PLAYER_2){
                style.top = '48.5%';
            }
            return style;
        }

        if(styleId === GENERAL_CONSTANTS.ELEMENT){
            let style:ActivePlayerPosition = { color : '#183a1d' }
            if(activePlayer === currentPlayer){
                style.color = '#fefbe9';
            }
            return style;
        }
        
    };

    return (
        <Fragment>
            <div className={classes.gameDetailPanel} style={getActiveIndicatorPosition(GENERAL_CONSTANTS.ELEMENT, PLAYERS_ID.PLAYER_1)}>
                <div className={classes.playerDetails}>
                    <h3>Player 1</h3>
                    <span>Number Of Moves : </span>
                    <h2>{`${player1?.numberOfMoves}`}</h2>
                    <span>Matched Pairs : </span>
                    <h2>{`${player1?.matchedPairs}`}</h2>
                </div>

                <div className={classes.playerDetails}  style={getActiveIndicatorPosition(GENERAL_CONSTANTS.ELEMENT, PLAYERS_ID.PLAYER_2)}>
                    {(playerMode === PLAYER_MODE.DOUBLE_P) && (
                        <>
                            <h3>Player 2</h3>
                            <span>Number Of Moves : </span>
                            <h2>{`${player2?.numberOfMoves}`}</h2>

                            <span>Matched Pairs : </span>
                            <h2>{`${player2?.matchedPairs}`}</h2>
                        </>
                    )}
                </div>
                <span style={getActiveIndicatorPosition(GENERAL_CONSTANTS.INDICATOR, '')} className={classes.activePlayerIndicator}></span>
            </div>
        </Fragment>
    );
};

export default GameDetails;