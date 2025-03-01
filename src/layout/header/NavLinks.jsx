import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinks({name,to}) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={to} >{name}</Link>
        </li>
    )
}
