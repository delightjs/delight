import {
  NormalGameNode,
  HighOrderGameNode,
  GameNode,
  Props,
  VirtualNode,
  VirtualNodeConfig,
} from './types';

const isConstructor = (node: GameNode) =>
  node.prototype && node.prototype.constructor.name;

export function createVirtualNode(
  type: GameNode,
  config: VirtualNodeConfig
): VirtualNode {
  if (isConstructor(type)) {
    const { children, ...props } = config;

    return {
      type: type as NormalGameNode,
      props: props as Props,
      children: children || [],
    };
  }

  return (type as HighOrderGameNode)(config);
}

export {
  createVirtualNode as jsx,
  createVirtualNode as jsxs,
  createVirtualNode as jsxDEV,
};
