import { Container } from 'pixi.js';
import { Element, Constructor, Props } from './jsx-runtime';

type PropApplicable = Container & { applyProps?: (props: Props) => void };
type Node = {
  __type: Constructor;
  instance: PropApplicable;
  children: Node[];
  props: Props;
};

function diffNode(node: Node, element: Element): boolean {
  const changedProps: string[] = [];
  for (const key in node.props) {
    if (node.props[key] == element.props[key]) {
      continue;
    }

    changedProps.push(key);
  }

  for (const key in element.props) {
    if (node.props[key]) {
      continue;
    }

    changedProps.push(key);
  }
  if (changedProps.length > 0) return true;

  return false;
}

function patchNode(root: PropApplicable, node: Node, element: Element): Node {
  if (node.__type != element.type) {
    node.instance.removeFromParent();
    return createNode(root, element);
  }

  if (node.children.length != element.children.length) return node;

  if (diffNode(node, element) && node.instance.applyProps) {
    node.instance.applyProps(element.props);
  }

  const children = node.children.map((child, idx) =>
    patchNode(node.instance, child, element.children[idx])
  );

  return {
    ...node,
    children,
    props: element.props,
  };
}

function createNode(root: Container, element: Element): Node {
  const instance = new element.type(element.props);
  const children = element.children.map((child) => createNode(instance, child));

  root.addChild(instance);

  return {
    instance,
    children,
    __type: element.type,
    props: element.props,
  };
}

export { createNode as createContainer, patchNode as updateContainer };
