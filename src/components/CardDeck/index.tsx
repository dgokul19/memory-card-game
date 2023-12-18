import React, { Fragment, useState, useMemo } from "react";

// Utility imports
import { CardDeckProps, CardStyleProps } from "../../common/interface";
import { CARDS_COLOR } from "../../constants";
// CSS 
import classes from "./index.module.scss";

const CardDeck = ({ content, updateCardAction } : CardDeckProps) => {

    const { backCard } = useMemo(() => {
        let cardBackStyle: CardStyleProps = {};

        if (content?.isMatched && content.isOpen) {
            cardBackStyle.backgroundColor = '#E0E0E0';
            cardBackStyle.color = '#1B5E20';
            cardBackStyle.opacity = '0.8';
        } else {
            switch (content?.color) {
                case "RED": cardBackStyle = { backgroundColor: CARDS_COLOR.RED.BG_COLOR, color: CARDS_COLOR.RED.COLOR };
                    break;
                case "BLUE": cardBackStyle = { backgroundColor: CARDS_COLOR.BLUE.BG_COLOR, color: CARDS_COLOR.BLUE.COLOR };
                    break;
                case "YELLOW": cardBackStyle = { backgroundColor: CARDS_COLOR.YELLOW.BG_COLOR, color: CARDS_COLOR.YELLOW.COLOR };
                    break;
                case "GREEN":
                default:
                    cardBackStyle = { backgroundColor: CARDS_COLOR.GREEN.BG_COLOR, color: CARDS_COLOR.GREEN.COLOR };
            }
        }
        return { backCard: cardBackStyle};
    }, [content.isMatched, content.isOpen])


    return (
        <Fragment>
            <div className={classes.CardContainer} onClick={() => updateCardAction(content)}>
                <div className={`${classes.flipCardInner} ${content.isOpen ? classes.flippedCardCover : ''}`}>
                    <div className={classes.flipCardFront}></div>
                    <div className={classes.flipCardBack} style={backCard}>
                        <h1>{content?.value}</h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardDeck;