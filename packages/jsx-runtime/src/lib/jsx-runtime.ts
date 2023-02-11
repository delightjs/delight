import { Container } from 'pixi.js';

type Props = { [key: string]: unknown } | null;
type Constructor = new (props?: Props) => Container;
type Component = (props?: Props) => Container;

function instantiateElement(
  type: Constructor | Component,
  props: Props
): Container {
  let element: Container;

  if (type.prototype && type.prototype.constructor.name) {
    const ctor = type as Constructor;
    element = new ctor(props);
  } else {
    const ctor = type as Component;
    element = ctor(props);
  }

  return element;
}

function createDisplayObject(type: Constructor | Component, props: Props) {
  const element = instantiateElement(type, props);

  if (props && props['children']) {
    (props['children'] as Container[]).forEach((item) =>
      element.addChild(item)
    );
  }

  return element;
}

export {
  createDisplayObject as jsx,
  createDisplayObject as jsxs,
  createDisplayObject as jsxDEV,
};
