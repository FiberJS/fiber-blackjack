function reset(str) {
    return str.toLowerCase().replace(/\s+/, ' ').trim();
}

class VoicePattern {
    match(text) {
        return false;
    }

    signiture() {
        return this.signiture;
    }
}

class $AllOf extends VoicePattern {
    constructor(...words) {
        super();
        this.words = words.map(str => reset(str)).sort();

        this.signiture = "All:" + this.words.join('+');
    }

    match(text) {
        text = reset(text).split(/\s+/);
        for(let word of this.words) {
            if(text.indexOf(word) < 0) {
                return false;
            }
        }

        return true;
    }
}
export const AllOf = (...words) => new $AllOf(...words)

class $AnyOf extends VoicePattern {
    constructor(...words) {
        super();
        this.words = words.map(str => reset(str)).sort();

        this.signiture = "Any:" + this.words.join('+');
    }

    match(text) {
        text = reset(text).split(/\s+/);
        for(let word of this.words) {
            if(text.indexOf(word) >= 0) {
                return true;
            }
        }

        return false;
    }
}
export const AnyOf = (...words) => new $AnyOf(...words)

export class FullSentence extends VoicePattern {
    constructor(sentence) {
        super();

        this.sentence = reset(sentence);

        this.signiture = "F:" + sentence;
    }

    match(text) {
        return reset(text) == this.sentence;
    }
}


class Command {
    constructor(action, patterns) {
        this.patterns = patterns.slice() || [];

        this.action = action;
    }

    addAlternatives(input) {
        (
            input instanceof Array ? input : [ input ]
        ).forEach( alternative => {
            this.patterns.push(
                alternative instanceof VoicePattern ? alternative : new FullSentence(alternative)
            );
        });
    }

    match(text) {
        for(let pattern of this.patterns) {
            if(pattern.match(text)) {
                return true;
            }
        }
        return false;
    }
}

export class CommandListener {

    constructor(...instanceParams) {
        this.commands = [];
        this.onActions = {};

        this.fuzzy = [];
        // window.setInterval(()=>this.fuzzy.length && console.log(this.fuzzy.shift()), 10000);

        let alternatives = [];
        for(let param of this.constructor.commandParams) {
            if(param instanceof VoicePattern) {
                alternatives.push(param);
            } else {
                this.commands.push(new Command(param, alternatives));
            }
        }

        for(let i=0; i < instanceParams.length; i+=2) {
            this.onActions[instanceParams[i]] = instanceParams[i+1];
        }
    }

    input(speechEvent) {
        const { results, resultIndex } = speechEvent;
        const voiceCommand = results[resultIndex][0].transcript.toLowerCase();

        for(let cmd of this.commands) {
            if(cmd.match(voiceCommand)) {

                if(this.onActions[cmd.action]) {
                    this.onActions[cmd.action]();
                }

                if(this.fuzzy.length) {
                    console.log('adding alternatives', this.fuzzy, cmd.action);

                    cmd.addAlternatives(this.fuzzy);
                    this.fuzzy.splice(0,this.fuzzy.length);
                }

                return cmd.action;
            }
        }

        this.fuzzy.push(voiceCommand);
        console.log(this.fuzzy);

        return false;
    }

    reset() {
        while(this.fuzzy.length) {
            this.fuzzy.pop();
        }
    }

    static withCommands(...commands) {
        const Listener = class extends CommandListener {};
        Listener.commandParams = commands;

        return Listener;
    }
}
