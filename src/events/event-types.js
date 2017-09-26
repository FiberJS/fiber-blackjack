import Fiber from 'fiber';
import { Optional } from 'fiber/domain';
import Card from 'domain/card';
import Player from 'domain/player';

export const CardEvent = Fiber.defineEventType({
    card: Card,
});

export const CardRequestEvent = Fiber.defineEventType({
    recipient: String,
    face: Optional(String),
});

export const PlayerEvent = Fiber.defineEventType({
    player: Player,
});

export const ScoreEvent = Fiber.defineEventType({
    recipient: String,
    score: Number,
});

export const GameOverEvent = Fiber.defineEventType({
    winner: String,
    message: String,
});

export const RiskEvent = Fiber.defineEventType({
    risk: Number,
});
