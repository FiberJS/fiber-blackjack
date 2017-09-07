import Fiber from 'fiber';

const NameSpace = {
    Cards : Fiber.namespace('data/cards'),
    Game  : Fiber.namespace('data/game'),
};

export default NameSpace;
