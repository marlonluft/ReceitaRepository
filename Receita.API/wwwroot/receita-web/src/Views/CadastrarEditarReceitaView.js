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
import TagModel from '../Components/TagModel'

import { GetEnumDescricao } from '../Util/Funcoes'
import { EUnidadeMedida } from '../Util/Enumerador'

class CadastrarEditarReceitaView extends Component {
    state = {
        modal: {
            exibirIgrediente: false,
            exibirPassos: false,
            exibirTags: false
        },
        receita: {
            id: null,
            titulo: "",
            listaIgredientes: [],
            listaPassoAPasso: [],
            tags: []
        }
    }

    componentDidMount() {
        this.props.onLoad()
    }

    alterarModal = (modal) => {
        this.setState((state, props) => ({
            modal: {
                ...state.model,
                ...modal
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

        var ingredientes = this.state.receita.listaIgredientes
        ingredientes.push(ingrediente)

        this.setState((state, props) => ({
            receita: {
                ...state.receita,
                listaIgredientes: ingredientes
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

    onSalvarTag = (tag) => {
        var listaTags = this.state.receita.tags
        listaTags.push(tag)

        this.setState((state, props) => ({
            receita: {
                ...state.receita,
                tags: listaTags
            }
        }))
    }

    onGravar = () => {
        if (this.state.receita.id) {
            this.props.atualizarReceita(this.state.receita, () => this.props.history.push('/'))
        }
        else {
            this.props.addReceita(this.state.receita, () => this.props.history.push('/'))
        }
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
                                    <Button outline color="primary" size="sm" onClick={() => this.alterarModal({ exibirIgrediente: true })}>Novo Ingrediente</Button>
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
                                        (receita.listaIgredientes.length > 0) ?
                                            receita.listaIgredientes.map((ingrediente, key) => (
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
                                    <Button outline color="primary" size="sm" onClick={() => this.alterarModal({ exibirPassos: true })}>Novo passo</Button>
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
                        <FormGroup>
                            <Row>
                                <Col sm={6}>
                                    <Label for="txtTags">Tags</Label>
                                </Col>
                                <Col sm={6} className="text-right">
                                    <Button outline color="primary" size="sm" onClick={() => this.alterarModal({ exibirTags: true })}>Nova tag</Button>
                                </Col>
                            </Row>

                            <Table id="txtTags" size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>Tag</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (receita.tags.length > 0) ?
                                            receita.tags.map((tag, key) => (
                                                <tr key={key}>
                                                    <td>{tag}</td>
                                                </tr>
                                            ))
                                            :
                                            <tr className="text-center">
                                                <td>Nenhuma tag cadastrada</td>
                                            </tr>
                                    }

                                </tbody>
                            </Table>
                        </FormGroup>
                    </Form>

                    <Link to={'/'}>Voltar</Link>
                    <Button outline color="primary" size="sm" onClick={this.onGravar}>Gravar</Button>
                </Col>

                <IngredienteModel exibir={modal.exibirIgrediente} onClose={() => this.alterarModal({ exibirIgrediente: false })} onSalvar={this.onSalvarIngrediente}></IngredienteModel>
                <PassoModel exibir={modal.exibirPassos} onClose={() => this.alterarModal({ exibirPassos: false })} onSalvar={this.onSalvarPasso}></PassoModel>
                <TagModel exibir={modal.exibirTags} onClose={() => this.alterarModal({ exibirTags: false })} onSalvar={this.onSalvarTag}></TagModel>
            </Row>);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: () => {
            // Caso o id esteja definido, então é a alterção de uma receita e consulta a mesma na api
            if (typeof ownProps.match.params.id !== 'undefined') {
                dispatch(handleConsultarReceita(ownProps.match.params.id))
            }
        },
        addReceita: (objeto, callBack) => {
            dispatch(handleAdicionarReceita(objeto, callBack))
        },
        atualizarReceita: (objeto, callBack) => {
            dispatch(handleAlterarReceita(objeto, callBack))
        }
    }
}

export default connect((state) => ({
    receita: state.receita,
}), mapDispatchToProps)
    (CadastrarEditarReceitaView)