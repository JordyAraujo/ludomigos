const app = document.getElementById('app')!

const connectingText = document.createElement('h1')

connectingText.innerText = 'connecting...'
app.appendChild(connectingText)

let x = 0

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
        connectingText.innerText =
            `SESSION: ${message.payload.sessionId}`
    } else if (message.type === 'input') {
        const button = message.payload.button;
        if (button === 'roll_dice') {
            const diceResult = Math.floor(Math.random() * 6) + 1
            const diceResultText = document.createElement('h2')

            diceResultText.innerText = `Você rolou o dado e deu ${diceResult}!`
            app.appendChild(diceResultText)
        }
    }
}