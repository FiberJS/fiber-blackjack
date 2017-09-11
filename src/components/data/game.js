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
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('dealer', Card.Reversed)
        );
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('dealer')
        );

        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('player')
        );
        this.on(NameSpace.Cards).trigger(
            new Events.Card.Request('player')
        );
    }

    checkScores() {
        console.log(NameSpace.Game.state.scores);
    }

    callDealerCard() {
        console.log('callDealerCard called');
        setTimeout(() => {
            console.log('callDealerCard activating');
            this.on(NameSpace.Cards).trigger(
                new Events.Card.Request('dealer')
            );
            this.on(NameSpace.Game).trigger(
                new Events.Game.EndOfRound()
            );
        }, 500);
    }

    endOfRound() {
        if(NameSpace.Game.state.scores.dealer < 16) {
            return this.callDealerCard();
        }
        if(NameSpace.Game.state.scores.dealer > 21) {
            console.log("you won!");
        } else if(NameSpace.Game.state.scores.player > 21) {
            console.log("bad luck!");
        } else if(NameSpace.Game.state.scores.player > NameSpace.Game.state.scores.dealer){
            console.log("you won!");
        } else {
            console.log("bad luck!");
        }
    }
}

export default GameComponent;
