export function useGetCardName(cardNumber: number) {
    switch (cardNumber) {
        case 0: return "ACE";
        case 1: return "TWO";
        case 2: return "THREE";
        case 3: return "FOUR";
        case 4: return "FIVE";
        case 5: return "SIX";
        case 6: return "SEVEN";
        case 7: return "EIGHT";
        case 8: return "NINE";
        case 9: return "TEN";
        case 10: return "JACK";
        case 11: return "QUEEN";
        case 12: return "KING";
        case 13: return "ACE";
        default: return "Unknown card";
    }
}