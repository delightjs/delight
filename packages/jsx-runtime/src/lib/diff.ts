import {
  IGameObject,
  GameNode,
  NormalGameNode,
  HighOrderGameNode,
  VirtualNode,
} from './types';

const isConstructor = (node: GameNode) =>
  node.prototype && node.prototype.constructor.name;

function updateNode(
  parent: IGameObject,
  newNode: VirtualNode,
  oldNode: VirtualNode | null
): VirtualNode {
  newNode.instance = oldNode?.instance;
  newNode.parent = parent;

  if (parent != oldNode?.parent) {
    (oldNode?.instance as IGameObject)?.removeFromParent?.();
  }

  if (isConstructor(newNode.type)) {
    if (newNode.type != oldNode?.type || newNode.instance === undefined) {
      newNode.instance = new (newNode.type as NormalGameNode)();
    }
  } else {
    newNode.instance = {
      next: () =>
        (newNode.type as HighOrderGameNode)({
          ...newNode.props,
          children: newNode.children,
        }),
    };
  }

  if (isConstructor(newNode.type)) {
    (newNode.instance as IGameObject).applyProps?.(newNode.props);
  } else {
    newNode.children = [(newNode.instance as { next(): VirtualNode }).next()];
  }

  const oldChildren = oldNode?.children || [];

  const childParent = isConstructor(newNode.type)
    ? (newNode.instance as IGameObject)
    : parent;
  newNode.children.forEach((child, idx) => {
    updateNode(childParent, child, oldChildren[idx]);
  });

  if (oldChildren.length > newNode.children.length) {
    let idx = oldChildren.length - newNode.children.length;
    for (; idx < oldChildren.length; idx++) {
      (oldChildren[idx].instance as IGameObject).removeFromParent?.();
    }
  }

  if (isConstructor(newNode.type)) {
    parent.addChild(newNode.instance as IGameObject);
  }

  return newNode;
}

export { updateNode };
