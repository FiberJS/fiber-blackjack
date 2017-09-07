const cardPatch = (view) => {
    return {
        rank : (rank) => {
            view.$.rank.innerHTML = rank.toString().toUpperCase();
            view.$.card.className += ` rank-${rank.toString().toLowerCase()}`;
        },
        suit : (suit, card) => {
            view.$.card.className += ` ${card.reversed ? 'back-' : ''}${suit}`;
        },
        symbol : (symbol) => {
            view.$.suit.innerHTML = symbol;
        },
        reversed : (reversed) => {
            reversed && (view.$.card.className += ` back`);
        },
    };
};
export default cardPatch;
