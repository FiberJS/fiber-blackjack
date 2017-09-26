import Events from './events';
import NameSpace from 'namespace';

const Flows = {};

Flows.CardFor = (recipient) => Fiber.EventFlow.define(
    Events.Card.Request.on(NameSpace.Cards),
    Events.Card.ServedFor(recipient).on(NameSpace.Cards),
    Events.Game.ScoreUpdated.on(NameSpace.Game),
);

// Flows.Playoff = Fiber.EventFlow.define(
//     Events.Game.EndOfRound.on(NameSpace.Game),
//     Optional(
//         LoopOf(
//             Flows.CardFor('dealer')
//         )
//     ),
//     Events.Game.Over(NameSpace.Game),
// );
//
// // EFDL
//     `{
//         ?({Cards:Request, Cards:ServedFor('dealer')}*),
//         Game:Over
//     }`


export default Flows;
