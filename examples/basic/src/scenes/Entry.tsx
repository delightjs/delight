// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, Scene, Sprite } from '@delightjs/stage';

import { Texture } from 'pixi.js';

type SpriteProps = { x?: number; y?: number; seed: string };
const SpriteWithImage = (props: SpriteProps) => {
  const texture = Texture.fromURL(
    `https://picsum.photos/seed/${props.seed}/200`
  );

  return <Sprite texture={texture} x={props.x} y={props.y} />;
};

export const Entry = () => {
  return (
    <Scene>
      <SpriteWithImage x={100} y={100} seed="lower" />
      <SpriteWithImage x={200} y={200} seed="higher" />
    </Scene>
  );
};
