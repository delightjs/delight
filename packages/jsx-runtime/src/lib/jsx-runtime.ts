import { GameNode, Props, VirtualNode, VirtualNodeConfig } from './types';

export function createVirtualNode(
  type: GameNode,
  config: VirtualNodeConfig
): VirtualNode {
  const { children, ...props } = config;

  const node = {
    type,
    props: props as Props,
    children: [],
  };

  if (children) {
    // @ts-expect-error: 2322 - isArray should verify all types
    node.children = Array.isArray(children)
      ? children
      : [children as VirtualNode];
  }

  return node;
}

export {
  createVirtualNode as jsx,
  createVirtualNode as jsxs,
  createVirtualNode as jsxDEV,
};
