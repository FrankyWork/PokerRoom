import {useGetCardName} from "./useGetCardName";
import {useGetRandomCardIndex} from "./useGetRandomCardIndex";

export function useGetHandCards() {
    const card1 = useGetRandomCardIndex();
    const card2 = useGetRandomCardIndex();
    const cardName1 = useGetCardName(card1);
    const cardName2 = useGetCardName(card2);

    return [cardName1, cardName2];
}