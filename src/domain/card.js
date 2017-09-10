
class Card {
    constructor(card) {
        this.reversed = !!card.reversed;
        this.suit = card.suit;
        this.rank = card.rank;
        this.symbol = symbols[card.suit];
    }

    clone() {
        return new Card(this);
    }

    flip() {
        this.reversed = !this.reversed;
        return this;
    }
}

Card.Reversed = 'reversed';

export default Card;

const symbols = {
    diams  : '♦',
    hearts : '♥',
    spades : '♠',
    clubs  : '♣'
};
