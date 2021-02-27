import React, { Component } from 'react';

/* Layout */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class PassoModel extends Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    get initialState() {
        return {
            ordem: 0,
            descricao: '',
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
            observacao
        } = this.state

        const closeBtn = <button className="close" onClick={onClose}>&times;</button>;

        return (
            <Modal isOpen={exibir} className={className}>
                <ModalHeader close={closeBtn}>Passo</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="txtDescricao">Descrição</Label>
                            <Input type="text" bsSize="sm" id="txtDescricao" placeholder="ex: Misturar todos igredientes" value={descricao} onChange={(e) => this.setState({ descricao: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="txtObservacao">Observação</Label>
                            <Input type="text" bsSize="sm" id="txtObservacao" placeholder="ex: Cuidar para não se sujar" value={observacao} onChange={(e) => this.setState({ observacao: e.target.value })} />
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

export default PassoModel