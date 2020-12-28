import {
    ADICIONAR,
    ALTERAR,
    CONSULTAR,
    LISTAR,
    REMOVER,
} from '../Actions/ReceitaAction'

export function ReceitaReducer(state = {}, action) {
    switch (action.type) {
        case CONSULTAR:
            return action.receita
        default:
            return state
    }
}

export function ListaReceitasReducer(state = [], action) {
    switch (action.type) {
        case ADICIONAR:
            return state.concat([action.receita])
        case REMOVER:
            return state.filter((receita) => receita.id !== action.id)
        case LISTAR:
            return action.receitas
        case ALTERAR:
            return state.map((alterarReceita) => {
                if (alterarReceita.id === action.receita.id) {
                    alterarReceita = action.receita;
                }

                return alterarReceita;
            })
        default:
            return state
    }
}