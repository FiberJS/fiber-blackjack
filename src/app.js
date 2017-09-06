import Fiber from 'fiber-framework';
import DeckComponent from 'components/data/deck/deck';
import DealerComponent from 'components/ui/dealer/dealer';
import PlayerComponent from 'components/ui/player/player';
import NameSpace from 'namespace';

require('./app.scss');

// Debugger
Fiber.Debugger.showEvents = true;
// Fiber.Debugger.showView = true;
Fiber.Debugger.init();

Fiber.app(() => {
    // data components
    DeckComponent.attachTo(NameSpace.Cards);

    // ui components
    DealerComponent.attachTo('dealer');
    PlayerComponent.attachTo('player');
});

window.Fiber = Fiber;

import Card from 'domain/card';
import Events from 'events';
window.deal = (recipient) => {
    // const card = new Card({ suit, rank });
    Fiber.namespace('cards').trigger(
        new Events.Card.Request(recipient)
    );
}
