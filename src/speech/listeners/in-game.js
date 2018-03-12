import { AllOf, AnyOf, CommandListener } from '../command-listener';

export const NEW_GAME = 'NEW_GAME';
export const HIT = 'HIT';
export const STICK = 'STICK';
export const SCORE = 'SCORE';
export const YES = 'YES';
export const NO = 'NO';
export const NEVERMIND = 'NEVERMIND';


export const InGame = CommandListener.withCommands(
    AllOf('new', 'game'), NEW_GAME,
    AllOf('new', 'one'), AllOf('new', 'card'), AllOf('hit'), HIT,
    AllOf('stay'), AllOf('stick'), STICK,
    AllOf('my', 'score'), SCORE,
    AnyOf('yes', 'yeah', 'yup'), YES,
    AnyOf('no', 'nope'), NO,
    AllOf('forget', 'it'), AllOf('never', 'mind'), AnyOf('whatever'), NEVERMIND,
);
