import { Application } from "pixi.js"
import { BOARD_HOUSES } from "./consts/board"
import { PLAYER_COLORS } from "./consts/player"
import { Piece } from "./piece"
import { PlayerColorType, PlayerCountType } from "./types/player"

export class Player {
    clientId: string
    playerName: string
    color: PlayerColorType
    pieces: [Piece, Piece, Piece, Piece]
    app: Application

    constructor(clientId: string, playerName: string, playerCount: PlayerCountType, app: Application) {
        this.clientId = clientId
        this.playerName = playerName
        this.color = PLAYER_COLORS[playerCount]
        this.pieces = [
            new Piece(this.color, BOARD_HOUSES[this.color][0]),
            new Piece(this.color, BOARD_HOUSES[this.color][1]),
            new Piece(this.color, BOARD_HOUSES[this.color][2]),
            new Piece(this.color, BOARD_HOUSES[this.color][3])
        ]
        this.app = app
        console.log(`Jogador criado: ${this.playerName} (ID: ${this.clientId}) - Cor: ${this.color})`)
    }

    debugPlayer() {
        console.log(`Jogador na sessão CLIENTE: ${this.playerName} (ID: ${this.clientId}) - (Cor: ${this.color})`)
    }

    async loadPieces() {
        for (const piece of this.pieces) {
            await piece.attach(this.app)
        }
    }
}