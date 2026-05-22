import {
    Application,
    Assets,
    Sprite,
    TextureStyle
} from 'pixi.js'

TextureStyle.defaultOptions.scaleMode = 'nearest'

const app = new Application()

await app.init({
    width: 1920,
    height: 1080,
    background: '#1a1a1a',
})

document.body.appendChild(app.canvas)

const boardTexture = await Assets.load('/board.png')
const board = new Sprite(boardTexture)

board.x = 460
board.y = 40

board.width = 1000
board.height = 1000

app.stage.addChild(board)

const redTexture = await Assets.load('/red.png')
const red = new Sprite(redTexture)

red.x = 585
red.y = 860

red.width = 55
red.height = 55

app.stage.addChild(red)

const ws = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL)

ws.onopen = () => {
    console.log('tv connected')

    ws.send(
        JSON.stringify({
            type: 'create_session'
        })
    )
}

ws.onmessage = (event) => {
    const message = JSON.parse(event.data)

    if (message.type === 'session_created') {
        console.log(`SESSION: ${message.payload.sessionId}`)
    } else if (message.type === 'input') {
        const button = message.payload.button;
        if (button === 'roll_dice') {
            const diceResult = Math.floor(Math.random() * 6) + 1
            console.log(`Você rolou o dado e deu ${diceResult}!`)
        }
    }
}