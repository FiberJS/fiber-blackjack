import Fiber from 'fiber';
import { CardEvent, CardRequestEvent, PlayerEvent, ScoreEvent } from './event-types';

const Events = {};

Events.Card = {};
Events.Card.Request = Fiber.defineEvent(CardRequestEvent, `Card:Request`);
Events.Card.ServedFor = recipient => Fiber.defineEvent(CardEvent, `Card:ServedFor:${recipient}`);

Events.Game = {};
Events.Game.Reset = Fiber.basicEvent('Game:Reset');
Events.Game.ScoreUpdated = Fiber.defineEvent(ScoreEvent, `Game:ScoreUpdated`);
Events.Game.EndOfRound = Fiber.basicEvent('Game:EndOfRound');

Events.Player = {};
Events.Player.Joined = Fiber.defineEvent(PlayerEvent, 'Player:Joined');
Events.Player.Left = Fiber.defineEvent(PlayerEvent, 'Player:Left');

export default Events;
