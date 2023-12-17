import React, { Fragment, useMemo } from "react";

// Utility imports
import { CardDeckProps } from "../../common/interface";
import { CARDS_COLOR } from "../../constants";
// CSS 
import classes from "./index.module.scss";

const CardDeck = ({ content } : CardDeckProps) => {
    const [ flipped, setFlipped ] = React.useState<boolean>(false);

    const handleCardToggle = (event: React.MouseEvent<HTMLElement>) => {
        setFlipped(!flipped);
    };

    const cardStyle = useMemo(() => {
        switch(content?.color){
            case "RED": return { backgroundColor : CARDS_COLOR.RED.BG_COLOR, color : CARDS_COLOR.RED.COLOR };
            break;
            case "BLUE": return { backgroundColor : CARDS_COLOR.BLUE.BG_COLOR, color : CARDS_COLOR.BLUE.COLOR };
            break;
            case "YELLOW": return { backgroundColor : CARDS_COLOR.YELLOW.BG_COLOR, color : CARDS_COLOR.YELLOW.COLOR };
            break;
            case "GREEN": 
            default:
            return { backgroundColor : CARDS_COLOR.GREEN.BG_COLOR, color : CARDS_COLOR.GREEN.COLOR };
            
        }
    },[content])

    return (
        <Fragment>
            <div className={classes.CardContainer} onClick={handleCardToggle}>
                <div className={`${classes.flipCardInner} ${flipped ? classes.flippedCardCover : ''}`}>
                    <div className={classes.flipCardFront}></div>
                    <div className={classes.flipCardBack} style={cardStyle}>
                        <h1>{content?.value}</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardDeck;