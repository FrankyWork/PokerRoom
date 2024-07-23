import React from 'react';
import useHand from "./useHand";
import "./Hand.scss"

const Hand = () => {

    const { firstCard, secondCard} = useHand();

    return (
        <>
            <div className="card">
                <div className={"card__" + firstCard[1]}>
                    {firstCard[0]}
                </div>
                <div className={"card__" + secondCard[1]}>
                    {secondCard[0]}
                </div>
            </div>
        </>
    );
};

export default Hand;