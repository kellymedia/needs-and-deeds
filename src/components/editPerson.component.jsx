import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const EditPerson = (props) => {
    const [data, setData] = useState({
        personName: "",
        personEmail: "",
        personAddress: "",
        personNeed: "",
        personPhoneNumber: "",
        personVerification: false
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
        <div style={{}}>
            <div className="edit-img"></div>
            <h3><AiOutlineUserAdd /> Edit Name</h3>
            <Form onSubmit={onSubmitPersonData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser />  Name </Label>
                        <Input
                            type="text"
                            name="personName"
                            className="form-control"
                            value={data.personName}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Email </Label>
                        <Input
                            type="text"
                            name="personEmail"
                            className="form-control"
                            value={data.personEmail}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            type="text"
                            name="personAddress"
                            className="form-control"
                            value={data.personAddress}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Need help with </Label>
                        <Input
                            type="text"
                            name="personNeed"
                            className="form-control"
                            value={data.personNeed}
                            onChange={onChangePersonData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Number to contact you </Label>
                        <Input
                            type="number"
                            name="personPhoneNumber"
                            className="form-control"
                            value={data.personPhoneNumber}
                            onChange={onChangePersonData} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="personVerification"
                                defaultChecked={data.personVerification ? true : false}
                                value={data.personVerification ? Boolean(true) : Boolean(false)}
                                onChange={onChangePersonData}
                                required />{data.personVerification ? "Data is verified" : "Data isn't verified"}
                        </Label>
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Verified Data</Button>
            </Form>
        </div>
    );
}

export default EditPerson;