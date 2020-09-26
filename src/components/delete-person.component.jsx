import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import {
  AiOutlineUser,
  AiOutlineExport,
  AiOutlineDelete,
} from "react-icons/ai";
import axios from "axios";
import { set } from "mongoose";

const DeletePerson = (props) => {
  const [data, setData] = useState({
    person_name: "",
    person_email: "",
    person_address: "",
    person_need: "",
    person_phonenumber: "",
    person_description: "",
    person_helperemail: "",
    person_valid_email: false
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
    axios
      .delete(
        `http://localhost:4000/all_person/delete/${props.match.params.id}`,
        data
      )
      .then((res) => console.log(res.data));
    props.history.push("/");
  };

 
 //   validate helper's email on submission
 const validateEmail = (newData) => {

  console.log("email:", newData.person_helperemail)

  const email = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newData.person_helperemail));

  setData ({
    ...newData,
    person_valid_email: email
  })

}


   // change when email address is entered
  const onChangeEmail = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    }
    setData(newData);
    console.log(data);
    validateEmail(newData)
    // console.log(validateEmail)
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Offer to Fulfill this Need</h3>
      <Form onSubmit={onDeletePersonData}>
        <div className="claim">
          <FormGroup row>
            <Col md={6}>
              <Label>
                <AiOutlineUser /> Name{" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_name"
                className="form-control"
                value={data.person_name}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={6}>
              <Label>
                <AiOutlineExport /> Email{" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_email"
                className="form-control"
                value={data.person_email}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={6}>
              <Label>
                <AiOutlineExport /> City/Town{" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_address"
                className="form-control"
                value={data.person_address}
              />
            </Col>
            <Col md={6}>
              <Label>
                <AiOutlineExport /> Help needed by (date){" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_date"
                className="form-control"
                value={data.person_date}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={6}>
              <Label>
                <AiOutlineExport /> Need help with{" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_need"
                className="form-control"
                value={data.person_need}
              />
            </Col>
            <Col md={6}>
              <Label>
                <AiOutlineExport /> Contact Number{" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_phonenumber"
                className="form-control"
                value={data.person_phonenumber}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Label>
                <AiOutlineExport /> Description of Need{" "}
              </Label>
              <Input
                readOnly
                type="text"
                name="person_description"
                className="form-control"
                value={data.person_description}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={6}>
              <Label>
                <AiOutlineExport /> Enter Your Email{" "}
              </Label>
              <Input
                type="email"
                name="person_helperemail"
                value={data.person_helperemail}
                onChange={onChangeEmail}
                required
              />
              {data.person_valid_email
                ? "Email validated"
                : "Please enter a valid email!"}
            </Col>
          </FormGroup>
        </div>
        <div>
          <Button color="danger" disabled={!data.person_valid_email}>
            <AiOutlineDelete /> Claim Deed
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DeletePerson;
