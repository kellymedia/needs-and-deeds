import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const CreatePerson = (props) => {
    const [data, setData] = useState({
        person_name: "",
        person_email: "",
        person_address: "",
        person_need: "",
        person_phonenumber: "",
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
        axios.post('http://localhost:4000/all_person/add', data).then(res => console.log(res.data));
        setData({
            person_name: "",
            person_email: "",
            person_address: "",
            person_need: "",
            person_phonenumber: "",
            person_verification: false
        });
        props.history.push('/');
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
                            name="person_name"
                            className="form-control"
                            value={data.person_name}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Email </Label>
                        <Input
                            type="text"
                            name="person_email"
                            className="form-control"
                            value={data.person_email}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            type="text"
                            name="person_address"
                            className="form-control"
                            value={data.person_address}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            type="text"
                            name="person_need"
                            className="form-control"
                            value={data.person_need}
                            onChange={onChangePersonData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Number to contact you</Label>
                        <Input
                            type="number"
                            name="person_phonenumber"
                            className="form-control"
                            value={data.person_phonenumber}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreatePerson;