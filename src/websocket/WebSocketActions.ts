import { session } from "../game/state/GameStore"
import { Player } from "../types"
import { createSessionMessage } from "./MessageTypes"
import { WebSocketService } from "./WebSocketService"

export function createSession(service: WebSocketService) {
    if (session.id !== '') return
    service.send(createSessionMessage)
}

export function sendNewPlayerColor(newPlayer: Player, service: WebSocketService) {
    service.send({
        type: 'player_color',
        payload: {
            sessionId: session.id,
            clientId: newPlayer.clientId,
            color: newPlayer.color
        }
    })
}