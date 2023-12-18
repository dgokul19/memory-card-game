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
}

export type CardStyleProps = {
    backgroundColor? : string,
    color? : string,
    opacity? : string
}