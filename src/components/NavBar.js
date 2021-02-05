import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Subir Selfie</Link>
                </div>
            </nav>
        )
    }
}
