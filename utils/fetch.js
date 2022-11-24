import { getToken, hasExpiredToken } from "../pages/api/token";

export async function autchFetch(url, params, logout) {
    const token = getToken();

    if (!token) {
        //usuario no logeado
        logout();
    } else {
        if (hasExpiredToken(token)) {
            //Token expirado
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await fetch(url, paramsTemp);
                const result = await response.json();
                return result;
            } catch (error) {
                return error;
            }
        }
    }
}