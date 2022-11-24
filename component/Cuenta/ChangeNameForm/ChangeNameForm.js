import React from "react";
import { Form, Button } from "semantic-ui-react";


export default function ChangeNameForm(props) {

    const { user } = props;
    console.log(user);

    return (
        <div className="change-name-form">
            <h4>Cambia tu nombre y apellido</h4>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input name="name" placeholder="Tu nuevo nombre" value={user.name}></Form.Input>
                    <Form.Input name="lastname" placeholder="Tus nuevos apellidos" ></Form.Input>
                </Form.Group>
                <Button className="submit">
                    Actualizar
                </Button>
            </Form>
        </div>
    )
}