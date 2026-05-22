const square = document.createElement('div')

square.style.width = '100px'
square.style.height = '100px'
square.style.background = 'red'
square.style.position = 'absolute'
square.style.left = '0px'
square.style.top = '0px'

const app = document.getElementById('app');

app.appendChild(square)

const diceResultText = document.createElement('h1')

diceResultText.innerText = 'connecting...'
app.appendChild(diceResultText)

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
    console.log(message)

    if (message.type === 'session_created') {
        diceResultText.innerText =
            `SESSION: ${message.payload.sessionId}`
    } else if (message.type === 'input') {
        const button = message.payload.button;
        if (button === 'right') {
            x += 20
            square.style.left = `${x}px`
        } else if (button === 'left') {
            x -= 20
            square.style.left = `${x}px`
        } else if (button === 'up') {
            const currentTop = parseInt(square.style.top)
            square.style.top = `${currentTop - 20}px`
        } else if (button === 'down') {
            const currentTop = parseInt(square.style.top)
            square.style.top = `${currentTop + 20}px`
        } else if (button === 'roll_dice') {
            const diceResult = Math.floor(Math.random() * 6) + 1
            const diceResultText = document.createElement('h2')

            diceResultText.innerText = `Você rolou o dado e deu ${diceResult}!`
            app.appendChild(diceResultText)
        }
    }
}