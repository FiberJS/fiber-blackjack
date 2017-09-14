import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import CardHolderBaseComponent from 'domain/card-holder';
import CardGeneratorComponent from 'components/ui/card/card';
import styles from './card-hand.scss';

class CardHandComponent extends Fiber.UIComponent {

    init(name) {
        this.name = name;
    }

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor(this.name), event => this.addCard(event.card),
            Events.Card.Cleanup, event => this.cleanup(),
        );
    }

    addCard(card) {
        this.view.appendChild(
            CardGeneratorComponent.renderCard(card)
        );
    }

    cleanup() {
        this.view.innerHTML = '';
    }
}

export default CardHandComponent;
