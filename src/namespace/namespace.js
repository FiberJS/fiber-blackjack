import Fiber from 'fiber';
import GameSpace from './game.namespace';
import CardSpace from './cards.namespace';

const NameSpace = {
    Cards  : CardSpace,
    Game   : GameSpace,
    Speech : Fiber.NameSpace.create('data/speech')
};

export default NameSpace;
