import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../hooks/useAuth";
import { loginApi, resetPasswordApi } from "../pages/api/user";


export default function LoginForm(props) {

    const { showRegisterForm, onCloseModal } = props;
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    //console.log(login);

    const formik = useFormik({
        initialValues: {
            identifier: "",
            password: "",
        },
        validationSchema: Yup.object({
            identifier: Yup.string().email().required(),
            password: Yup.string().required("la contraseña es obligatoria")
        }),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await loginApi(formData);
            //console.log(response.jwt);
            if (response?.jwt) {
                login(response.jwt);
                console.log("login ok");
                //onCloseModal();
            } else {
                console.log("error");
            }
            setLoading(false);

        }
    })

    const resetPassword = () => {
        formik.setErrors({});
        const validateEmail = Yup.string().email().required();

        if (!validateEmail.isValidSync(formik.values.identifier)) {
            formik.setErrors({ identifier: true });
        } else {
            resetPasswordApi(formik.values.identifier);
        }

        //console.log(formik.values.identifier);
    }

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input name="identifier" type="text" placeholder="Correo electronico"
                onChange={formik.handleChange}
                error={formik.errors.identifier && true}
                value={formik.values.identifier}></Form.Input>

            <Form.Input name="password" type="password" placeholder="Contraseña"
                onChange={formik.handleChange}
                error={formik.errors.password && true}
                value={formik.values.password}></Form.Input>

            <div className="actions">
                <Button type="button" basic onClick={showRegisterForm} >
                    Registrarse
                </Button>
                <div>
                    <Button className="submit" type="submit" loading={loading}>
                        Entrar
                    </Button>
                    <Button type="button" onClick={resetPassword}>
                        Has olvidado la Contraseña?
                    </Button>
                </div>
            </div>
        </Form>
    )
}


