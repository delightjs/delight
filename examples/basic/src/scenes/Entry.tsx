// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement } from '@delightjs/stage'

import * as PIXI from 'pixi.js'

class Scene extends PIXI.Container {}

type SpriteProps = {
  texture?: PIXI.Texture
  x?: number
  y?: number
}

class Sprite extends PIXI.Sprite {
  constructor(attrs: SpriteProps) {
    super(attrs.texture || PIXI.Texture.WHITE)
    this.x = attrs.x || 0
    this.y = attrs.y || 0
  }
}

export const Entry = async () => {
  const texture = await PIXI.Texture.fromURL('https://picsum.photos/200')

  return (
    <Scene>
      <Sprite texture={texture} x={100} y={100} />
    </Scene>
  )
}
