import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import CardGeneratorComponent from 'components/ui/card/card';
import styles from './card-hand.scss';

class CardHolderComponent extends Fiber.UIComponent {

    init(name) {
        this.name = name;
    }

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor(this.name), event => this.addCard(event.card),
            Events.Card.Cleanup, event => this.cleanup(),
        );

        this.view.querySelector('.card-holder-name').innerHTML = this.name;
        this.cardList = this.view.querySelector('cards');
    }

    addCard(card) {
        this.cardList.appendChild(
            CardGeneratorComponent.renderCard(card)
        );
    }

    cleanup() {
        this.cardList.innerHTML = '';
    }

}

export default CardHolderComponent;
