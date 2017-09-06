import Fiber from 'fiber';

class CardHolderBaseComponent extends Fiber.UIComponent {

    init() {
        this.cards = [];
        this.score = 0;
    }

    addCard(card) {
        this.cards.push(card);
        this.updateScore();
        // console.log(card);
    }

    updateScore() {
        let score = 0;
        this.cards.forEach(card => {
            score += card.value;
        });
    }
}

export default CardHolderBaseComponent;
