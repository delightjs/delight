import { Container } from 'pixi.js';
import { jsx, jsxs } from './jsx-runtime';

describe('jsx', () => {
  it('should contains a container', async () => {
    const element = jsx(Container, {});
    expect(element).toHaveProperty('type', Container);
  });

  it('should add children', async () => {
    const element = jsxs(Container, {
      children: [jsx(Container, {}), jsx(Container, {})],
    });
    expect(element.children).toHaveLength(2);
  });
});
