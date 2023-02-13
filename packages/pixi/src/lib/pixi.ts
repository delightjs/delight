import { Application } from 'pixi.js';
import { extension, Extension, ExtensionConfigureFn } from '@delightjs/core';
import {
  IGameObject,
  createVirtualNode,
  updateNode,
} from '@delightjs/jsx-runtime';
import { Config } from './config';

@extension('pixi')
export class PIXIExtension implements Extension {
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
        const element = createVirtualNode(scene, {});
        let currentNode = updateNode(
          this.app.stage as IGameObject,
          element,
          null
        );
        this.app.ticker.add(() => {
          if (this.app) {
            const newNode = createVirtualNode(scene, {});
            currentNode = updateNode(
              this.app.stage as IGameObject,
              newNode,
              currentNode
            );
          }
        });
      }
    }
  }
}
