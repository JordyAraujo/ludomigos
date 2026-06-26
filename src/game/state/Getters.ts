import { session, store } from "./GameStore";

export function sessionId() {
    return session.id;
}

export function websocketService() {
    return store.websocketService;
}

export function joinUrl() {
    return store.joinUrl;
}

export function dataUrl() {
    return store.dataUrl;
}

export function stateMachine() {
    return store.stateMachine;
}

export function diceValue() {
    return store.diceValue;
}

export function players() {
    return store.players;
}

export function statusMessage() {
    return store.statusMessage;
}

export function currentTurnPlayer() {
    return store.currentTurnPlayer;
}

export function gameStarted() {
    return store.gameStarted;
}

export function pieces() {
    return store.pieces;
}

export function turnTimeLeft() {
    return store.turnTimeLeft;
}