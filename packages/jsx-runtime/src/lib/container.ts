import { IGameObject, NormalGameNode, Props, VirtualNode } from './types';

type Node = {
  __type: NormalGameNode;
  instance: IGameObject;
  children: Node[];
  props: Props;
};

function diffNode(node: Node, vnode: VirtualNode): boolean {
  const changedProps: string[] = [];
  for (const key in node.props) {
    if (node.props[key] == vnode.props[key]) {
      continue;
    }

    changedProps.push(key);
  }

  for (const key in vnode.props) {
    if (node.props[key]) {
      continue;
    }

    changedProps.push(key);
  }
  if (changedProps.length > 0) return true;

  return false;
}

function patchNode(root: IGameObject, node: Node, vnode: VirtualNode): Node {
  if (node.__type != vnode.type) {
    node.instance.removeFromParent();
    return createNode(root, vnode);
  }

  if (diffNode(node, vnode) && node.instance.applyProps) {
    node.instance.applyProps(vnode.props);
  }

  const children = vnode.children.map((newVNode, idx) => {
    const childNode = node.children[idx];
    if (!childNode) {
      return createNode(node.instance, newVNode);
    }
    return patchNode(node.instance, childNode, newVNode);
  });

  if (node.children.length > vnode.children.length) {
    let idx = node.children.length - vnode.children.length;
    for (; idx < node.children.length; idx++) {
      node.children[idx].instance.removeFromParent();
    }
  }

  return {
    ...node,
    children,
    props: vnode.props,
  };
}

function createNode(root: IGameObject, vnode: VirtualNode): Node {
  const instance = new vnode.type();
  const children = vnode.children.map((child) => createNode(instance, child));

  instance.applyProps?.(vnode.props);

  root.addChild(instance);

  return {
    instance,
    children,
    __type: vnode.type,
    props: vnode.props,
  };
}

export { createNode as createContainer, patchNode as updateContainer };
