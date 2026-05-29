import { BoardSpaceType, BoardHouseType } from "../types/board"
import { PlayerColorType } from "../types/player"

export const BOARD_WIDTH: number = 1000
export const BOARD_HEIGHT: number = 1000
export const BOARD_X: number = 460
export const BOARD_Y: number = 40

export const BOARD_HOUSES: Record<PlayerColorType, BoardHouseType> = {
    red: [
        { x: 585, y: 751 },
        { x: 585, y: 860 },
        { x: 694, y: 751 },
        { x: 694, y: 860 },
    ],
    green: [
        { x: 585, y: 165 },
        { x: 585, y: 274 },
        { x: 694, y: 165 },
        { x: 694, y: 274 },
    ],
    yellow: [
        { x: 1171, y: 165 },
        { x: 1171, y: 274 },
        { x: 1280, y: 165 },
        { x: 1280, y: 274 },
    ],
    blue: [
        { x: 1171, y: 751 },
        { x: 1171, y: 860 },
        { x: 1280, y: 751 },
        { x: 1280, y: 860 },
    ]
}

export const BOARD_SPACES: BoardSpaceType[] = [
    { x: 480, y: 780 },
    { x: 480, y: 720 },
    { x: 480, y: 660 },
    { x: 480, y: 600 },
]