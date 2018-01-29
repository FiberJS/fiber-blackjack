import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';

class CommentatorComponent extends Fiber.DataComponent {
    constructor() {
        super();

        this.synth = window.speechSynthesis;
        this.reversed = null;
        this.roundsCompleted = 0;
        this.gameOver = false;
    }

    listen() {
        this.on(NameSpace.Cards).listen(
            Events.Card.Cleanup, event => this.clearCards(),
            // Events.Card.ServedFor('player'), event => this.addCard('player', event.card),
            Events.Card.ServedFor('dealer'), event => this.addCard('dealer', event.card),
        );

        this.on(NameSpace.Game).listen(
            Events.Game.ScoreUpdated, event => this.tellScore(event),
            Events.Game.Over, event => this.sayOver(event),
            Events.Game.EndOfRound, event => this.endOfRound(),
        );

        this.on(NameSpace.Speech).listen(
            Events.Speech.Say, event => this.say(event.transcript),
            Events.Speech.TellScore, event => this.tellScore({}),
        );


        this.speaking = false;
        global.setInterval(
            () => {
                if(this.synth.speaking && !this.speaking) {
                    this.speaking = true;
                    this.on(NameSpace.Speech).trigger(
                        new Events.Speech.Speaking()
                    );
                } else if(!this.synth.speaking && this.speaking) {
                    this.speaking = false;
                    this.on(NameSpace.Speech).trigger(
                        new Events.Speech.Listening()
                    );
                }
            },
            100
        );
    }

    clearCards() {
        this.synth.cancel();
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
        } else if(this.reversed && NameSpace.Game.state.scores['player'] > 21) {
            this.say('');
            this.say('');
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
        if(this.gameOver) return ;

        if(card.reversed) {
            this.reversed = card;
            return;
        }

        if(name == 'player' && NameSpace.Cards.state.cards[name] && NameSpace.Cards.state.cards[name].length > 2) {
            this.shout(this.describeCard(card));
        } else if(name == 'dealer' && NameSpace.Cards.state.cards[name].length > 2) {
            this.shout(this.describeCard(card));
        }
    }

    tellScore({ recipient, score, flow }) {
        if(recipient && recipient != 'player') return;

        if(flow) {
            this.addCard('player', flow.history[1].card);
        }

        if(NameSpace.Cards.state.cards.player.length == 2) {
            this.sayCards();
        }

        if(NameSpace.Cards.state.cards.player.length > 1 && (score <= 21)) {
            this.say('You have ' + NameSpace.Game.state.scores['player'] + ' points');
        }
    }

    sayCards() {
        this.say('Dealer has ' + this.describeCard(NameSpace.Cards.state.cards.dealer[1]));
        this.say(
            'And You have ' + this.describeCard(NameSpace.Cards.state.cards.player[0]) + ' and '
            + this.describeCard(NameSpace.Cards.state.cards.player[1])
        );

        // if(!this.roundsCompleted++) {
        //     this.say('Say "hit" to get a new card or  "stick" to end the round');
        // }
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

export default CommentatorComponent;
