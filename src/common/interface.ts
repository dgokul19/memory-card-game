export interface CardDeckInterface {
    value : String,
    color : String,
    isOpen : Boolean,
    isMatched : Boolean
}

// Type Declarations

export type CardDeckProps = {
    content : CardDeckInterface,
    updateCardAction : Function
};

export type CardStyleProps = {
    backgroundColor? : string,
    color? : string,
    opacity? : string
};

export type PlayerAttribute = {
    name : string,
    numberOfMoves : number,
    matchedPairs? : number,
    timeTaken? : string
};


export interface DispatchPayload {
    activePlayer : string,
    player1 : PlayerAttribute,
    player2 : PlayerAttribute
}