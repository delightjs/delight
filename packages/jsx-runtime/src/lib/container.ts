import { IGameObject, Props } from './types';
import { Element, Constructor } from './jsx-runtime';

type Node = {
  __type: Constructor;
  instance: IGameObject;
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

function patchNode(root: IGameObject, node: Node, element: Element): Node {
  if (node.__type != element.type) {
    node.instance.removeFromParent();
    return createNode(root, element);
  }

  if (diffNode(node, element) && node.instance.applyProps) {
    node.instance.applyProps(element.props);
  }

  const children = element.children.map((newElement, idx) => {
    const childNode = node.children[idx];
    if (!childNode) {
      return createNode(node.instance, newElement);
    }
    return patchNode(node.instance, childNode, newElement);
  });

  if (node.children.length > element.children.length) {
    let idx = node.children.length - element.children.length;
    for (; idx < node.children.length; idx++) {
      node.children[idx].instance.removeFromParent();
    }
  }

  return {
    ...node,
    children,
    props: element.props,
  };
}

function createNode(root: IGameObject, element: Element): Node {
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
