import React, {useState, useEffect, useRef } from 'react'

import { 
    Col,
    Row,
    Container,
    Form,
    Button
} from 'react-bootstrap'

export default function TodoForm({ todoArray, todoFormString, setTodoFormString, setTodoArray }) {
    const inputTextHandler = (e) => {
        setTodoFormString(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodoArray([
            ...todoArray, { text:todoFormString, completed:false, id:Math.random()*10000}
        ]);
        setTodoFormString('');
    }



    return (
        <Container className="todoContainer">
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Create a Todo:
                        </Form.Label>
                        <Form.Control value={todoFormString} type="text" onChange={inputTextHandler} />
                        <Button onClick={submitTodoHandler} type="submit">Create</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Update a Todo:
                        </Form.Label>
                        <Form.Control type="text" />
                        <Button>Update</Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}
