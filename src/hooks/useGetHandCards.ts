import {useGetCardName} from "./useGetCardName";

export function useGetHandCards(index:  number[]) {

    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']

    const cardName = useGetCardName(index[0]);

    return [cardName , suits[index[1]]];
}
