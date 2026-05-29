import { Application, Assets, Sprite } from "pixi.js"
import { BOARD_X, BOARD_Y } from "./consts/board"
import { BOARD_WIDTH, BOARD_HEIGHT } from "./consts/board"

export class Board {
  sprite: Sprite = new Sprite()

  async loadSprite() {
    const texture = await Assets.load(`/board.png`)
    this.sprite = new Sprite(texture)
    this.sprite.width = BOARD_WIDTH
    this.sprite.height = BOARD_HEIGHT
    this.sprite.x = BOARD_X
    this.sprite.y = BOARD_Y
  }

  async attach(app: Application) {
    await this.loadSprite()
    app.stage.addChild(this.sprite)
  }
}