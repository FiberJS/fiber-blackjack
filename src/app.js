import Fiber from 'fiber-framework';
import DealerComponent from 'components/ui/dealer/dealer';
import PlayerComponent from 'components/ui/player/player';
// import NameSpace from 'namespace';
// import Events from 'events';

require('./app.scss');

// Debugger
Fiber.Debugger.showEvents = true;
// Fiber.Debugger.showView = true;
Fiber.Debugger.init();

Fiber.app(() => {
    // data components

    // ui components
    DealerComponent.attachTo('dealer');
    PlayerComponent.attachTo('player');
});
