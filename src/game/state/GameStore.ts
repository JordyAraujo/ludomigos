import { reactive } from 'vue'
import { Player, Piece } from '../../types'
import { WebSocketService } from '../../websocket'
import { StateMachine } from './StateMachine'

interface SessionState {
  id: string
}

export const session = reactive<SessionState>({
  id: ''
})

interface StoreState {
  websocketService?: WebSocketService,
  joinUrl: string,
  dataUrl: string,
  stateMachine: StateMachine,
  diceValue: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  players: Player[],
  statusMessage: string,
  currentTurnPlayer?: Player,
  gameStarted: boolean,
  pieces: Piece[],
  turnTimeLeft: number
}

export const store = reactive<StoreState>({
  stateMachine: new StateMachine(),
  joinUrl: '',
  dataUrl: '',
  diceValue: 0,
  players: [],
  statusMessage: '',
  gameStarted: false,
  pieces: [],
  turnTimeLeft: 30
})