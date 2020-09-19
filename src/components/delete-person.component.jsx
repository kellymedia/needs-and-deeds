import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';

const DeletePerson = (props) => {
    const [data, setData] = useState({
        person_name: "",
        person_lastname: "",
        person_address: "",
        person_need: "",
        person_phonenumber: "",
        person_verification: false
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/all_person/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeletePersonData = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:4000/all_person/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Delete Name</h3>
            <Form onSubmit={onDeletePersonData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Name </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_name"
                            className="form-control"
                            value={data.person_name} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Lastname </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_lastname"
                            className="form-control"
                            value={data.person_lastname} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_address"
                            className="form-control"
                            value={data.person_address}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            readOnly
                            type="text"
                            name="person_need"
                            className="form-control"
                            value={data.person_need} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Number to contact you </Label>
                        <Input
                            readOnly
                            type="number"
                            name="person_phonenumber"
                            className="form-control"
                            value={data.person_phonenumber}/>
                    </Col>
                </FormGroup>
                <Button color="danger"><AiOutlineDelete /> Delete Data</Button>
            </Form>
        </div>
    );
}

export default DeletePerson;