import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';
// import Dropdown from './Dropdown';

const CreatePerson = (props) => {
    const [data, setData] = useState({
        personName: "",
        personEmail: "",
        personAddress: "",
        personNeed: "",
        personPhoneNumber: "",
        personDate: "",
        personDescription: ""
    });

    const onChangePersonData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

 // validate email on submission
 const validateEmail = (data) => {
    console.log("person:", data.personEmail);

    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      data.personEmail
    );

    if (email) {
      return "Valid email entered!";
    } else {
      return "Please enter a valid email";
    }
  };


    const onSubmitPersonData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/all_person/add', data).then(res => {
            setData({
                personName: "",
                personEmail: "",
                personAddress: "",
                personNeed: "",
                personPhoneNumber: "",
                personDate: "",
                personDescription: ""
            });
            console.log(res.data);
            props.history.push('/');
        })
    }

    return (
        <div className="create" style={{ }}>
            <div className="create-img">
                <h1>Submit A Need</h1>
            </div>
            <h3><AiOutlineUserAdd /> Enter Details About Your Need</h3>
            <p>Please fill out form with your details to submit a <b>need.</b></p>
            <Form className="create-form" onSubmit={onSubmitPersonData}>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineUser /> Name </Label>
                        <Input
                            type="text"
                            name="personName"
                            className="form-control"
                            value={data.personName}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Email </Label>
                        <Input
                            type="text"
                            name="personEmail"
                            className="form-control"
                            value={data.personEmail}
                            onChange={onChangePersonData} />
                            {data.email ? validateEmail(data) : validateEmail(data)}
                    </Col>
                    <br />
                    <Col md={6}>
                        <Label><AiOutlineExport /> Number to contact you</Label>
                        <Input
                            type="text"
                            placeholder="Enter contact phone number"
                            name="personPhoneNumber"
                            className="form-control"
                            value={data.personPhoneNumber}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> City/Town </Label>
                        <Input
                            type="text"
                            name="personAddress"
                            className="form-control"
                            value={data.personAddress}
                            onChange={onChangePersonData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Help needed by (date) </Label>
                        <Input
                            type="text"
                            placeholder="MM/DD/YYYY"
                            name="personDate"
                            className="form-control"
                            value={data.personDate}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            type="text"
                            name="personNeed"
                            className="category"
                            value={data.personNeed}
                            onChange={onChangePersonData} >
                            {/* <option>Select</option>
                            <option>Yard Work</option>
                            <option>Housework</option>
                            <option>Grocery</option>
                            <option>School Work</option>
                            <option>Other</option> */}
                        </Input>
                        <p>Examples: Yard work, Housework, Schoolwork, Other</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                {/* <Dropdown>
                    name="personNeed"
                    className="input-field"
                    value={data.personNeed}
                    onChange={onChangePersonData} >
                    <option>Select</option>
                    <option>Yard Work</option>
                    <option>Housework</option>
                    <option>Grocery</option>
                    <option>School Work</option>
                    <option>Other</option>
                </Dropdown> */}
                    <Col md={6}>
                        <Label><AiOutlineExport /> Description of Need </Label>
                        <Input
                            type="text"
                            name="personDescription"
                            className="form-control"
                            value={data.personDescription}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>

            <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreatePerson;