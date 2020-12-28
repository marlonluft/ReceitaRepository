/* React */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NaoEncontradoView extends Component {
    render() {
        return (
            <div>
                <h2>404 - Página não encontrada</h2>

                <Link to={'/'}>Página inicial</Link>
            </div>
        )
    }
}

export default NaoEncontradoView