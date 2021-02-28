/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleListarReceitas } from '../Actions/ReceitaAction'

/* Layout */
import { Row, Col, Table } from 'reactstrap';

class ListagemReceitaView extends Component {

    state = {

    }

    componentDidMount() {
        this.props.onLoad()
    }

    render() {

        const { receitas } = this.props

        return (
            <Col sm={{ size: 12}}>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Link to={'/cadastrar'}>Cadastrar</Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    receitas && receitas.length > 0 ?
                                        receitas.map((receita, key) => {
                                            return <tr key={key}>
                                                <td>{receita.titulo}</td>
                                                <td></td>
                                            </tr>
                                        })
                                        :
                                        <tr>
                                            <td colSpan={2}>Nenhuma receita cadastrada</td>
                                        </tr>
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>);
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