/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleConsultarReceita } from '../Actions/ReceitaAction'

/* Layout */
import { Row, Col, List, Badge } from 'reactstrap';

import { EUnidadeMedida } from '../Util/Enumerador'
import { GetEnumDescricao } from '../Util/Funcoes'

class VisualizarReceitaView extends Component {

    state = {
        receita: null
    }

    componentDidMount() {
        var receitaRedirect = this.props.location.state?.receita

        if (receitaRedirect) {
            this.setState({
                receita: receitaRedirect
            })
        }
        else {
            var id = this.props.match.params.id
            this.props.getReceita(id)
        }
    }

    componentDidUpdate(propAnterior) {
        if (this.props.receita && (!propAnterior.receita || propAnterior.receita.id !== this.props.receita.id)) {
            this.setState({
                receita: this.props.receita
            })
        }
    }

    render() {

        var { receita } = this.state

        return (
            receita ?
                <Col sm={{ size: 12 }}>
                    <Row>
                        <h3>Título:</h3> {receita.titulo}
                    </Row>
                    <Col sm={{ size: 6 }}>
                        <h3>Igredientes:</h3>
                        <List>
                            {
                                receita.listaIgredientes ? receita.listaIgredientes.map((igrediente, key) => {
                                    return <li key={key}>
                                        {igrediente.quantidade} {GetEnumDescricao(EUnidadeMedida, igrediente.unidadeMedida)} - {igrediente.descricao}
                                        {
                                            igrediente.observacao ?
                                                <ul>
                                                    <li>{igrediente.observacao}</li>
                                                </ul> : ""
                                        }
                                    </li>
                                })
                                    :
                                    <li>Nenhum igrediente necessário</li>
                            }
                        </List>
                    </Col>
                    <Col sm={{ size: 6 }}>
                        <h3>Passos:</h3>
                        <List>
                            {
                                receita.listaPassoAPasso ? receita.listaPassoAPasso.map((passo, key) => {
                                    return <li key={key}>
                                        {passo.descricao}
                                        {
                                            passo.observacao ?
                                                <ul>
                                                    <li>{passo.observacao}</li>
                                                </ul> : ""
                                        }
                                    </li>
                                })
                                    :
                                    <li>Nenhum passo necessário</li>
                            }
                        </List>

                    </Col>
                    <Row>
                        <h3>Tags:</h3>
                        <div>
                            {
                                receita.tags.map((tag, key) => <Badge color="secondary" key={key}>{tag}</Badge>)
                            }
                        </div>
                    </Row>
                    <Link to={'/'}>Voltar</Link>
                </Col>
                :
                <Col sm={{ size: 12 }}>
                    Carregando...
                </Col>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getReceita: (idReceita) => {
            dispatch(handleConsultarReceita(idReceita))
        }
    }
}

export default connect((state) => ({
    receita: state.receita
}), mapDispatchToProps)
    (VisualizarReceitaView)