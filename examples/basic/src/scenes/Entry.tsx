// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, Scene, Sprite } from '@delightjs/pixi';

import { Texture } from 'pixi.js';

type SpriteProps = { x?: number; y?: number; seed: string };
const SpriteWithImage = (props: SpriteProps) => {
  const texture = Texture.fromURL(
    `https://picsum.photos/seed/${props.seed}/200`
  );

  return <Sprite texture={texture} x={props.x} y={props.y} />;
};

const Container = ({ children }) => <Scene>{children}</Scene>;

export const Entry = () => {
  const x = Math.ceil(Math.sin(Date.now() / 1000) * 100);

  return (
    <Scene>
      <Container>
        <SpriteWithImage x={100 + x} y={100} seed="lower" />
        <SpriteWithImage x={200} y={200} seed="higher" />
      </Container>
    </Scene>
  );
};
