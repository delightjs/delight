import Delight from '@delightjs/core';
import { Config as StageConfig } from '@delightjs/pixi';

import { Entry } from './scenes/Entry';

Delight.app.initialize();
Delight.app.configureFor<StageConfig>('stage', (config) => {
  config.app = {
    view: document.getElementById('app') as HTMLCanvasElement,
    resizeTo: window,
    backgroundColor: '000',
  };

  config.defaultScene = 'entry';
  config.addScene('entry', Entry);
});

await Delight.app.start();
