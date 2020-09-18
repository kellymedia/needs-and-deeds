import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const CreatePerson = (props) => {
    const [data, setData] = useState({
        name: "",
        lastname: "",
        address: "",
        need: "",
        contact_number: "",
        person_verification: false
    });

    const onChangePersonData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitPersonData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/all_student/add', data).then(res => console.log(res.data));
        setData({
            name: "",
            lastname: "",
            address: "",
            need: "",
            contact_number: "",
            person_verification: false
        });
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Create Profile</h3>
            <Form onSubmit={onSubmitPersonData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Name </Label>
                        <Input
                            type="text"
                            name="name"
                            className="form-control"
                            value={data.name}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Lastname </Label>
                        <Input
                            type="text"
                            name="lastname"
                            className="form-control"
                            value={data.lastname}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            type="text"
                            name="address"
                            className="form-control"
                            value={data.address}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            type="text"
                            name="need"
                            className="form-control"
                            value={data.need}
                            onChange={onChangePersonData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Where can we contact you?</Label>
                        <Input
                            type="number"
                            name="contact_number"
                            className="form-control"
                            value={data.contact_number}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreatePerson;