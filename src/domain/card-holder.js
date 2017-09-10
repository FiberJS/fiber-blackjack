import Fiber from 'fiber';

class CardHolderBaseComponent extends Fiber.UIComponent {

    init() {
        this.cards = [];
        this.score = 0;
    }

    addCard(card) {
        this.cards.push(card);
        this.updateScore();
    }

    updateScore() {
        let possibleScores = [0];
        this.cards.forEach(card => {
            const score = getScore(card);
            if(score.length) {
                possibleScores = splitScores(possibleScores, score);
            } else {
                possibleScores = addScore(possibleScores, score);
            }

        });
        this.score = bestScoreFrom(possibleScores);
    }
}

function getScore(card) {
    return isFinite(card.rank)
        ? parseInt(card.rank)
        : card.rank === 'a' ? [1, 11] : 10
        ;
}

function splitScores(possibleScores, scores) {
    return addScore(possibleScores, scores[0]).concat(
        addScore(possibleScores, scores[1])
    ).sort(
        (a, b) => a - b
    ).filter(
        (score, i, allScores) => (i < 1 || score != allScores[i-1])
    );
}

function addScore(possibleScores, score) {
    return possibleScores.map( possibleScore => possibleScore + score);
}

function bestScoreFrom(possibleScores) {
    if(possibleScores[0] >= 21) {
        return possibleScores[0];
    }
    let best = possibleScores.pop();
    while(best > 21) {
        best = possibleScores.pop();
    }
    return best;
}

export default CardHolderBaseComponent;
