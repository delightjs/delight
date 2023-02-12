export type Props = { [key: string]: unknown };
export interface IGameObject {
  applyProps?(props: Props): void;
  // PIXI.js
  addChild(child: IGameObject): void;
  removeFromParent(): void;
}
