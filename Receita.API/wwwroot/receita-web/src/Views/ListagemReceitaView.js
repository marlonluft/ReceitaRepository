/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleListarReceitas } from '../Actions/ReceitaAction'

class ListagemReceitaView extends Component {

    state = {

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
            dispatch(handleListarReceitas())
        }
    }
}

export default connect((state) => ({
    receitas: state.receitas,
}), mapDispatchToProps)
    (ListagemReceitaView)