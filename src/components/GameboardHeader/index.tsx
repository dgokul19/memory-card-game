import React, { Fragment } from "react";

// CSS
import classes from "../../styles/game.module.scss";

const GameBoardHeader = (): React.ReactNode => {
    return(
    <Fragment>
        <div className={classes.headerElementContainer}>
            <ul>
                <li className={classes.activeGameMode}>Single Player</li>
                <li>Double Player</li>
            </ul>

            <button className={classes.playButton}>Play Game <i className="fa fa-play-circle"></i></button>
        </div>
    </Fragment>
    )
};

export default GameBoardHeader;