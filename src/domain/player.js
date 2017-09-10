import NameSpace from 'namespace';

class Player {
    constructor(player) {
        this.type = player.type;
        this.name = player.name || `player-${1 + NameSpace.Game.state.players.length}`;
    }

    equal(player) {
        return this.type === player.type && this.name === player.name;
    }
}

Player.Types = {
    Player : 'Player',
    Dealer : 'Dealer'
};

export default Player;
