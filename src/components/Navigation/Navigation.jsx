import React from "react";
import { Link } from "./Navigation.styled";


function Navigation() {
    return (
        <nav>
            <Link
                exact
                to="/"
            >
                Home
            </Link>

            <Link
                to="/contacts"
            >
                Contacts
            </Link>

        </nav>
    )
}

export default Navigation;