import { Container } from 'pixi.js';

type Constructor = new (...args: unknown[]) => Container;

export function createElement(
  ctor: Constructor,
  attrs: { [key: string]: string },
  ...children: Container[]
): Container {
  const element = new ctor(attrs);
  children.forEach((child) => element.addChild(child));

  return element;
}
