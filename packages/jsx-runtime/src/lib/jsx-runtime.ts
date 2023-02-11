import { Container } from 'pixi.js';

export type Constructor = new (props?: object) => Container;
export type Component = (config: Config) => Element;
export type Factory = Constructor | Component;
export type Props = { [key: string]: unknown };

export type Config = {
  children?: Element[];
} & object;
export type Element = {
  type: Constructor;
  props: Props;
  children: Element[];
};

const isConstructor = (fn: Factory) =>
  fn.prototype && fn.prototype.constructor.name;

export function createElement(type: Factory, config: Config): Element {
  if (!isConstructor(type)) {
    return (type as Component)(config);
  }

  const { children, ...props } = config;

  return {
    type: type as Constructor,
    props: props as Props,
    children: children || [],
  };
}

export { createElement as jsx, createElement as jsxs, createElement as jsxDEV };
