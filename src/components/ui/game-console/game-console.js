import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import gameTemplate from './game-console.html';
import styles from './game-console.scss';


class GameConsoleComponent extends Fiber.UIComponent.withTemplate(gameTemplate) {

    listen() {
        this.on(NameSpace.Game).listen(
            Events.Game.Over, event => this.gameOver(event.winner, event.message),
        );

        this.ui('.reset').listen(
            'click', event => this.newGame()
        );
    }

    newGame() {
        this.view.querySelector('message').innerHTML = "";
        this.on(NameSpace.Game).trigger(
            new Events.Game.Reset()
        );
    }

    gameOver(winner, message) {
        this.view.querySelector('message').innerHTML = message;
    }
}

export default GameConsoleComponent;
