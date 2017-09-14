import Fiber from 'fiber';
import Events from 'events';

const GameSpace = Fiber.NameSpace.create('data/game');

GameSpace.defineState({
    players : (state) => [
        Fiber.NameSpace.Defined, event => (state.players = []),
        Events.Player.Joined, event => playerJoined(event.player, state),
        Events.Player.Left, event => playerLeft(event.player, state),
    ],
    scores : (state) => [
        Fiber.NameSpace.Defined, event => (state.scores = {}),
        Events.Game.Reset, event => (state.scores = {}),
        Events.Game.ScoreUpdated, event => updateScore(event, state),
    ],
});

function playerJoined(player, state) {
    state.players.push(player);
}

function playerLeft(player, state) {
    state.players = state.players.filter( p => !p.equal(player));
}

function updateScore(scoreEvent, state) {
    state.scores[scoreEvent.recipient] = scoreEvent.score;
}

export default GameSpace;
