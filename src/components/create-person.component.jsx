import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const CreatePerson = (props) => {
    const [data, setData] = useState({
        person_name: "",
        person_lastname: "",
        person_address: "",
        person_need: "",
        person_phonenumber: "",
        person_date: "",
        person_description:""
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
            person_lastname: "",
            person_address: "",
            person_need: "",
            person_phonenumber: "",
            person_date: "",
            person_description: ""
        });
        props.history.push('/');
    }

    return (
        <div className="create" style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Enter Details About Your Need</h3>
            <Form onSubmit={onSubmitPersonData}>
                <FormGroup row>
                    <Col md={6}>
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
                    <Col md={6}>
                        <Label><AiOutlineExport /> Email </Label>
                        <Input
                            type="text"
                            name="person_lastname"
                            className="form-control"
                            value={data.person_lastname}
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
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> City/Town </Label>
                        <Input
                            type="text"
                            name="person_address"
                            className="form-control"
                            value={data.person_address}
                            onChange={onChangePersonData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Help needed by (date) </Label>
                        <Input
                            type="text"
                            placeholder="MM/DD/YYYY"
                            name="person_date"
                            className="form-control"
                            value={data.person_date}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            type="select"
                            name="person_need"
                            className="form-control"
                            value={data.person_need}
                            onChange={onChangePersonData} >
                            <option>Select</option>
                            <option>Yard Work</option>
                             <option>Housework</option>
                          <option>Grocery</option>
                             <option>School Work</option>
                         <option>Other</option>
                    </Input>
                    </Col>
                    
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Description of Need </Label>
                        <Input
                            type="text"
                            name="person_description"
                            className="form-control"
                            value={data.person_description}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>

            <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreatePerson;