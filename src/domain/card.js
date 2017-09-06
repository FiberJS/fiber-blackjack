
class Card {
    constructor(card) {
        this.suit = card.suit;
        this.rank = card.rank;
        this.symbol = symbols[card.suit];
        this.value = isFinite(this.rank)
            ? parseInt(this.rank)
            : 10
            ;
    }

    clone() {
        return new Card(this);
    }
}

export default Card;

const symbols = {
    diams  : '♦',
    hearts : '♥',
    spades : '♠',
    clubs  : '♣'
};
