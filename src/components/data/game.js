import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Card from 'domain/card';

class GameComponent extends Fiber.DataComponent {

    listen() {
        this.on(Fiber.System).listen(
            Fiber.System.Ready, event => this.initGame(),
        );
        this.on(NameSpace.Game).listen(
            Events.Game.Reset, event => this.initGame(),
            Events.Game.ScoreUpdated, event => this.checkScores(),
            Events.Game.EndOfRound, event => this.endOfRound(),
        );
    }

    initGame() {
        this.on(NameSpace.Cards).triggerSequence(
            new Events.Card.Cleanup(),
            new Events.Card.Request('dealer', Card.Reversed),
            new Events.Card.Request('dealer'),
            new Events.Card.Request('player'),
            new Events.Card.Request('player')
        );
    }

    checkScores() {
        const scores = NameSpace.Game.state.scores;
        const cards = NameSpace.Cards.state.cards;

        if(scores.player == 21 && cards.player == 2) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("player", "BlackJack!!!!")
            );
        }
        else if(scores.player > 21) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Over stretched there a bit")
            );
        }
    }

    callDealerCard() {
        setTimeout(() => {
            this.on(NameSpace.Cards).trigger(
                new Events.Card.Request('dealer')
            ).then( result => {
                this.on(NameSpace.Game).trigger(
                    new Events.Game.EndOfRound()
                );
            })
        }, 500);
    }

    endOfRound() {
        const scores = NameSpace.Game.state.scores;
        const cards = NameSpace.Cards.state.cards;

        if(scores.dealer < 16) {
            return this.callDealerCard();
        }
        if(scores.dealer == 21 && cards.dealer == 2) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Oops...")
            );
        } else if(scores.dealer > 21) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("player", "Dealer was unlucky :)")
            );
        } else if(scores.player > 21) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Over stretched there a bit")
            );
        } else if(scores.player >= scores.dealer){
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("player", "Good game!")
            );
        } else {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Bad luck...")
            );
        }
    }
}

export default GameComponent;
