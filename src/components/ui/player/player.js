import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import CardHolderBaseComponent from 'domain/card-holder';
import CardHandComponent from 'components/ui/card-hand/card-hand.js';
import playerTemplate from './player.html';
import styles from './player.scss';


class PlayerComponent extends CardHolderBaseComponent.withTemplate(playerTemplate) {

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor('player'), event => this.update(event.card)
        );

        this.ui('.hit').listen(
            'click', event => this.hit()
        );
        this.ui('.stick').listen(
            'click', event => this.stick()
        );

        CardHandComponent.attachTo(
            this.view.querySelector('cards'), 'player'
        );
    }

    update(card) {
        this.addCard(card);
        this.view.querySelector('.score').innerHTML = this.score;
        this.on(NameSpace.Game).trigger(
            new Events.Game.ScoreUpdated('player', this.score)
        );
    }

    hit() {
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('player')
        );
    }

    stick() {
        this.on(NameSpace.Game).trigger(
            new Events.Game.EndOfRound()
        );
    }
}

export default PlayerComponent;
