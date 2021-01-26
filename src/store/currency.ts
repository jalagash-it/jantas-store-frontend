import { MutationTree } from 'vuex'
import { ICurrency } from '~/interfaces/currency'

export interface CurrencyState {
    current: ICurrency;
}

function getDefaultState (): CurrencyState {
    return {
        current: {
            code: 'KZ',
            symbol: 'тг',
            name: 'Теңге'
        }
    }
}

export const state = getDefaultState

export const mutations: MutationTree<CurrencyState> = {
    set (state, currency) {
        state.current = currency
    }
}
