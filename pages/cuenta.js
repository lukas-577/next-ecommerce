import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMeApi } from "../pages/api/user";
import useAuth from "../hooks/useAuth";
import ChangeNameForm from "../component/Cuenta/ChangeNameForm/ChangeNameForm";

export default function cuenta() {

    const [user, setUSer] = useState(undefined);
    const { auth, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUSer(response || null);
        })();
    }, [auth]);

    if (user === undefined) return null;
    if (!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <div>
            <Configuration user={user}></Configuration>
        </div>
    )
}

function Configuration(props) {
    const { user } = props;
    return (
        <div>
            <div>Configuracion</div>
            <div><ChangeNameForm user={user}></ChangeNameForm></div>
        </div>
    )
}