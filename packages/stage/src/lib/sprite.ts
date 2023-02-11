import * as PIXI from 'pixi.js';

export type SpriteProps = {
  texture: Promise<PIXI.Texture>;
  x?: number;
  y?: number;
};

export class Sprite extends PIXI.Sprite {
  constructor(props: SpriteProps) {
    super(PIXI.Texture.EMPTY);

    props.texture.then((texture) => (this.texture = texture));

    this.x = props.x || 0;
    this.y = props.y || 0;
  }
}
