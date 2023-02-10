import { Container } from 'pixi.js';

import { createElement } from './element';

describe('createElement', () => {
  it('should contains a container', async () => {
    const element = await createElement(Container, null);
    expectTypeOf(element).toMatchTypeOf<Container>();
  });

  it('should add children', async () => {
    const element = await createElement(
      Container,
      null,
      createElement(Container, null),
      createElement(Container, null)
    );
    expect(element.children).toHaveLength(2);
  });
});
