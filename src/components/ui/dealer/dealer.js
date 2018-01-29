import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import CardHolderBaseComponent from 'domain/card-holder';
import CardHandComponent from 'components/ui/card-hand/card-hand.js';
import dealerTemplate from './dealer.html';

class DealerComponent extends CardHolderBaseComponent.withTemplate(dealerTemplate) {

    listen() {
        super.listen();
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor('dealer'), event => this.update(event),
        );
        this.on(NameSpace.Game).listen(
            Events.Game.EndOfRound, event => this.flipCard(),
        );

        this.ui('[type=range]').listen(
            'change', event => this.changeRisk(event.target),
        );

        CardHandComponent.attachTo(
            this.view.querySelector('cards'),
            'dealer'
        );
    }

    update({ card, flow }) {
        this.addCard(card);
        this.on(flow || NameSpace.Game).trigger(
            new Events.Game.ScoreUpdated('dealer', this.score)
        );
    }

    flipCard() {
        const card = this.view.querySelector('cards .back');
        card && (card.className = card.className.replace(/(back-|back)/g,''));
    }

    changeRisk({ value }) {
        this.on(NameSpace.Game).trigger(
            new Events.Game.RiskUpdated(value)
        );
    }
}

export default DealerComponent;
