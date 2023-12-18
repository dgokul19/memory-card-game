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
    const [openedCards, setOpenedCards] = useState<CardDeckInterface[]>([]);

    const initializeGame = useCallback(() => {
        let totalCards:CardDeckInterface[] = [];

        defaultCardsCount?.map((colorPattern : string) => {
            CARD_NUMBERS?.forEach(numbers => {
                totalCards.push({ value : numbers, color : colorPattern, isOpen : false, isMatched : false });
            });
        });
        totalCards.sort(() => Math.random() - 0.5);

        setCardsList(totalCards);
    },[defaultCardsCount]);

    const resetAllCardsList = () => {

        let allCards = [...cardsList];
        let tempCards = [...openedCards];

        allCards = [...allCards].map(li => {
            if(!li.isMatched){
                li.isOpen = false;
            }
            return li;
        });
        tempCards = [];

        setCardsList(allCards);
        setOpenedCards(tempCards);
    };

    const updateTogglingCards = (data: CardDeckInterface) => {
        let tempCards = [...openedCards];
        let allCards = [...cardsList];

        if(tempCards.length < 2){
            tempCards.push(data);
            allCards = [...allCards].map(li => {
                if(li.value === data.value && li.color === data?.color){
                    li.isOpen = true;
                }
                return li;
            });

            setCardsList(allCards);
            setOpenedCards(tempCards);
        } 
        
        if(tempCards.length === 2){
            if(tempCards[0].value === tempCards[1].value){
                allCards = [...allCards].map(li => {
                    if(li.value === tempCards[0].value){
                        li.isOpen = true;
                        li.isMatched = true;
                    }
                    return li;
                });
                setCardsList(allCards);
                setOpenedCards([]);
            } else {
                setTimeout(() => resetAllCardsList(), 1000);
            }
        } 
        
    };

    useEffect(() => {
        if(GAME_STATUS.ACTIVE === gameStatus){
            initializeGame();
        }
    },[gameStatus])

    const renderCardsLis = () => {
        if(gameStatus === GAME_STATUS.ACTIVE && cardsList?.length){
            return cardsList?.map((cards, index) => <CardDeck key={index} content={cards} updateCardAction={updateTogglingCards}/>)
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