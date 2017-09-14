import Fiber from 'fiber';
import Events from 'events';

const CardSpace = Fiber.NameSpace.create('data/cards');

CardSpace.defineState({
    cards : (state) => [
        Fiber.NameSpace.Defined, event => (state.cards = {}),
        Events.Card.Cleanup, event => (state.cards = {}),
        Events.Card.Request, event => updateCards(event.recipient, state),
    ],
});

function updateCards(recipient, state) {
    state.cards[recipient] = 1 + (state.cards[recipient] || 0);
}

export default CardSpace;
