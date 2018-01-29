import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Flows from 'flows';
import CardHolderBaseComponent from 'domain/card-holder';
import CardHandComponent from 'components/ui/card-hand/card-hand.js';
import playerTemplate from './player.html';
import styles from './player.scss';


class PlayerComponent extends CardHolderBaseComponent.withTemplate(playerTemplate) {

    listen() {
        super.listen();
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor('player'), event => this.update(event)
        );
        this.on(NameSpace.Game).listen(
            Events.Game.Reset, event => this.enableControls(),
            Events.Game.Over, event => this.disableControls(),
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

    update({card, flow}) {
        this.addCard(card);
        this.view.querySelector('.score').innerHTML = this.score;
        this.on(flow || NameSpace.Game).trigger(
            new Events.Game.ScoreUpdated('player', this.score)
        );
    }

    hit() {
        this.on(Flows.CardFor('player')).trigger(
            new Events.Card.Request('player')
        );
    }

    stick() {
        this.disableControls();
        this.on(NameSpace.Game).trigger(
            new Events.Game.EndOfRound()
        );
    }

    enableControls() {
        this.view.querySelectorAll('button').forEach( btn => { btn.disabled = false; } );
    }

    disableControls() {
        this.view.querySelectorAll('button').forEach( btn => { btn.disabled = true; } );
    }
}

export default PlayerComponent;
