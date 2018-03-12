import Fiber from 'fiber';
import Events from './events';
import NameSpace from 'namespace';

const Flows = {};

const $CardFor = {};

Flows.CardFor = (recipient) => $CardFor[recipient] || ($CardFor[recipient] = Fiber.EventFlow.define(
    Events.Card.Request.on(NameSpace.Cards),
    Events.Card.ServedFor(recipient).on(NameSpace.Cards),
    Events.Game.ScoreUpdated.on(NameSpace.Game),
));

Flows.Confirm = (Action) => Fiber.EventFlow.define(
    Events.Speech.Say.on(NameSpace.Speech),
    Action
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
