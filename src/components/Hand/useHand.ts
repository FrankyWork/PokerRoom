
import {useGetRandomIndex} from "../../hooks/useGetRandomIndex";
import {useGetHandCards} from "../../hooks/useGetHandCards";

const useHand = () => {

    const randomIndexFirst = [useGetRandomIndex(14), useGetRandomIndex(3)]
    const randomIndexSecond = [useGetRandomIndex(14), useGetRandomIndex(3)]

    const firstCard = useGetHandCards(randomIndexFirst)
    const secondCard = useGetHandCards(randomIndexSecond)

    return {
        firstCard,
        secondCard
    }
};

export default useHand;