import Fiber from 'fiber';
import NameSpace from 'namespace';
import Events from 'events';
import Flows from 'flows';

const commands = [
    {
        regex: /hit|(new|another).+card/,
        namespace: Flows.CardFor('player'),
        event: () => new Events.Card.Request('player')
    },
    {
        regex: /stick|stay/,
        namespace: NameSpace.Game,
        event: () => new Events.Game.EndOfRound()
    },
    {
        regex: /new.+(game|one|round)/,
        namespace: NameSpace.Game,
        event: () => new Events.Game.Reset()
    },
    {
        regex: /my.+score/,
        namespace: NameSpace.Speech,
        event: () => new Events.Speech.TellScore()
    },
];

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
    }

    listen() {
        this.on(NameSpace.Speech).listen(
            Events.Speech.Listening, event => this.start(),
            Events.Speech.Speaking, event => this.stop(),
        );
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
        const { results, resultIndex } = speechEvent;
        const voiceCommand = results[resultIndex][0].transcript.toLowerCase();

        console.log(voiceCommand);

        let understood = false;
        for(let cmd of commands) {
            if(cmd.regex.test(voiceCommand)) {
                console.log('heard command', cmd.regex.toString());
                this.on(cmd.namespace).trigger(
                    cmd.event()
                );
                understood = true;
                break;
            }
        }

        if(!understood) {
            this.on(NameSpace.Speech).trigger(
                new Events.Speech.Say("didn't catch that")
            );
        }
    }
}

export default SpeechComponent;
