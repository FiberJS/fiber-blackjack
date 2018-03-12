import { AllOf, CommandListener } from '../command-listener';

export const NEW_GAME = 'NEW_GAME';

export const OutGame = CommandListener.withCommands(
    AllOf('new', 'game'), AllOf('again'), NEW_GAME,
);
