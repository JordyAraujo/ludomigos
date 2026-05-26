import {
    Assets,
    Sprite
} from 'pixi.js'

export class Piece {
    width: number = 55
    height: number = 55
    position: number = 0
    color: string
    sprite: Sprite = new Sprite()

    constructor(color: string) {
        this.color = color;
    }

    async loadTexture() {
        const texture = await Assets.load(`/${this.color}.png`)
        this.sprite = new Sprite(texture)
        this.sprite.width = this.width
        this.sprite.height = this.height
    }
    
    move(amount: number) {
        this.position += amount
    }
}