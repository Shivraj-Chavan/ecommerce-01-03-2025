import React from 'react'
import NavLinks from './NavLinks'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <NavLinks name="Home" to="/"/>
                       <NavLinks name="Products" to="/products"/>
                       <NavLinks name="Cart" to="/cart"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
