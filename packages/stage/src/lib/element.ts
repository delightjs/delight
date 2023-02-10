import { Container } from 'pixi.js';

type Props = { [key: string]: unknown } | null;
type Constructor = new (props?: Props) => Container;

export function createElement(
  ctor: Constructor,
  attrs: Props,
  ...children: Container[]
): Container {
  const element = new ctor(attrs);
  children.forEach((child) => element.addChild(child));

  return element;
}
