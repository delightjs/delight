import * as PIXI from 'pixi.js';

export type AnimatedSpriteProps = {
  frames: PIXI.Texture[];
};

export class AnimatedSprite extends PIXI.AnimatedSprite {
  constructor(props: AnimatedSpriteProps) {
    super(props.frames);
  }
}
