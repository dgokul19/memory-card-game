import React, { Fragment, useCallback, useEffect, useState } from "react";

// Components
import CardDeck from "../CardDeck";
import WinComponent from "../WinComponent";
import PlayerIndicatorTab from "../PlayerIndicator";

// Utility Imports
import { useAppSelector, useAppDispatch } from '../../hooks';
import { CARD_NUMBERS, GAME_STATUS, PLAYER_MODE } from "../../constants";
import { checkIsGameWin, updatedPlayerAttributes } from "../../common/helper";

import { updateGameStatus } from "../../reducer/gameReducer";

// Interface 
import { CardDeckInterface } from "../../common/interface";
// CSS
import classes from "../../styles/game.module.scss";

const GameBoxContainer = () => {
    const dispatch = useAppDispatch();
    // State selectors
    const { activePlayer,
            playerMode, 
            player1, player2, 
            gameStatus, 
            defaultCardsCount 
        } = useAppSelector(state => state.gameReducer);

    const [cardsList, setCardsList] = useState<CardDeckInterface[] | []>([]);
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
        if(gameStatus === GAME_STATUS.IDLE){
            dispatch(updateGameStatus(GAME_STATUS.ACTIVE))   
        }

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
                checkIsGameWin(allCards, dispatch);
                updatedPlayerAttributes(activePlayer, playerMode, player1, player2, true, dispatch);
            } else {
                setTimeout(() => {
                    updatedPlayerAttributes(activePlayer, playerMode, player1, player2, false, dispatch);
                    resetAllCardsList()
                }, 1000);
            }
        } 
        
    };

    useEffect(() => {
        if(gameStatus === GAME_STATUS.IDLE){
            initializeGame();
        }
    },[gameStatus])

    const renderCardsLis = () => {
        return cardsList?.map((cards, index) => <CardDeck key={index} content={cards} updateCardAction={updateTogglingCards}/>)
    };

    return (
        <Fragment>
            <div className={classes.cardBoxContainer}>
                {renderCardsLis()}
                {(gameStatus === GAME_STATUS.WIN) && <WinComponent />}
            </div>
        </Fragment>
    );
};

export default GameBoxContainer;