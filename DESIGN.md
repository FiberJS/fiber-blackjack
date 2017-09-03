
# BlackJack game

Thought to document the way I design this game with **#Fiber**. Let's look at the
main components first.

## Main components of the game

1) **Player** or Players when it gets multiplayer. Player is going to have manual controls
to hit or stick within the round.

2) **Dealer** sort of a player, but has less options and is fully automated

3) **Round** each round consists of the dealer dealing everyone two cards including itself,
then show one of its cards, then each player hits until they stick :) After that the round is over
and the dealer starts the dance - pulling cards until falls outside of 21. After that each player
who is above the dealer wins.

4) **Deck** the dealer will get the cards from a shuffled deck of cards and get a new deck once it's
all used up. Each deck should be shuffled before it starts serving.

## (Inter)actions

- Dealer pulls cards from Deck
- Dealer serves all players - InitGame
- Player hits (asks for new card)
- Player sticks (finished)
- Round starts
- Round ends

 
