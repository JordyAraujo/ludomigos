import {
    Application,
    TextureStyle
} from 'pixi.js'
import { Board } from './engine/board'
import { StateMachine } from './engine/stateMachine'
import { Player } from './engine/player'
import { toPlayerCountType } from './engine/types/player'

TextureStyle.defaultOptions.scaleMode = 'nearest'

const app = new Application()

await app.init({
    width: 1920,
    height: 1080,
    background: '#ffe7c5',
})

document.body.appendChild(app.canvas)

const board = new Board()
await board.attach(app)

const ws = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL)

ws.onopen = () => {
    ws.send(
        JSON.stringify({
            type: 'create_session'
        })
    )
}

const stateMachine = new StateMachine()
const players: Player[] = [];

ws.onmessage = async (event) => {
    const message = JSON.parse(event.data)
    console.log('Mensagem recebida do servidor:', message)

    if (message.type === 'session_created' && message.payload.sessionId) {
        console.log(`Sessão criada com ID: ${message.payload.sessionId}`)
        stateMachine.setSessionId(message.payload.sessionId)
        stateMachine.debugState()
    } else if (message.type === 'player_joined' && message.payload.clientId && message.payload.playerName) {
        const newPlayer = new Player(message.payload.clientId, message.payload.playerName, toPlayerCountType(players.length), app)
        players.push(newPlayer)

        ws.send(
            JSON.stringify({
                type: 'player_color',
                payload: {
                    sessionId: stateMachine.sessionId,
                    clientId: newPlayer.clientId,
                    color: newPlayer.color
                }
            })
        )

        if (players.length < 4) {
            stateMachine.dispatch(players.length % 2 === 0 ? 'PLAYERS_EVEN' : 'PLAYERS_ODD')
        } else {
            stateMachine.dispatch('PLAYERS_FULL')
        }

        players.forEach(async (player: Player) => {
            player.debugPlayer()
            await player.loadPieces()
        })

        console.log(`Jogadores na sessão: ${players.length}`)
        stateMachine.debugState()
    } else if (message.type === 'input') {
        const button = message.payload.button;
        if (button === 'roll_dice') {
            const diceResult = Math.floor(Math.random() * 6) + 1
            console.log(`Você rolou o dado e deu ${diceResult}!`)
        }
    }
}