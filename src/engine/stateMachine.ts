type State =
    | 'waiting_for_players'
    | 'waiting_for_start'
    | 'room_is_full'
    | 'starting_game'
    | 'waiting_for_dice_roll'
    | 'rolling_dice'
    | 'waiting_for_pawn_selection'
    | 'moving_pawn'
    | 'resolving_move_effects'
    | 'game_over';

type Change =
    | 'PLAYERS_EVEN'
    | 'PLAYERS_ODD'
    | 'PLAYERS_FULL'
    | 'START'
    | 'STARTED'
    | 'ROLL_DICE'
    | 'DICE_ROLLED'
    | 'SELECT_PAWN'
    | 'PAWN_MOVED'
    | 'EFFECTS_RESOLVED'
    | 'GAME_OVER'
    | 'PLAY_AGAIN'
    | 'RESET';

const machine: Record<State, Partial<Record<Change, State>>> = {
    waiting_for_players: {
        PLAYERS_ODD: 'waiting_for_players',
        PLAYERS_EVEN: 'waiting_for_start',
        PLAYERS_FULL: 'room_is_full',
    },
    waiting_for_start: {
        PLAYERS_ODD: 'waiting_for_players',
        START: 'starting_game',
    },
    room_is_full: {
        PLAYERS_ODD: 'waiting_for_players',
        START: 'starting_game',
    },
    starting_game: {
        STARTED: 'waiting_for_dice_roll',
    },
    waiting_for_dice_roll: {
        ROLL_DICE: 'rolling_dice',
    },
    rolling_dice: {
        DICE_ROLLED: 'waiting_for_pawn_selection',
    },
    waiting_for_pawn_selection: {
        SELECT_PAWN: 'moving_pawn',
    },
    moving_pawn: {
        PAWN_MOVED: 'resolving_move_effects',
    },
    resolving_move_effects: {
        EFFECTS_RESOLVED: 'waiting_for_dice_roll',
        GAME_OVER: 'game_over',
    },
    game_over: {
        PLAY_AGAIN: 'waiting_for_start',
        RESET: 'waiting_for_players',
    },
};

export class StateMachine {
    sessionId: string = '';
    state: State = 'waiting_for_players';

    dispatch(change: Change) {
        const next = machine[this.state][change];

        if (!next) {
            throw new Error(
                `Event "${change}" invalid on "${this.state}" state`
            );
        }

        this.state = next;
    }

    setSessionId(sessionId: string) {
        this.sessionId = sessionId;
    }

    debugState() {
        console.log(`Current state: ${this.state}`);
    }
}
