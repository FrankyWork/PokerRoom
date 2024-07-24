import React from 'react';
import useHand from "./useHand";

// Игроки
const gamblers = ['BOBBY', 'ADDY', 'JACKY','JOY']
export const Hand = () => {

    const {gambler} = useHand(gamblers)

    return (
        <>
            PokerRoot<br/>
            {gamblers.map(player => (
                <p key={player}>
                    {player}: {gambler[player].join(', ')}
                </p>
            ))}
        </>
    );
};
