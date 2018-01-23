import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';

class SpeechComponent extends Fiber.DataComponent {
    constructor() {
        super();

        this.synth = window.speechSynthesis;
        this.cards = {};
        this.reversed = null;
        this.roundsCompleted = 0;
        this.gameOver = false;
    }

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.Cleanup, event => this.clearCards(),

            Events.Card.ServedFor('player'), event => this.addCard('player', event.card),

            Events.Card.ServedFor('dealer'), event => this.addCard('dealer', event.card),
        );

        this.on(NameSpace.Game).listen(
            Events.Game.Initialized, event => this.sayCards(),
            Events.Game.Over, event => this.sayOver(event),
            Events.Game.EndOfRound, event => this.endOfRound(),
        );
    }

    clearCards() {
        this.cards = {};
        this.gameOver = false;
    }

    endOfRound() {
        if(this.reversed) {
            this.addCard('dealer', this.reversed.flip());
            this.reversed = null;
        }
    }

    sayOver({winner, message}) {
        this.gameOver = true;
        if(winner == 'player') {
            this.say(
                'You won with '
                + NameSpace.Game.state.scores['player'] + ' points against '
                + NameSpace.Game.state.scores['dealer']
            , 1, 1.3);
        } else {
            this.say(
                'Dealer wins this round with '
                + NameSpace.Game.state.scores['dealer'] + ' points against your '
                + NameSpace.Game.state.scores['player']
            );
        }
        this.say(message);
    }

    addCard(name, card) {
        if(card.reversed) {
            this.reversed = card;
            return;
        }

        if(name == 'player' && this.cards[name] && this.cards[name].length > 1) {
            this.shout(this.describeCard(card)).then(
                () => this.gameOver || this.shout('you have ' + NameSpace.Game.state.scores['player'] + ' points')
            );
        } else if(name == 'dealer' && this.cards[name]) {
            this.shout(this.describeCard(card));
        }

        (this.cards[name] || (this.cards[name] = [])).push(card);
    }

    sayCards() {
        this.say('Dealer has ' + this.describeCard(this.cards.dealer[0]));
        this.say(
            'And You have ' + this.describeCard(this.cards.player[0]) + ' and '
            + this.describeCard(this.cards.player[1])
            + ' giving you ' + NameSpace.Game.state.scores['player'] + ' points'
        );

        if(!this.roundsCompleted++) {
            this.say('Say "hit" to get a new card or  "stick" to end the round');
        }
    }

    describeCard(card) {
        if(card.reversed) {
            return 'a card face down';
        }

        const rankNames = {
            j: 'jack', q: 'queen', k: 'king', a: 'ace'
        };

        if(card.suit == 'diams') {
            card.suit = 'diamonds';
        }

        return (rankNames[card.rank] || card.rank) + ' of ' + card.suit;
    }

    say(txt, rate = 1.2, volume = 1) {
        return new Promise((resolve, reject) => {
            var sense = new SpeechSynthesisUtterance(txt);
            sense.rate = rate;
            sense.volume = volume;
            sense.onend = resolve();
            this.synth.speak(sense);
        });
    }

    shout(txt) {
        return this.say(txt, 1.5, 1.3);
    }

}

export default SpeechComponent;
