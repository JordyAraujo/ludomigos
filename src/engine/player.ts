import { Application } from "pixi.js"
import { BOARD_HOUSES } from "./consts/board"
import { PLAYER_COLORS } from "./consts/player"
import { Piece } from "./piece"
import { PlayerColorType, PlayerCountType } from "./types/player"

export class Player {
  clientId: string
  color: PlayerColorType
  pieces: [Piece, Piece, Piece, Piece]
  app: Application

    constructor(clientId: string, playerCount: PlayerCountType, app: Application) {
        this.clientId = clientId
        this.color = PLAYER_COLORS[playerCount]
        this.pieces = [
            new Piece(this.color, BOARD_HOUSES[this.color][0]),
            new Piece(this.color, BOARD_HOUSES[this.color][1]),
            new Piece(this.color, BOARD_HOUSES[this.color][2]),
            new Piece(this.color, BOARD_HOUSES[this.color][3])
        ]
        this.app = app
    }

    async loadPieces() {
        for (const piece of this.pieces) {
            await piece.attach(this.app)
        }
    }
}