export type Props = { [key: string]: unknown };
export interface IGameObject {
  applyProps?(props: Props): void;
  // PIXI.js
  addChild(child: IGameObject): void;
  removeFromParent(): void;
}

export type NormalGameNode = new () => IGameObject;
export type HighOrderGameNode = (config: VirtualNodeConfig) => VirtualNode;
export type GameNode = NormalGameNode | HighOrderGameNode;

export type VirtualNodeConfig = Props & {
  children?: VirtualNode | VirtualNode[];
};
export type VirtualNode = {
  type: GameNode;
  props: Props;
  parent?: IGameObject;
  instance?: IGameObject | { next(): VirtualNode };
  children: VirtualNode[];
};
