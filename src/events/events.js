import Fiber from 'fiber';
import Card from 'domain/card';

const CardEvent = Fiber.defineEventType({
    card: Card
});
const CardRequestEvent = Fiber.defineEventType({
    recipient: String
});

const Events = {};

Events.Card = {};
Events.Card.Request = Fiber.defineEvent(CardRequestEvent, `Card:Request`);
Events.Card.ServedFor = recipient => Fiber.defineEvent(CardEvent, `Card:ServedFor:${recipient}`);

export default Events;
