import React from "react"

export const FormExample = ()=> {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nome"
                    />
                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Sobrenome"

                    />
                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Usuário</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor verifique o Email.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" required/>
                    <Form.Control.Feedback type="invalid">
                        Por favor informe a cidade.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="UF" required/>
                    <Form.Control.Feedback type="invalid">
                        Por favor informe o estado.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" required/>
                    <Form.Control.Feedback type="invalid">
                        Por favor infomr o CEP.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button type="submit">Enviar</Button>
        </Form>
    );
}
