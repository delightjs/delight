// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, Scene, Sprite } from '@delightjs/stage'

import * as PIXI from 'pixi.js'

export const Entry = async () => {
  const texture = await PIXI.Texture.fromURL('https://picsum.photos/200')

  return (
    <Scene>
      <Sprite texture={texture} x={100} y={100} />
    </Scene>
  )
}
