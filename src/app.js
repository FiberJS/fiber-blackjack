import Fiber from 'fiber-framework';
import DeckComponent from 'components/data/deck';
import GameComponent from 'components/data/game';
import DealerComponent from 'components/ui/dealer/dealer.js';
import PlayerComponent from 'components/ui/player/player.js';
import NameSpace from 'namespace';

require('./app.scss');

// Debugger
Fiber.Debugger.showEvents = true;
// Fiber.Debugger.showView = true;
Fiber.Debugger.init();

Fiber.app(() => {
    // data components
    DeckComponent.attachTo(NameSpace.Cards);
    GameComponent.attachTo(NameSpace.Game);

    // ui components
    DealerComponent.attachTo('dealer');
    PlayerComponent.attachTo('player');
});

window.Fiber = Fiber;

import Card from 'domain/card';
import Events from 'events';
window.deal = (recipient, reversed) => {
    // const card = new Card({ suit, rank });
    Fiber.namespace('data/cards').trigger(
        new Events.Card.Request(recipient, reversed)
    );
}
