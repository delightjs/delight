import { Container } from 'pixi.js';
import { Element } from './jsx-runtime';

type Node = {
  instance: Container;
  children: Node[];
  props: object;
};

function createNode(root: Container, element: Element): Node {
  const instance = new element.type(element.props);
  const children = element.children.map((child) => createNode(instance, child));

  root.addChild(instance);

  return {
    instance,
    children,
    props: element.props,
  };
}

export { createNode as createContainer };
