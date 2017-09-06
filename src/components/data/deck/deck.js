import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Card from 'domain/card';

const SUITS = ['diams', 'hearts', 'spades', 'clubs'];
var RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

class DeckComponent extends Fiber.DataComponent {

    init() {
        this.cardSet = [];
        this.fillCards();
    }

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.Request, event => this.serveCard(event.recipient)
        );
    }

    serveCard(recipient) {
        const CardServedEvent = Events.Card.ServedFor(recipient);
        this.on(NameSpace.Cards).trigger(
            new CardServedEvent(this.pullCard())
        );
    }

    fillCards() {
        for(let suit of SUITS) {
            for(let rank of RANKS) {
                this.cardSet.push(new Card({ suit, rank }));
            }
        }
    }

    pullCard() {
        if(!this.cardSet.length) {
            this.fillCards();
        }
        const pos = Math.floor(Math.random()*this.cardSet.length);
        const card = this.cardSet[pos];

        this.cardSet = this.cardSet.slice(0, pos).concat(this.cardSet.slice(pos+1));
        return card;
    }
}

export default DeckComponent;
