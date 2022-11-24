import React, { useState, useEffect, useMemo } from 'react';
//decodifica el token de jwt
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import '../styles/globals.css';
import AuthContext from '../context/AuthContext';
import { setToken, getToken, removeToken } from "./api/token"

function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(undefined);
  const [reloadUSer, setReloadUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id
      })
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUSer]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id
    })
  }

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  }


  const authData = useMemo(
    () => ({
      auth,
      login: login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) {
    return null;
  }
  return <AuthContext.Provider value={authData}>
    <Component {...pageProps} />
  </AuthContext.Provider>
}

export default MyApp
