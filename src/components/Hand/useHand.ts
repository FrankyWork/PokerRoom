// Возможные наминалы карт
function getCardName(cardNumber: number) {
    switch (cardNumber) {
        case 0: return "A";
        case 1: return "2";
        case 2: return "3";
        case 3: return "4";
        case 4: return "5";
        case 5: return "6";
        case 6: return "7";
        case 7: return "8";
        case 8: return "9";
        case 9: return "T";
        case 10: return "J";
        case 11: return "Q";
        case 12: return "K";
        case 13: return "A";
        default: return "Unknown card";
    }
}

// Возможные масти карт
function gerSuitName(suitNumber: number){
    switch (suitNumber){
        case 0: return "D";
        case 1: return "H";
        case 2: return "C";
        case 3: return "S";
        default: return "Unknown suit";
    }
}

const useHand = (gamblers: string[]) => {

    // Массив карт в раздаче
    const deck: string[] = []

    // Список игроков их карт в формате PLAYER: [CARD_1, CARD_2]
    const gambler: any = {}

    // Получение карты
    const getCard = () => {
        let cardIndex = Math.floor(Math.random() * 14)
        let suitIndex = Math.floor(Math.random() * 4)

        return getCardName(cardIndex) + gerSuitName(suitIndex);
    }

    // Проверка на уникальность карты
    const uniqueCard = (): string => {
        let card = getCard(); // 3H
        if (deck.includes(card)){
            return uniqueCard();
        } else {
            deck.push(card)
        }
        return card
    }

    // Добавление игроков уже с картами в gambler
    gamblers.forEach(player => {
        const cardFirst = uniqueCard()
        const cardSecond = uniqueCard()
        gambler[player] = [cardFirst, cardSecond];
    });

    return {
        gambler
    };
};

export default useHand;