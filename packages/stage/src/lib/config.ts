import { IApplicationOptions, Container } from 'pixi.js';
import { Map } from 'immutable';

export class Config {
  public app: IApplicationOptions = {};
  public defaultScene?: string;

  private scenes: Map<string, Container> = Map<string, Container>();

  addScene(name: string, scene: Container) {
    this.scenes = this.scenes.set(name, scene);
  }

  getScene(name: string): Container | undefined {
    return this.scenes.get(name);
  }
}
