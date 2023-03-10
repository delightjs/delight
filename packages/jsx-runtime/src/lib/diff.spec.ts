import { IGameObject, VirtualNode } from './types';
import { updateNode } from './diff';

class GameObject implements IGameObject {
  public parent?: GameObject = undefined;
  public readonly children: GameObject[] = [];

  addChild(child: GameObject) {
    child.parent = this;
    this.children.push(child);
  }

  removeChild(child: GameObject) {
    const idx = this.children.findIndex((item) => child == item);
    this.children.splice(idx, 1);
  }

  removeFromParent() {
    this.parent = undefined;
  }
}

describe('createContainer', () => {
  it('should contains a GameObject', async () => {
    const root = new GameObject();
    const element: VirtualNode = {
      type: GameObject,
      props: {},
      children: [],
    };
    const node = updateNode(root, element, null);
    expectTypeOf(node.instance as IGameObject).toMatchTypeOf<IGameObject>();
  });

  it('should have 2 children', async () => {
    const root = new GameObject();
    const element: VirtualNode = {
      type: GameObject,
      props: {},
      children: [
        {
          type: GameObject,
          props: {},
          children: [],
        },
        {
          type: GameObject,
          props: {},
          children: [],
        },
      ],
    };
    const node = updateNode(root, element, null);
    expect(node.children).toHaveLength(2);
  });
});
