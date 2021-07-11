import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
    NavItem,
    NavLink
} from 'reactstrap';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img src="/logo192.png" width="30" height="30" alt="Recettes" />
                Recettes
                </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Início</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Olá usuário</NavbarText>
            </Collapse>
        </Navbar>
    )
}

export default Menu