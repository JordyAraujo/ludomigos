import { PlayerColorType } from "../types"

export interface PlayerColorMessage {
    type: 'join_session'
    payload: {
        sessionId: string
        clientId: string
        color: PlayerColorType
    }
}

export const createSessionMessage = {
    type: 'create_session'
}