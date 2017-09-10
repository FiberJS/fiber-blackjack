import Fiber from 'fiber';
import GameSpace from './game.namespace';

const NameSpace = {
    Cards : Fiber.namespace('data/cards'),
    Game  : GameSpace,
};

export default NameSpace;
