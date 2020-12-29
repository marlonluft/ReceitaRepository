/* React */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/* Actions */
import { handleConsultarReceita, handleAlterarReceita, handleAdicionarReceita } from '../Actions/ReceitaAction'

/* Layout */
import { Row, Col, Form, FormGroup, Label, Input, Table, Button } from 'reactstrap';

/* Components */
import IngredienteModel from '../Components/IngredienteModel'

import { GetEnumDescricao } from '../Util/Funcoes'
import { EUnidadeMedida } from '../Util/Enumerador'

class CadastrarEditarReceitaView extends Component {
    state = {
        modal: {
            exibir: false,
        },
        receita: {
            id: null,
            titulo: "",
            ingredientes: [],
        }
    }

    componentDidMount() {
        this.props.onLoad()
    }

    alterarModal = (exibir) => {
        this.setState((state, props) => ({
            modal: {
                ...state.model,
                exibir
            }
        }))
    }

    alterarReceita = (prop) => {
        this.setState((state, props) => ({
            receita: {
                ...state.receita,
                ...prop
            }
        }))
    }

    onSalvarIngrediente = (ingrediente) => {

        var ingredientes = this.state.receita.ingredientes
        ingredientes.push(ingrediente)

        this.setState((state, props) => ({
            receita: {
                ...state.receita,
                ingredientes: ingredientes
            }
        }))
    }

    render() {

        const { receita, modal } = this.state

        return (
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Form>
                        <FormGroup>
                            <Label for="txtTitulo">Título</Label>
                            <Input type="text" bsSize="sm" id="txtTitulo" placeholder="Insira o título da receita" value={receita.titulo} onChange={(e) => this.alterarReceita({ titulo: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col sm={6}>
                                    <Label for="txtIngredientes">Ingredientes</Label>
                                </Col>
                                <Col sm={6} className="text-right">
                                    <Button outline color="primary" size="sm" onClick={() => this.alterarModal(true)}>Novo Ingrediente</Button>
                                </Col>
                            </Row>

                            <Table id="txtIngredientes" size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Quantidade</th>
                                        <th>Unidade de medida</th>
                                        <th>Observação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (receita.ingredientes.length > 0) ?
                                            receita.ingredientes.map((ingrediente, key) => (
                                                <tr key={key}>
                                                    <td>{ingrediente.descricao}</td>
                                                    <td>{ingrediente.quantidade ?? 'N/A'}</td>
                                                    <td>{GetEnumDescricao(EUnidadeMedida, ingrediente.unidadeMedida)}</td>
                                                    <td>{ingrediente.observacao}</td>
                                                </tr>
                                            ))
                                            :
                                            <tr className="text-center">
                                                <td colSpan="4">Nenhum ingrediente cadastrado</td>
                                            </tr>
                                    }

                                </tbody>
                            </Table>
                        </FormGroup>
                    </Form>

                    <Link to={'/'}>Voltar</Link>
                </Col>

                <IngredienteModel exibir={modal.exibir} onClose={() => this.alterarModal(false)} onSalvar={this.onSalvarIngrediente}></IngredienteModel>
            </Row>);
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