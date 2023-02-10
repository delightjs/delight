import * as PIXI from 'pixi.js';

export type SpriteProps = {
  texture: PIXI.Texture;
  x?: number;
  y?: number;
};

export class Sprite extends PIXI.Sprite {
  constructor(props: SpriteProps) {
    super(props.texture);

    this.x = props.x || 0;
    this.y = props.y || 0;
  }
}
