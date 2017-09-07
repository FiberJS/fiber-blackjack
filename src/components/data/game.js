import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Card from 'domain/card';

class GameComponent extends Fiber.DataComponent {

    listen() {
        this.on(Fiber.System).listen(
            Fiber.System.Ready, event => this.initGame(),
        );
        this.on(NameSpace.Game).listen(
            Events.Game.Reset, event => this.initGame(),
        );
    }

    initGame() {
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('dealer', Card.Reversed)
        );
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('dealer')
        );

        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('player')
        );
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('player')
        );
    }
}

export default GameComponent;
