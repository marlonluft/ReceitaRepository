import API from '../Util/API'

export const ADICIONAR = 'ADICIONAR_RECEITA'
export const ALTERAR = 'ALTERAR_RECEITA'
export const CONSULTAR = 'CONSULTAR_RECEITA'
export const LISTAR = 'LISTAR_RECEITA'
export const REMOVER = 'REMOVER_RECEITA'

function listarReceita(receitas) {
    return {
        type: LISTAR,
        receitas,
    }
}

function consultarReceita(receita) {
    return {
        type: CONSULTAR,
        receita,
    }
}

function adicionarReceita(receita) {
    return {
        type: ADICIONAR,
        receita,
    }
}

function alterarReceita(receita) {
    return {
        type: ALTERAR,
        receita,
    }
}

function removerReceita(id) {
    return {
        type: REMOVER,
        id,
    }
}

export function handleAdicionarReceita(objeto, callBack) {

    return (dispatch) => {

        return API.post('https://localhost:44342/receita', objeto)
            .then(() => {
                dispatch(adicionarReceita(objeto))
                callBack()
            })
            .catch((e) => alert('Ocorreu um erro ao adicionar a receita. Tente novamente.'))
    }
}

export function handleAlterarReceita(objeto, callBack) {

    return (dispatch) => {

        return API.put('https://localhost:44342/receita', objeto)
            .then(() => {
                dispatch(alterarReceita(objeto))
                callBack()
            })
            .catch((e) => alert('Ocorreu um erro ao alterar a receita. Tente novamente.'))
    }
}

export function handleRemoverReceita(objeto, callBack) {

    return (dispatch) => {

        return API.delete('https://localhost:44342/receita', objeto.id)
            .then(() => {
                dispatch(removerReceita(objeto.id))
                callBack();
            })
            .catch((e) => {
                alert('ocorreu um erro ao deletar a receita. Tente novamente.')
            })
    }
}

export function handleConsultarReceita(id) {

    return (dispatch) => {

        return API.get('https://localhost:44342/receita')
            .then((receita) => {
                dispatch(consultarReceita(receita))
            })
            .catch((e) => {
                alert('Ocorreu um erro ao consultar a receita. Tente novamente.')
            })
    }
}

export function handleListarReceitas() {

    return (dispatch) => {

        return API.get('https://localhost:44342/receita')
            .then((listaReceitas) => {
                dispatch(listarReceita(listaReceitas))
            })
            .catch((e) => {
                alert('Ocorreu um erro ao consultar as receitas. Tente novamente.')
            })
    }
}