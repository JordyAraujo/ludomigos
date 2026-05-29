import {
    Application,
    Assets,
    Sprite
} from 'pixi.js'
import { BoardSpaceType } from './types/board'
import { PIECE_HEIGHT, PIECE_WIDTH } from './consts/piece'

export class Piece {
    position: number = 0
    color: string
    sprite: Sprite = new Sprite()
    space: BoardSpaceType

    constructor(color: string, space: BoardSpaceType) {
        this.color = color
        this.space = space
    }

    async loadTexture() {
        const texture = await Assets.load(`/${this.color}.png`)
        this.sprite = new Sprite(texture)
        this.sprite.width = PIECE_WIDTH
        this.sprite.height = PIECE_HEIGHT
        this.sprite.x = this.space.x
        this.sprite.y = this.space.y
    }

    move(amount: number) {
        this.position += amount
    }

    async attach(app: Application) {
        await this.loadTexture()
        app.stage.addChild(this.sprite)
    }
}