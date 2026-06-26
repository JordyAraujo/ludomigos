import { Piece, Player } from "../../types"
import { WebSocketService } from "../../websocket"
import { session, store } from "./GameStore"
import { StateMachine } from "./StateMachine"

export function setSessionId(id: string) {
    session.id = id
}

export function setWebsocketService(websocketService: WebSocketService) {
    store.websocketService = websocketService
}

export function setJoinUrl(joinUrl: string) {
    store.joinUrl = joinUrl
}

export function setDataUrl(dataUrl: string) {
    store.dataUrl = dataUrl
}

export function setStateMachine(stateMachine: StateMachine) {
    store.stateMachine = stateMachine
}

export function setDiceValue(diceValue: 0 | 1 | 2 | 3 | 4 | 5 | 6) {
    store.diceValue = diceValue
}

export function setPlayers(players: Player[]) {
    store.players = players
}

export function setStatusMessage(statusMessage: string) {
    store.statusMessage = statusMessage
}

export function setCurrentTurnPlayer(currentTurnPlayer: Player) {
    store.currentTurnPlayer = currentTurnPlayer
}

export function setGameStarted(gameStarted: boolean) {
    store.gameStarted = gameStarted
}

export function setPieces(pieces: Piece[]) {
    store.pieces = pieces
}

export function setTurnTimeLeft(turnTimeLeft: number) {
    store.turnTimeLeft = turnTimeLeft
}