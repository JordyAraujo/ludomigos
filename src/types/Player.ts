import { PLAYER_COLORS } from "../game/consts"
import { Piece } from "./Piece"

export class Player {
    clientId: string
    playerName: string
    color: PlayerColorType
    pieces: [Piece, Piece, Piece, Piece]

    constructor(clientId: string, playerName: string, playerCount: PlayerCountType) {
        this.clientId = clientId
        this.playerName = playerName
        this.color = PLAYER_COLORS[playerCount]
        this.pieces = [
            new Piece(this.color, -1, 1),
            new Piece(this.color, -2, 2),
            new Piece(this.color, -3, 3),
            new Piece(this.color, -4, 4)
        ]
        console.log(`Jogador criado: ${this.playerName} (ID: ${this.clientId}) - Cor: ${this.color})`)
    }

    debugPlayer() {
        console.log(`Jogador na sessão CLIENTE: ${this.playerName} (ID: ${this.clientId}) - (Cor: ${this.color})`)
    }
}

export type PlayerColorType = 'red' | 'green' | 'yellow' | 'blue'
export type PlayerCountType = 0 | 1 | 2 | 3

export function toPlayerCountType(value: number): PlayerCountType {
    if (value < 0 || value > 3) {
        throw new Error('Invalid player count')
    }

    return value as PlayerCountType
}