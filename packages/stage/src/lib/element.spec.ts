import { Container } from 'pixi.js';

import { createElement } from './element';

describe('createElement', () => {
  it('should contains a container', () => {
    const element = createElement(Container, null);
    expectTypeOf(element).toMatchTypeOf<Container>();
  });

  it('should add children', () => {
    const element = createElement(
      Container,
      null,
      createElement(Container, null),
      createElement(Container, null)
    );
    expect(element.children).toHaveLength(2);
  });
});
