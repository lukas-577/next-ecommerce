import React, { useState } from "react"
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
export default function (props) {
    const { onCloseModal } = props;
    const [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => setShowLogin(true);
    const showRegisterForm = () => setShowLogin(false);

    return showLogin ? (<LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal}></LoginForm>)
        : (<RegisterForm showLoginForm={showLoginForm}></RegisterForm>);
}