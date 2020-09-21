import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const EditPerson = (props) => {
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

    const onChangePersonData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data);
    }

    const onSubmitPersonData = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/all_person/update/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Edit Name</h3>
            <Form onSubmit={onSubmitPersonData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser />  Name </Label>
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
                        <Label><AiOutlineExport /> Lastname </Label>
                        <Input
                            type="text"
                            name="person_lastname"
                            className="form-control"
                            value={data.person_lastname}
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
                        <Label><AiOutlineExport /> Number to contact you </Label>
                        <Input
                            type="number"
                            name="person_phonenumber"
                            className="form-control"
                            value={data.person_phonenumber}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="person_verification"
                                defaultChecked={data.person_verification ? true : false}
                                value={data.person_verification ? Boolean(true) : Boolean(false)}
                                onChange={onChangePersonData}
                                required />{data.person_verification ? "Data is verified" : "Data isn't verified"}
                        </Label>
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Verified Data</Button>
            </Form>
        </div>
    );
}

export default EditPerson;