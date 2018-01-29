import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Flows from 'flows';
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
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Cleanup()
        );

        this.on(Flows.CardFor('dealer')).trigger(
            new Events.Card.Request('dealer', Card.Reversed)
        );
        this.on(Flows.CardFor('dealer')).trigger(
            new Events.Card.Request('dealer')
        );

        this.on(Flows.CardFor('player')).trigger(
            new Events.Card.Request('player')
        );
        this.on(Flows.CardFor('player')).trigger(
            new Events.Card.Request('player')
        );
    }

    checkScores() {
        const scores = NameSpace.Game.state.scores;
        const cards = NameSpace.Cards.state.cards;

        if(scores.player == 21 && cards.player.length == 2) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("player", "BlackJack!!!!")
            );
        }
        else if(scores.player > 21) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Better luck next time!")
            );
        }
    }

    callDealerCard() {
        setTimeout(() => {
            this.on(
                Flows.CardFor('dealer')
            ).trigger(
                new Events.Card.Request('dealer')
            ).then( afterScoreUpdated => {
                this.on(NameSpace.Game).trigger(
                    new Events.Game.EndOfRound()
                );
            });

        }, 500);
    }

    endOfRound() {
        const scores = NameSpace.Game.state.scores;
        const cards = NameSpace.Cards.state.cards;

        if(scores.dealer < NameSpace.Game.state.risk) {
            return this.callDealerCard();
        }
        if(scores.dealer == 21 && cards.dealer.length == 2) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Oops...")
            );
        } else if(scores.dealer > 21) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("player", "Dealer was unlucky.")
            );
        } else if(scores.player > 21) {
            this.on(NameSpace.Game).trigger(
                new Events.Game.Over("dealer", "Better luck next time!")
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
