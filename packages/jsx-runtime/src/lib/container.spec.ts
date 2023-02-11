import { Container } from 'pixi.js';
import { Element } from './jsx-runtime';
import { createContainer } from './container';

describe('createContainer', () => {
  it('should contains a container', async () => {
    const root = new Container();
    const element: Element = {
      type: Container,
      props: {},
      children: [],
    };
    const node = createContainer(root, element);
    expectTypeOf(node.instance).toMatchTypeOf<Container>();
  });

  it('should have 2 children', async () => {
    const root = new Container();
    const element: Element = {
      type: Container,
      props: {},
      children: [
        {
          type: Container,
          props: {},
          children: [],
        },
        {
          type: Container,
          props: {},
          children: [],
        },
      ],
    };
    const node = createContainer(root, element);
    expect(node.children).toHaveLength(2);
  });
});
