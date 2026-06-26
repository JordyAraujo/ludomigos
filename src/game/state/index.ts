import { session } from './GameStore'
import * as getters from './Getters'
import * as setters from './Setters'

export const store = {
    session,
    ...getters,
    ...setters
}