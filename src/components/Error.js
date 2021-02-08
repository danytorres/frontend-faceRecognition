import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show">
                <h2>Error, no se encontro algun rostro en la imagen</h2>
            </div>
        )
    }
}
