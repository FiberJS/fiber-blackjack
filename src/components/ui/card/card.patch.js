const cardPatch = (view) => {
    return {
        rank : (rank) => {
            view.$.rank.innerHTML = rank.toString().toUpperCase();
            view.$.card.className += ` rank-${rank.toString().toLowerCase()}`;
        },
        suit : (suit) => {
            view.$.card.className += ` ${suit}`;
        },
        symbol : (symbol) => {
            view.$.suit.innerHTML = symbol;
        }
    };
};
export default cardPatch;
