import { BoardHouseType, BoardSpaceType, PlayerColorType } from "../types"
import { GAME_HEIGHT, GAME_WIDTH } from "./game"

export const BOARD_WIDTH: number = 256 * 4
export const BOARD_HEIGHT: number = 256 * 4
export const BOARD_X: number = (GAME_WIDTH - BOARD_WIDTH) / 2
export const BOARD_Y: number = (GAME_HEIGHT - BOARD_HEIGHT) / 2

const HOUSES_COLS = [576, 688, 1176, 1288]
const HOUSE_ROWS = [156, 268, 756, 868]

export const BOARD_HOUSES: Record<PlayerColorType, BoardHouseType> = {
    red: [
        { x: HOUSES_COLS[0], y: HOUSE_ROWS[2] },
        { x: HOUSES_COLS[0], y: HOUSE_ROWS[3] },
        { x: HOUSES_COLS[1], y: HOUSE_ROWS[2] },
        { x: HOUSES_COLS[1], y: HOUSE_ROWS[3] },
    ],
    green: [
        { x: HOUSES_COLS[0], y: HOUSE_ROWS[0] },
        { x: HOUSES_COLS[0], y: HOUSE_ROWS[1] },
        { x: HOUSES_COLS[1], y: HOUSE_ROWS[0] },
        { x: HOUSES_COLS[1], y: HOUSE_ROWS[1] },
    ],
    yellow: [
        { x: HOUSES_COLS[2], y: HOUSE_ROWS[0] },
        { x: HOUSES_COLS[2], y: HOUSE_ROWS[1] },
        { x: HOUSES_COLS[3], y: HOUSE_ROWS[0] },
        { x: HOUSES_COLS[3], y: HOUSE_ROWS[1] },
    ],
    blue: [
        { x: HOUSES_COLS[2], y: HOUSE_ROWS[2] },
        { x: HOUSES_COLS[2], y: HOUSE_ROWS[3] },
        { x: HOUSES_COLS[3], y: HOUSE_ROWS[2] },
        { x: HOUSES_COLS[3], y: HOUSE_ROWS[3] },
    ]
}

const FIRST_SPACE = { x: 512, y: 92 }
const SPACE_DISTANCE = { x: 60, y: 60 }

const SPACES_COLS: number[] = []
const SPACES_ROWS: number[] = []

for (let i = 0; i < 15; i++) {
    SPACES_COLS.push(FIRST_SPACE.x + i * SPACE_DISTANCE.x)
    SPACES_ROWS.push(FIRST_SPACE.y + i * SPACE_DISTANCE.y)
}

const BOARD_SPACES: BoardSpaceType[] = [
    { x: SPACES_COLS[6], y: SPACES_ROWS[13] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[12] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[11] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[10] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[9] },
    { x: SPACES_COLS[5], y: SPACES_ROWS[9] },
    { x: SPACES_COLS[5], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[4], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[3], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[2], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[1], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[0], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[0], y: SPACES_ROWS[7] },
    { x: SPACES_COLS[0], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[1], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[2], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[3], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[4], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[5], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[5], y: SPACES_ROWS[5] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[5] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[4] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[3] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[2] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[1] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[0] },
    { x: SPACES_COLS[7], y: SPACES_ROWS[0] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[0] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[1] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[2] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[3] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[4] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[5] },
    { x: SPACES_COLS[9], y: SPACES_ROWS[5] },
    { x: SPACES_COLS[9], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[10], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[11], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[12], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[13], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[14], y: SPACES_ROWS[6] },
    { x: SPACES_COLS[14], y: SPACES_ROWS[7] },
    { x: SPACES_COLS[14], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[13], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[12], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[11], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[10], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[9], y: SPACES_ROWS[8] },
    { x: SPACES_COLS[9], y: SPACES_ROWS[9] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[9] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[10] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[11] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[12] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[13] },
    { x: SPACES_COLS[8], y: SPACES_ROWS[14] },
    { x: SPACES_COLS[7], y: SPACES_ROWS[14] },
    { x: SPACES_COLS[6], y: SPACES_ROWS[14] },
]

const BOARD_FINAL_SPACES: Record<PlayerColorType, BoardHouseType> = {
    red: [
        { x: SPACES_COLS[7], y: SPACES_ROWS[13] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[12] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[11] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[10] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[9] },
        { x: SPACES_COLS[7], y: 568 },
    ],
    green: [
        { x: SPACES_COLS[1], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[2], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[3], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[4], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[5], y: SPACES_ROWS[7] },
        { x: 876, y: SPACES_ROWS[7] },
    ],
    yellow: [
        { x: SPACES_COLS[7], y: SPACES_ROWS[1] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[2] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[3] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[4] },
        { x: SPACES_COLS[7], y: SPACES_ROWS[5] },
        { x: SPACES_COLS[7], y: 456 },
    ],
    blue: [
        { x: SPACES_COLS[13], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[12], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[11], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[10], y: SPACES_ROWS[7] },
        { x: SPACES_COLS[9], y: SPACES_ROWS[7] },
        { x: 988, y: SPACES_ROWS[7] },
    ]
}

export const BOARD_SPACES_BY_COLOR: Record<PlayerColorType, BoardSpaceType[]> = {
    red: BOARD_SPACES.slice(0, 55).concat(BOARD_FINAL_SPACES.red),
    green: BOARD_SPACES.slice(14, 56).concat(BOARD_SPACES.slice(0, 13)).concat(BOARD_FINAL_SPACES.green),
    yellow: BOARD_SPACES.slice(28, 56).concat(BOARD_SPACES.slice(0, 27)).concat(BOARD_FINAL_SPACES.yellow),
    blue: BOARD_SPACES.slice(42, 56).concat(BOARD_SPACES.slice(0, 41)).concat(BOARD_FINAL_SPACES.blue),
}