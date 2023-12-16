import React, { Fragment } from "react";

import { CardDeckProps } from "../../types";

// CSS 
import classes from "./index.module.scss";

const CardDeck = ({ content } : CardDeckProps) => {
    const [ flipped, setFlipped ] = React.useState<boolean>(false);

    const handleCardToggle = (event: React.MouseEvent<HTMLElement>) => {
        setFlipped(!flipped);
    };

    return (
        <Fragment>
            <div className={classes.CardContainer} onClick={handleCardToggle}>
                <div className={`${classes.flipCardInner} ${flipped ? classes.flippedCardCover : ''}`}>
                    <div className={classes.flipCardFront}></div>
                    <div className={classes.flipCardBack}>
                        <h1>{content}</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardDeck;