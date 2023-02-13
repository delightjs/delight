import { Texture } from 'pixi.js';
import { AnimatedSprite } from './animatedSprite';

describe('AnimatedSprite', () => {
  it('should set frames from props', () => {
    const sprite = new AnimatedSprite({ frames: [Texture.EMPTY] });
    expect(sprite).toHaveProperty('textures', [Texture.EMPTY]);
  });

  it('should have 1 frame', () => {
    const sprite = new AnimatedSprite({ frames: [Texture.EMPTY] });
    expect(sprite).toHaveProperty('totalFrames', 1);
  });
});
