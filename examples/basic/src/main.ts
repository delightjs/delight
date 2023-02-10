import { Application } from 'pixi.js';

import { Entry } from './scenes/Entry';

const app = new Application({
  view: document.getElementById('app') as HTMLCanvasElement,
  resizeTo: window,
  backgroundColor: '000',
});

Entry().then((node) => {
  app.stage.addChild(node);
});
