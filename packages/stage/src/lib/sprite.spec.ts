import { Texture } from 'pixi.js';
import { Sprite } from './sprite';

describe('Sprite', () => {
  it('should set texture from props', () => {
    const sprite = new Sprite({ texture: Texture.EMPTY });
    expect(sprite).toHaveProperty('texture', Texture.EMPTY);
  });

  describe('when position is given', () => {
    const sprite = new Sprite({ texture: Texture.EMPTY, x: 123, y: 456 });

    it('should set x', () => expect(sprite).toHaveProperty('x', 123));
    it('should set y', () => expect(sprite).toHaveProperty('y', 456));
  });
});
