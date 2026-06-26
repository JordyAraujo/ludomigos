import { BoardSpaceType } from './Board'
import { PIECE_HEIGHT, PIECE_WIDTH, BOARD_HOUSES, BOARD_SPACES_BY_COLOR } from '../game/consts'
import { PlayerColorType } from './Player'

export class Piece {
    id: string
    position: number = 0
    color: PlayerColorType
    space: BoardSpaceType

    constructor(color: PlayerColorType, position: number, count: number) {
        this.id = `${color}-${count}`
        this.color = color
        this.position = position
        this.space = this.getSpace(position)
    }

    setSpace(position: number) {
        this.space = this.getSpace(position)
        // this.sprite.position.set(
        //     this.space.x,
        //     this.space.y
        // )
    }

    getSpace(position: number) {
        if (position < 0) {
            const houseIndex = position + 4
            return BOARD_HOUSES[this.color][houseIndex]
        } else {
            return BOARD_SPACES_BY_COLOR[this.color][position]
        }
    }

    move(amount: number) {
        this.position += amount
    }

    debugPiece(piece: Piece) {
        console.log(`Peça de ID ${piece.id}, de cor ${piece.color}, posicionada em (x: ${piece.space.x}, y: ${piece.space.y}), tamanho (largura: ${PIECE_WIDTH}, altura: ${PIECE_HEIGHT})`)
    }
}

export interface PieceState {
    id: string
    playerId: string
    color: PlayerColorType
    position: number
}