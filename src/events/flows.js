import Events from './events';
import NameSpace from 'namespace';

const Flows = {};

Flows.CardFor = (recipient) => Fiber.EventFlow.define(
    Events.Card.Request.on(NameSpace.Cards),
    Events.Card.ServedFor(recipient).on(NameSpace.Cards),
    Events.Game.ScoreUpdated.on(NameSpace.Game),
);

export default Flows;
