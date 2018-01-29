import Fiber from 'fiber';
import Events from 'events';

const CardSpace = Fiber.NameSpace.create('data/cards');

CardSpace.defineState({
    cards : (state) => [
        Fiber.NameSpace.Defined, event => (state.cards = {}),
        Events.Card.Cleanup, event => (state.cards = {}),
        Events.Card.ServedFor('player'), ({card}) => updateCards('player', card, state),
        Events.Card.ServedFor('dealer'), ({card}) => updateCards('dealer', card, state),
    ],
});

function updateCards(recipient, card, state) {
    (state.cards[recipient] || (state.cards[recipient] = [])).push(card);
}

export default CardSpace;
