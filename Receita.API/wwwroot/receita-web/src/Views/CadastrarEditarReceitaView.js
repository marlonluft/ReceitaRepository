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
import PassoModel from '../Components/PassoModel'

import { GetEnumDescricao } from '../Util/Funcoes'
import { EUnidadeMedida } from '../Util/Enumerador'

class CadastrarEditarReceitaView extends Component {
    state = {
        modal: {
            exibirIgrediente: false,
            exibirPassos: false
        },
        receita: {
            id: null,
            titulo: "",
            ingredientes: [],
            listaPassoAPasso: []
        }
    }

    componentDidMount() {
        this.props.onLoad()
    }

    alterarModalIgredientes = (exibirIgrediente) => {
        this.setState((state, props) => ({
            modal: {
                ...state.model,
                exibirIgrediente
            }
        }))
    }

    alterarModalPasso = (exibirPassos) => {
        this.setState((state, props) => ({
            modal: {
                ...state.model,
                exibirPassos
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

    onSalvarPasso = (novoPasso) => {

        var listaPassoAPasso = this.state.receita.listaPassoAPasso

        novoPasso.ordem = listaPassoAPasso.length + 1;

        listaPassoAPasso.push(novoPasso)

        this.setState((state, props) => ({
            receita: {
                ...state.receita,
                listaPassoAPasso: listaPassoAPasso
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
                                    <Button outline color="primary" size="sm" onClick={() => this.alterarModalIgredientes(true)}>Novo Ingrediente</Button>
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
                        <FormGroup>
                            <Row>
                                <Col sm={6}>
                                    <Label for="txtPassoAPasso">Passo a passo</Label>
                                </Col>
                                <Col sm={6} className="text-right">
                                    <Button outline color="primary" size="sm" onClick={() => this.alterarModalPasso(true)}>Novo passo</Button>
                                </Col>
                            </Row>

                            <Table id="txtPassoAPasso" size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>Ordem</th>
                                        <th>Descrição</th>
                                        <th>Observação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (receita.listaPassoAPasso.length > 0) ?
                                            receita.listaPassoAPasso.map((passo, key) => (
                                                <tr key={key}>
                                                    <td>{passo.ordem}</td>
                                                    <td>{passo.descricao}</td>
                                                    <td>{passo.observacao}</td>
                                                </tr>
                                            ))
                                            :
                                            <tr className="text-center">
                                                <td colSpan="3">Nenhum passo cadastrado</td>
                                            </tr>
                                    }

                                </tbody>
                            </Table>
                        </FormGroup>
                    </Form>

                    <Link to={'/'}>Voltar</Link>
                </Col>

                <IngredienteModel exibir={modal.exibirIgrediente} onClose={() => this.alterarModalIgredientes(false)} onSalvar={this.onSalvarIngrediente}></IngredienteModel>
                <PassoModel exibir={modal.exibirPassos} onClose={() => this.alterarModalPasso(false)} onSalvar={this.onSalvarPasso}></PassoModel>
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