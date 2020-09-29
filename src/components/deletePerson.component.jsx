import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import {
  AiOutlineUser,
  AiOutlineExport,
  AiOutlineDelete,
} from "react-icons/ai";
import axios from "axios";

const DeletePerson = (props) => {
  const [data, setData] = useState({
    personName: "",
    personEmail: "",
    personAddress: "",
    personNeed: "",
    personPhoneNumber: "",
    personDescription: "",
    personHelperEmail: "",
    personValidEmail: false
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:4000/all_person/${props.match.params.id}`
      );
      setData({ ...result.data });
    };
    fetchData();
  }, [props.match.params.id]);


  const onDeletePersonData = (e) => {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:4000/all_person/delete/${props.match.params.id}`,
        data
      )
      .then((res) => {
        props.history.push("/");
        console.log(res.data);
      })
  };

 
 //   validate helper's email on submission
 const validateEmail = (newData) => {

  console.log("email:", newData.personHelperEmail)

  const email = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newData.personHelperEmail));

  setData ({
    ...newData,
    personValidEmail: email
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
    <div className="delete" style={{}}>
      <div className="delete-img"></div>
        <h3>Claim Need</h3>
        <p>If you would like to offer to fulfill this need, please contact this person directly.</p>

        <Form className="delete-form" onSubmit={onDeletePersonData}>
          <div className="claim">
            <FormGroup row>
              <Col md={6}>
                <Label>
                  <AiOutlineUser /> Name{" "}
                </Label>
                <Input
                  readOnly
                  type="text"
                  name="personName"
                  className="form-control"
                  value={data.personName}
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
                  name="personEmail"
                  className="form-control"
                  value={data.personEmail}
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
                  name="personAddress"
                  className="form-control"
                  value={data.personAddress}
                />
              </Col>
              <Col md={6}>
                <Label>
                  <AiOutlineExport /> Help needed by (date){" "}
                </Label>
                <Input
                  readOnly
                  type="text"
                  name="personDate"
                  className="form-control"
                  value={data.personDate}
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
                  name="personNeed"
                  className="form-control"
                  value={data.personNeed}
                />
              </Col>
              <Col md={6}>
                <Label>
                  <AiOutlineExport /> Contact Number{" "}
                </Label>
                <Input
                  readOnly
                  type="text"
                  name="personPhoneNumber"
                  className="form-control"
                  value={data.personPhoneNumber}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={6}>
                <Label>
                  <AiOutlineExport /> Description of Need{" "}
                </Label>
                <Input
                  readOnly
                  type="text"
                  name="personDescription"
                  className="form-control"
                  value={data.personDescription}
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
                  name="personHelperEmail"
                  value={data.personHelperEmail}
                  onChange={onChangeEmail}
                  required
                />
                {data.personValidEmail
                  ? "Email validated"
                  : "Please enter a valid email!"}
              </Col>
            </FormGroup>
        </div>
        <div>
        <p><i>*By agreeing to "Claim Deed" you are agreeing to:</i>
          <ul>
            <li>-contact this person</li>
            <li>-offer to <u><b>voluntarily</b></u> fulfill the need</li>
          </ul>
        </p>
          <Button color="danger" disabled={!data.personValidEmail}>
            <AiOutlineDelete /> Claim Deed
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DeletePerson;
