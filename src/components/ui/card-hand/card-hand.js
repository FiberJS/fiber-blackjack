import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import CardHolderBaseComponent from 'domain/card-holder';
import CardGeneratorComponent from 'components/ui/card/card';

class CardHandComponent extends Fiber.UIComponent {

    init(name) {
        this.name = name;
    }

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.ServedFor(this.name), event => this.addCard(event.card)
        );

        this.view.className = 'playingCards';
    }

    addCard(card) {
        this.view.appendChild(
            CardGeneratorComponent.renderCard(card)
        );
    }
}

export default CardHandComponent;
