import { reactive } from 'vue'
import { Player } from '../../types'
import { WebSocketService } from '../../websocket'
import { StateMachine } from './stateMachine'

export interface Piece {
  id: string
  playerId: string
  color: string
  position: number
}

export const session = reactive({
  id: ''
})

export interface StoreState {
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