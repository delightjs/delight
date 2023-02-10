import { Application } from 'pixi.js';
import Delight from '@delightjs/core';
import { StageConfig } from '@delightjs/stage';

import { Entry } from './scenes/Entry';

Delight.app.initialize();
Delight.app.configureFor<StageConfig>('stage', (config) => {
  config.app = {
    view: document.getElementById('app') as HTMLCanvasElement,
    resizeTo: window,
    backgroundColor: '000',
  };
  Entry().then((node) => {
    config.entry = node;

    Delight.app.start();
  });
});
