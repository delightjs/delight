import { IApplicationOptions } from 'pixi.js';
import { Map } from 'immutable';
import * as jsx from '@delightjs/jsx-runtime';

export class Config {
  public app: IApplicationOptions = {};
  public defaultScene?: string;

  private scenes: Map<string, jsx.GameNode> = Map<string, jsx.GameNode>();

  addScene(name: string, scene: jsx.GameNode) {
    this.scenes = this.scenes.set(name, scene);
  }

  getScene(name: string): jsx.GameNode | undefined {
    return this.scenes.get(name);
  }
}
