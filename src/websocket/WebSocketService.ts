import { store, session } from '../game/state/GameStore'
import { Player, toPlayerCountType } from '../types'
import { createSession, sendNewPlayerColor } from './WebSocketActions'
import { StateMachine } from '../game/state/stateMachine'

export class WebSocketService {
    private socket?: WebSocket

    connect() {
        if (this.socket?.readyState === WebSocket.OPEN) return

        const url =
            import.meta.env.VITE_WEBSOCKET_URL ??
            'ws://localhost:3001'

        this.socket = new WebSocket(url)

        this.socket.onopen = () => {
            createSession(this)
            console.log('websocket connected')
        }

        this.socket.onclose = () => {
            console.log('websocket disconnected')
        }

        this.socket.onmessage = event => {
            this.handleMessage(JSON.parse(event.data))
        }
    }

    send(
        message: unknown
    ) {
        if (!this.socket || (this.socket.readyState !== WebSocket.OPEN)) return

        this.socket.send(
            JSON.stringify(message)
        )
    }

    handleMessage(
        message: any
    ) {
        console.log('message received:', message)
        switch (message.type) {
            case 'session_created':
                session.id = message.payload.sessionId;
                store.stateMachine = new StateMachine();
                store.stateMachine.debugState()
                break;
            case 'player_joined':
                const newPlayer = new Player(message.payload.clientId, message.payload.playerName, toPlayerCountType(store.players.length))
                store.players.push(newPlayer);
                sendNewPlayerColor(newPlayer, this);

                if (store.players.length < 4) {
                    store.stateMachine.dispatch(store.players.length % 2 === 0 ? 'PLAYERS_EVEN' : 'PLAYERS_ODD')
                } else {
                    store.stateMachine.dispatch('PLAYERS_FULL')
                }

                store.players.forEach((player: Player) => {
                    player.debugPlayer()
                })

                console.log(`Jogadores na sessão: ${store.players.length}`)
                store.stateMachine.debugState()
                break;
            case 'roll_dice':
                const button = message.payload.button;
                if (button === 'roll_dice') {
                    const diceResult = Math.floor(Math.random() * 6) + 1
                    console.log(`Você rolou o dado e deu ${diceResult}!`)
                }
                break;
        }
    }
}