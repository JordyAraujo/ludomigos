import {
    Application,
    TextureStyle
} from 'pixi.js'
import { Board } from './engine/board'
import { StateMachine } from './engine/stateMachine'

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
const players = [];

ws.onmessage = (event) => {
    const message = JSON.parse(event.data)

    if (message.type === 'session_created' && message.payload.sessionId) {
        console.log(`Sessão criada com ID: ${message.payload.sessionId}`)
        stateMachine.debugState()
    } else if (message.type === 'joined_session' && message.payload.sessionId && message.payload.clientId) {
        players.push(message.payload.clientId)
        if (players.length < 4) {
            stateMachine.dispatch(players.length % 2 === 0 ? 'PLAYERS_EVEN' : 'PLAYERS_ODD')
        } else {
            stateMachine.dispatch('PLAYERS_FULL')
        }
        console.log(`Sessão juntada com ID: ${message.payload.sessionId}`)
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