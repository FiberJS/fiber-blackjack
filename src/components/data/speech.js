import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Flows from 'flows';
import { InGame, NEW_GAME, HIT, STICK, SCORE, YES, NO, NEVERMIND } from '../../speech/listeners/in-game';
import { OutGame, NEW_GAME as RESTART_GAME } from '../../speech/listeners/out-game';

class SpeechComponent extends Fiber.DataComponent {

    constructor() {
        super();

        this.recognition = new (webkitSpeechRecognition || SpeechRecognition)();

        this.recognition.continuous = true;
        this.recognition.interimResults = false;

        this.recognition.onresult = event => this.onCommand(event);

        this.listening = false;
        this.recognition.onend = () => {
            if(this.listening) {
                this.start();
            }
        };

        this.question = null;

        this.inGame = new InGame(
            HIT, () => this.on(Flows.CardFor('player')).trigger(new Events.Card.Request('player')),
            STICK, () => this.on(NameSpace.Game).trigger(new Events.Game.EndOfRound()),
            SCORE, () => this.on(NameSpace.Speech).trigger(new Events.Speech.TellScore()),
            NEW_GAME, () => this.newGame(),
            YES, () => this.confirm(YES),
            NO, () => this.confirm(NO),
            NEVERMIND, () => this.inGame.reset(),
        );

        this.outGame = new OutGame(
            RESTART_GAME, () => this.on(NameSpace.Game).trigger(new Events.Game.Reset()),
        );

        this.activeListener = this.inGame;
    }

    listen() {
        this.on(NameSpace.Speech).listen(
            Events.Speech.Listening, event => this.start(),
            Events.Speech.Speaking, event => this.stop(),
        );
        this.on(NameSpace.Game).listen(
            Events.Game.Reset, event => { this.activeListener = this.inGame; console.log('in'); },
            Events.Game.Over, event => { this.activeListener = this.outGame; console.log('out'); },
        );
    }

    newGame() {
        this.question = new Events.Speech.Say('are you sure?');
        this.on(Flows.Confirm(Events.Game.Reset.on(NameSpace.Game))).trigger(
            this.question
        );
    }

    confirm(answer) {
        if(this.question && answer === YES) {
            const { event, namespace } = this.question.flow.steps.pop();
            this.question = null;

            this.on(namespace).trigger(
                new event()
            );
        } else {
            this.question = null;
        }
    }

    start() {
        console.log('♪ listening');
        this.listening = true;
        this.recognition.start();
    }

    stop() {
        console.log('♪ speaking');
        this.listening = false;
        this.recognition.stop();
    }

    onCommand(speechEvent) {
        if(!this.activeListener.input(speechEvent)) {
            this.on(NameSpace.Speech).trigger(
                new Events.Speech.Say("didn't catch that")
            );
        }
    }
}

export default SpeechComponent;

const commands = [
    {
        regex: /new.+(game|one|round)/,
        namespace: Flows.Confirm(Events.Game.Reset.on(NameSpace.Game)),
        event: () => {
          Question = new Events.Speech.Say('are you sure?');
          return Question;
        }
    },
    {
        regex: /yes|yep|yeah/,
        namespace: NameSpace.Game,
        event: () => {
            if(Question) {
                const ActionEvent = Question.flow.steps.pop().event;
                Question = null;

                return new ActionEvent();
            } else {
                return false;
            }
        }
    },
    {
        regex: /no|nope|nah/,
        namespace: NameSpace.Speech,
        event: () => {
            Question = null;

            return new Events.Speech.Say('Ok.');
        }
    },
];
