/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleConsultarReceita } from '../Actions/ReceitaAction'

class VisualizarReceitaView extends Component {

    render() {
        return (
            <div>
                <Link to={'/'}>Voltar</Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: (callBackPostagem) => {
            // Consulta na api a postagem requisitada.
            dispatch(handleConsultarReceita(ownProps.match.params.postId, callBackPostagem))
        }
    }
}

export default connect((state) => ({
    receita: state.receita
}), mapDispatchToProps)
    (VisualizarReceitaView)