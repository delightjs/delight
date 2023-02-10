import { Container } from 'pixi.js';

type Props = { [key: string]: unknown } | null;
type Constructor = new (props?: Props) => Container;
type Component = (props?: Props) => Promise<Container>;

async function instantiateElement(
  type: Constructor | Component,
  props: Props
): Promise<Container> {
  let element: Container;

  if (type.prototype && type.prototype.constructor.name) {
    const ctor = type as Constructor;
    element = new ctor(props);
  } else {
    const ctor = type as Component;
    element = await ctor(props);
  }

  return element;
}

export async function createElement(
  type: Constructor | Component,
  props: Props,
  ...children: Promise<Container>[]
): Promise<Container> {
  const element = await instantiateElement(type, props);

  const loaded = await Promise.all(children);
  loaded.forEach((item) => element.addChild(item));

  return element;
}
