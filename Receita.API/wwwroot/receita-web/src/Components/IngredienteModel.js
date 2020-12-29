import React, { Component } from 'react';

/* Layout */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { EUnidadeMedida } from '../Util/Enumerador'
import { GetEnumLista } from '../Util/Funcoes'

class IngredienteModel extends Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    get initialState() {
        return {
            descricao: '',
            quantidade: 0,
            unidadeMedida: EUnidadeMedida.Grama.valor,
            observacao: ''
        }
    }

    salvar = () => {
        this.props.onSalvar(this.state)
        this.props.onClose();

        this.setState(this.initialState)
    }

    render() {

        const {
            className,
            exibir,
            onClose,
        } = this.props;

        const {
            descricao,
            quantidade,
            unidadeMedida,
            observacao
        } = this.state

        const closeBtn = <button className="close" onClick={onClose}>&times;</button>;

        return (
            <Modal isOpen={exibir} className={className}>
                <ModalHeader close={closeBtn}>Ingrediente</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="txtDescricao">Descrição</Label>
                            <Input type="text" bsSize="sm" id="txtDescricao" placeholder="ex: Tomate" value={descricao} onChange={(e) => this.setState({ descricao: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="txtQuantidade">Quantidade</Label>
                            <Input type="number" bsSize="sm" id="txtQuantidade" disabled={unidadeMedida === EUnidadeMedida.QuantoBasta.valor} min={0} value={quantidade} onChange={(e) => this.setState({ quantidade: parseInt(e.target.value) })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="slUnidadeMedida">Unidade de medida</Label>
                            <Input type="select" name="slUnidadeMedida" id="slUnidadeMedida" value={unidadeMedida} onChange={(e) => this.setState({ unidadeMedida: parseInt(e.target.value) })}>
                                {
                                    GetEnumLista(EUnidadeMedida).map((unidade, key) => {
                                        return <option key={key} value={unidade.valor}>{unidade.descricao}</option>
                                    })
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="txtObservacao">Observação</Label>
                            <Input type="text" bsSize="sm" id="txtObservacao" placeholder="ex: Cortar em brunoise" value={observacao} onChange={(e) => this.setState({ observacao: e.target.value })} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.salvar}>Salvar</Button>
                    <Button color="secondary" onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default IngredienteModel