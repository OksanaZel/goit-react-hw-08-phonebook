import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {authSelectors, authOperations} from "redux/auth";

function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <>
            <span>Welcome back, {name}</span>
            <button type='button' onClick={()=> dispatch(authOperations.userLogOut())}>LogOut</button>
        </>
    )
}

export default UserMenu;
