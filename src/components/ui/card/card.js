import Fiber from 'fiber';
import cardHTML from './card.html';
import cardPatch from './card.patch';
import PatchIt from 'PatchIt';

const cardTemplate = PatchIt.template(cardHTML, cardPatch);

class CardGeneratorComponent extends Fiber.UIComponent.withTemplate(cardTemplate) {
    static renderCard(card) {
        return cardTemplate.render(card);
    }
}

export default CardGeneratorComponent;
