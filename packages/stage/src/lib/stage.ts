import { Application } from 'pixi.js';
import { extension, Extension, ExtensionConfigureFn } from '@delightjs/core';
import {
  IGameObject,
  createElement,
  createContainer,
  updateContainer,
} from '@delightjs/jsx-runtime';
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
        const element = createElement(scene, {});
        let container = createContainer(this.app.stage as IGameObject, element);
        this.app.ticker.add(() => {
          if (this.app) {
            container = updateContainer(
              this.app.stage as IGameObject,
              container,
              createElement(scene, {})
            );
          }
        });
      }
    }
  }
}
