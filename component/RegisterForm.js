
import { Form, Button, FormInput } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registrarApi } from "../pages/api/user";
export default function RegisterForm(props) {

    const { showLoginForm } = props;

    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            lastname: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required("la contraseña es obligatoria").oneOf([Yup.ref("repeatPassword")], "Las constraseñas no son iguales"),
            repeatPassword: Yup.string().required("la contraseña es obligatoria").oneOf([Yup.ref("password")], "Las constraseñas no son iguales")
        }),
        onSubmit: (formData) => {
            //console.log(formData);
            registrarApi(formData);
        }
    })


    return (
        <Form className="formulario" onSubmit={formik.handleSubmit}>
            <FormInput
                name="name"
                type="text"
                placeholder="nombre" onChange={formik.handleChange}
                error={formik.errors.name && true}
                value={formik.values.name}
            >
            </FormInput>
            <FormInput
                name="lastname"
                type="text"
                placeholder="apellido" onChange={formik.handleChange}
                error={formik.errors.lastname && true}
                value={formik.values.lastname}
            >
            </FormInput>
            <FormInput
                name="username"
                type="text"
                placeholder="nombre de usuario" onChange={formik.handleChange}
                error={formik.errors.username && true}
                value={formik.values.username}
            >
            </FormInput>
            <FormInput
                name="email"
                type="email"
                placeholder="email@" onChange={formik.handleChange}
                error={formik.errors.email && true}
                value={formik.values.email}
            >
            </FormInput>
            <FormInput
                name="password"
                type="password"
                placeholder="contraseña" onChange={formik.handleChange}
                error={formik.errors.password}
                value={formik.values.password}
            >
            </FormInput>
            <FormInput
                name="repeatPassword"
                type="password"
                placeholder="repetir contraseña" onChange={formik.handleChange}
                error={formik.errors.repeatPassword}
                value={formik.values.repeatPassword}
            ></FormInput>
            <div className="actions">
                <Button type="button" onClick={showLoginForm}>
                    Iniciar Sección
                </Button>
                <div>
                    <Button type="submit" className="submit">
                        Registrar
                    </Button>
                    <Button type="button" basic onClick={formik.handleReset}>
                        Limpiar formulario
                    </Button>
                </div>

            </div>
        </Form>
    )
}