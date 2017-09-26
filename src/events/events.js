import Fiber from 'fiber';
import {
  CardEvent, CardRequestEvent, PlayerEvent, ScoreEvent, GameOverEvent, RiskEvent
} from './event-types';

const Events = {};

Events.Card = {};
Events.Card.Request = Fiber.defineEvent(CardRequestEvent, `Card:Request`);
Events.Card.ServedFor = recipient => Fiber.defineEvent(CardEvent, `Card:ServedFor:${recipient}`);
Events.Card.Cleanup = Fiber.basicEvent('Card:Cleanup');

Events.Game = {};
Events.Game.Reset = Fiber.basicEvent('Game:Reset');
Events.Game.ScoreUpdated = Fiber.defineEvent(ScoreEvent, `Game:ScoreUpdated`);
Events.Game.RiskUpdated = Fiber.defineEvent(RiskEvent, `Game:RiskUpdated`);
Events.Game.EndOfRound = Fiber.basicEvent('Game:EndOfRound');
Events.Game.Over = Fiber.defineEvent(GameOverEvent, `Game:Over`);

Events.Player = {};
Events.Player.Joined = Fiber.defineEvent(PlayerEvent, 'Player:Joined');
Events.Player.Left = Fiber.defineEvent(PlayerEvent, 'Player:Left');

export default Events;
