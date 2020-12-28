import { combineReducers } from 'redux'

import { ReceitaReducer, ListaReceitasReducer } from './ReceitaReducer'

export default combineReducers({
    receitas: ListaReceitasReducer,
    receita: ReceitaReducer,
})