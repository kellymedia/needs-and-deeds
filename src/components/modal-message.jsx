import React, {useState}from "react";
import {Button} from "reactstrap";



function Modalmessage () {
const [modalState, setModalState] = useState(false);

const manageState = () => {
  setModalState(!modalState)
}
    return (
      <div className={`modal modalShowing-{modalState}`}>
        <Button onClick={manageState()}>Email Send</Button>
      </div>
        
    )
}

export default Modalmessage;




//   var patt = new RegExp(\\);
//   let res = patt.test(data.person_email);
// if (!res) {
//   // set errors
//   return errors
// } else {
// 	return true


//   function ValidateEmail(mail) 
//   {
//    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.person_helperemail))
//     {
//       return (true)
//     }
//       alert("You have entered an invalid email address!")
//       return (false)
//   }


//   const validateEmail = (data) => {
//     // validate email form somehow
//     const valid = data.target.value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/).length
//     setData({ ...data, person: data.target.value })
//     if (valid) {
//        // activate button
//     }
//     if (!valid) {
//        setData({ ...data, emailError: "Invalid email" })
//     }
