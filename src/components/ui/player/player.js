import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import CardHolderBaseComponent from 'domain/card-holder';
import CardHandComponent from 'components/ui/card-hand/card-hand';
import playerTemplate from './player.html';

class PlayerComponent extends CardHolderBaseComponent.withTemplate(playerTemplate) {

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor('player'), event => this.addCard(event.card)
        );

        CardHandComponent.attachTo(
            this.view.querySelector('cards'), 'player'
        );
    }
}

export default PlayerComponent;
