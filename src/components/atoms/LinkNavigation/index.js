import React from "react"
import "./styles.module.scss"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const LinkNavigation = ({ to, text }) => {
    return (
        <NavLink to={to} className={`link-nav`}>
            {text}
        </NavLink>
    )
}

export default LinkNavigation