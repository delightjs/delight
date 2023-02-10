import { Application, IApplicationOptions } from 'pixi.js';
import { extension, Extension, ExtensionConfigureFn } from '@delightjs/core';
import { Scene } from './scene';

export type StageConfig = {
  app: IApplicationOptions;
  entry: Scene;
};

@extension('stage')
export class StageExtension implements Extension {
  public readonly config: Partial<StageConfig> = {};
  private app?: Application;

  configure<StageConfig>(configureFor: ExtensionConfigureFn<StageConfig>) {
    configureFor(this.config as StageConfig);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  load() {}

  start() {
    this.app = new Application(this.config.app);
    if (this.config.entry) {
      this.app.stage.addChild(this.config.entry);
    }
  }
}
