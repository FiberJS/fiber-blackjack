import Fiber from 'fiber';
import CardHandComponent from 'components/ui/card-hand/card-hand.js';
import dealerTemplate from './dealer.html';

class DealerComponent extends Fiber.UIComponent.withTemplate(dealerTemplate) {

    listen() {
        CardHandComponent.attachTo(
            this.view.querySelector('cards'),
            'dealer'
        );
    }
}

export default DealerComponent;
