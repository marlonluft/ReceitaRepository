/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleConsultarReceita, handleAlterarReceita, handleAdicionarReceita } from '../Actions/ReceitaAction'

class CadastrarEditarReceitaView extends Component {
    state = {
        id: null,
    }

    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
            <div>
                <Link to={'/'}>Voltar</Link>
            </div>);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: () => {
            // Caso o id esteja definido, então é a alterção de uma postagem e consulta a mesma na api
            if (typeof ownProps.match.params.id !== 'undefined') {
                dispatch(handleConsultarReceita(ownProps.match.params.id))
            }
        },
        addPostagem: (objeto, callBack) => {
            dispatch(handleAdicionarReceita(objeto, callBack))
        },
        atualizarPostagem: (objeto, callBack) => {
            dispatch(handleAlterarReceita(objeto, callBack))
        }
    }
}

export default connect((state) => ({
    receita: state.receita,
}), mapDispatchToProps)
    (CadastrarEditarReceitaView)