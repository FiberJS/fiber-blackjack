import Fiber from 'fiber';
import { Optional } from 'fiber-framework/domain';
import Card from 'domain/card';

const CardEvent = Fiber.defineEventType({
    card: Card,
});

const CardRequestEvent = Fiber.defineEventType({
    recipient: String,
    face: Optional(String),
});

const Events = {};

Events.Card = {};
Events.Card.Request = Fiber.defineEvent(CardRequestEvent, `Card:Request`);
Events.Card.ServedFor = recipient => Fiber.defineEvent(CardEvent, `Card:ServedFor:${recipient}`);

Events.Game = {};
Events.Game.Reset = Fiber.defineEvent(Fiber.basicEvent(), `Game:Reset`);

export default Events;
