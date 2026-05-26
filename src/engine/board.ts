import { Application, Assets, Sprite } from "pixi.js"
import { Piece } from "./piece"
import { BoardSpace, Color, House } from "./types/board"

export class Board {
  width: number = 1000
  height: number = 1000
  x: number = 460
  y: number = 40
  sprite: Sprite = new Sprite()
  houses: Record<Color, House> = {
    green: [
      { x: 480, y: 780 },
      { x: 480, y: 720 },
      { x: 480, y: 660 },
      { x: 480, y: 600 },
    ],
    red: [
      { x: 585, y: 860 },
      { x: 480, y: 720 },
      { x: 480, y: 660 },
      { x: 480, y: 600 },
    ],
    yellow: [
      { x: 480, y: 780 },
      { x: 480, y: 720 },
      { x: 480, y: 660 },
      { x: 480, y: 600 },
    ],
    blue: [
      { x: 480, y: 780 },
      { x: 480, y: 720 },
      { x: 480, y: 660 },
      { x: 480, y: 600 },
    ]
  }
  spaces: BoardSpace[] = [
    { x: 480, y: 780 },
    { x: 480, y: 720 },
    { x: 480, y: 660 },
    { x: 480, y: 600 },
  ]

  async loadSprite() {
    const texture = await Assets.load(`/board.png`)
    this.sprite = new Sprite(texture)
    this.sprite.width = this.width
    this.sprite.height = this.height
    this.sprite.x = this.x
    this.sprite.y = this.y
  }

  async attach(app: Application) {
    await this.loadSprite()
    app.stage.addChild(this.sprite)
  }
}