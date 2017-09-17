import Fiber from 'fiber';
import Events from 'events';

const GameSpace = Fiber.NameSpace.create('data/game');

GameSpace.defineState({
    scores : (state) => [
        Fiber.NameSpace.Defined, event => (state.scores = {}),
        Events.Game.New, event => (state.scores = {}),
        Events.Game.ScoreUpdated, event => updateScore(event, state),
    ],
});

function updateScore(scoreEvent, state) {
    state.scores[scoreEvent.recipient] = scoreEvent.score;
}

export default GameSpace;
