import Fiber from 'fiber';
import {
  CardEvent, CardRequestEvent, PlayerEvent, ScoreEvent, GameOverEvent, RiskEvent, SpeechEvent
} from './event-types';

const Events = {};

Events.Card = {};
Events.Card.Request = Fiber.defineEvent(CardRequestEvent, `Card:Request`);
Events.Card.ServedFor = recipient => Fiber.defineEvent(CardEvent, `Card:ServedFor:${recipient}`);
Events.Card.Cleanup = Fiber.basicEvent('Card:Cleanup');

Events.Game = {};
Events.Game.Reset = Fiber.basicEvent('Game:Reset');
Events.Game.Initialized = Fiber.basicEvent('Game:Initialized');
Events.Game.ScoreUpdated = Fiber.defineEvent(ScoreEvent, `Game:ScoreUpdated`);
Events.Game.RiskUpdated = Fiber.defineEvent(RiskEvent, `Game:RiskUpdated`);
Events.Game.EndOfRound = Fiber.basicEvent('Game:EndOfRound');
Events.Game.Over = Fiber.defineEvent(GameOverEvent, `Game:Over`);

Events.Player = {};
Events.Player.Joined = Fiber.defineEvent(PlayerEvent, 'Player:Joined');
Events.Player.Left = Fiber.defineEvent(PlayerEvent, 'Player:Left');

Events.Speech = {};
Events.Speech.Listening = Fiber.basicEvent('Speech:Listening');
Events.Speech.Speaking = Fiber.basicEvent('Speech:Speaking');
Events.Speech.Say = Fiber.defineEvent(SpeechEvent, 'Speech:Say');
Events.Speech.TellScore = Fiber.basicEvent('Speech:TellScore');


export default Events;
