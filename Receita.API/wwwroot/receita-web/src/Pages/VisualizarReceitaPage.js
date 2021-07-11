/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleConsultarReceita } from '../Actions/ReceitaAction'

/* Layout */
import { Col, List, Badge, Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

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

            <Container>
                {
                    receita ?

                        <React.Fragment>
                            <h1>{receita.titulo}</h1>

                            <Col sm={{ size: 12 }}>

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Igredientes</CardTitle>
                                        <CardText>
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
                                        </CardText>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Passos</CardTitle>
                                        <CardText>
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
                                        </CardText>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Tags</CardTitle>
                                        <CardText>
                                            {
                                                receita.tags.map((tag, key) => <Badge color="secondary" key={key}>{tag}</Badge>)
                                            }
                                        </CardText>
                                    </CardBody>
                                </Card>

                                <Link to={'/'}>
                                    <Button outline color="secondary" size="sm">Voltar</Button>
                                </Link>
                            </Col>
                        </React.Fragment>
                        :
                        <Col sm={{ size: 12 }}>
                            Carregando...
                        </Col>
                }
            </Container>
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