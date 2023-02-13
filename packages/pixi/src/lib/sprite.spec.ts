import { Texture } from 'pixi.js';
import { Sprite } from './sprite';

describe('Sprite', () => {
  it('should set empty texture by default', () => {
    const sprite = new Sprite();
    expect(sprite).toHaveProperty('texture', Texture.EMPTY);
  });

  describe('#applyProps', () => {
    const sprite = new Sprite();
    sprite.applyProps({
      texture: Promise.resolve(Texture.EMPTY),
      x: 123,
      y: 456,
    });

    it('should set x', () => expect(sprite).toHaveProperty('x', 123));
    it('should set y', () => expect(sprite).toHaveProperty('y', 456));
  });
});
