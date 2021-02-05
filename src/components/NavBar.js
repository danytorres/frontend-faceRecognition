import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Upload from './Upload';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <h1 className="navbar-brand">Subir Selfie</h1>
                </div>
            </nav>
        )
    }
}
