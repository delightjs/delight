import { IApplicationOptions } from 'pixi.js';
import { Map } from 'immutable';
import * as jsx from '@delightjs/jsx-runtime';

export class Config {
  public app: IApplicationOptions = {};
  public defaultScene?: string;

  private scenes: Map<string, jsx.Factory> = Map<string, jsx.Factory>();

  addScene(name: string, scene: jsx.Factory) {
    this.scenes = this.scenes.set(name, scene);
  }

  getScene(name: string): jsx.Factory | undefined {
    return this.scenes.get(name);
  }
}
