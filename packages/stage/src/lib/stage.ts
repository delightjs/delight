import { Application } from 'pixi.js';
import { extension, Extension, ExtensionConfigureFn } from '@delightjs/core';
import { Config } from './config';

@extension('stage')
export class StageExtension implements Extension {
  public readonly config: Config = new Config();
  private app?: Application;

  configure<Config>(configureFor: ExtensionConfigureFn<Config>) {
    configureFor(this.config as unknown as Config);
  }

  async load() {
    this.app = new Application(this.config.app);
    if (this.config.defaultScene) {
      const scene = this.config.getScene(this.config.defaultScene);
      if (scene) {
        this.app.stage.addChild(await scene());
      }
    }
  }
}
