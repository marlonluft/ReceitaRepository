import React, { Component } from 'react';

/* Layout */
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class TagModel extends Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    get initialState() {
        return {
            tag: ''
        }
    }

    salvar = () => {
        this.props.onSalvar(this.state.tag)
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
            tag
        } = this.state

        const closeBtn = <button className="close" onClick={onClose}>&times;</button>;

        return (
            <Modal isOpen={exibir} className={className}>
                <ModalHeader close={closeBtn}>Tag</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="txtTag">Tag</Label>
                            <Input type="text" bsSize="sm" id="txtTag" placeholder="ex: Biscoito / bolo / torta" value={tag} onChange={(e) => this.setState({ tag: e.target.value })} />
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

export default TagModel