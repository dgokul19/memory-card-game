import React, { Fragment, useCallback, useEffect, useState } from "react";

// Components
import CardDeck from "../CardDeck";

// Utility Imports
import { useAppSelector } from '../../hooks';
import { GAME_STATUS, CARD_NUMBERS } from "../../constants";

// Interface 
import { CardDeckInterface } from "../../common/interface";
// CSS
import classes from "../../styles/game.module.scss";

const GameBoxContainer = () => {
    // State selectors
    const { gameStatus, defaultCardsCount } = useAppSelector(state => state.gameReducer);

    const [ cardsList, setCardsList ] = useState<CardDeckInterface[] | []>([]);

    const initializeGame = useCallback(() => {
        let totalCards:CardDeckInterface[] = [];

        defaultCardsCount?.map((colorPattern : string) => {
            CARD_NUMBERS?.forEach(numbers => {
                totalCards.push({ value : numbers, color : colorPattern});
            });
        });
        totalCards.sort(() => Math.random() - 0.5);

        setCardsList(totalCards);
    },[defaultCardsCount]);

    useEffect(() => {
        if(GAME_STATUS.ACTIVE === gameStatus){
            initializeGame();
        }
    },[gameStatus])

    console.log({cardsList});

    const renderCardsLis = () => {
        if(gameStatus === GAME_STATUS.ACTIVE && cardsList?.length){
            return cardsList?.map((cards, index) => <CardDeck key={index} content={cards} />)
        }
    };

    return (
        <Fragment>
            <div className={classes.cardBoxContainer}>
                {renderCardsLis()}
            </div>
        </Fragment>
    );
};

export default GameBoxContainer;