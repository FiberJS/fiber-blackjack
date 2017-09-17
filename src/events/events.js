import Fiber from 'fiber';
import {
  CardEvent, CardRequestEvent, PlayerEvent, ScoreEvent, GameOverEvent
} from './event-types';

const Events = {};

Events.Card = {};
Events.Card.Request = Fiber.defineEvent(CardRequestEvent, `Card:Request`);
Events.Card.ServedFor = recipient => Fiber.defineEvent(CardEvent, `Card:ServedFor:${recipient}`);
Events.Card.Cleanup = Fiber.basicEvent('Card:Cleanup');

Events.Game = {};
Events.Game.New = Fiber.basicEvent('Game:New');
Events.Game.ScoreUpdated = Fiber.defineEvent(ScoreEvent, `Game:ScoreUpdated`);
Events.Game.EndOfRound = Fiber.basicEvent('Game:EndOfRound');
Events.Game.Over = Fiber.defineEvent(GameOverEvent, `Game:Over`);

export default Events;
