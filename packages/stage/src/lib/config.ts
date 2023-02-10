import { IApplicationOptions, Container } from 'pixi.js';
import { Map } from 'immutable';

type SceneData = () => Promise<Container>;

export class Config {
  public app: IApplicationOptions = {};
  public defaultScene?: string;

  private scenes: Map<string, SceneData> = Map<string, SceneData>();

  addScene(name: string, scene: SceneData) {
    this.scenes = this.scenes.set(name, scene);
  }

  getScene(name: string): SceneData | undefined {
    return this.scenes.get(name);
  }
}
