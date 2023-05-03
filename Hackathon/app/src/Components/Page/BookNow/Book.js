import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser'
import "../BookNow/book.css"


function Book() {
 
  const [validated, setValidated] = useState(false);
  const [formState, setFormstate]=useState({})

  
  const changeHandler = (event) =>{
        setFormstate({ ...formState,[event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    // const config ={
    //     SecureToken :"1e6cc692-fcd7-49cd-b805-033af91ff603",
    //     To : 'Kishor002912@gmail.com',
    //     From : formState.email,
    //     Subject : "Order from Someone",
    //     Body : `Name = ${formState.firstname}  ,${formState.lastname},${formState.email},${formState.phonenumber},${formState.address}`    };
    // if(window.Email){
    //     window.Email.send(config).then(()=>
    //     alert("order success")    );
    // }else{ alert("eror")}
    emailjs.sendForm('service_xihk90s','template_9712mya',event.target,"29iwXm_K_997fqHrL").then(res=>{
        alert("Your request has Submited")
        alert("Your request has Submited")
         window.location.reload(false);
        
    }).catch(error=>{
        alert("Your file is being uploaded!")
    })
  };

  return (
    // <div style={{margin:"45px"}}>
    <div className='colaer'>
    <h3 className='Abhed' style={{fontWeight:"700",fontVariantCaps:"all-petite-caps", 
      background:`linear-gradient(90deg, #3dd5ff, #00ddf2, #00e3db, #2ae7bb, #6ce896, #9fe670, #cfe050, #ffd53d)`,
      WebkitBackgroundClip:"text",
      WebkitTextFillColor:"transparent",
      marginBottom:"10px",
      textAlign:"center",
      fontSize:"80px"
      
      }}> Book Journey Now </h3>
    <Form style={{margin:"5px  45px 45px 45px"}} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required="true"
            type="text"
            placeholder="First name"
            defaultValue=""
            onChange={changeHandler}
            // value={formState.firstname ||''}
            name="name"

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
            onChange={changeHandler}
            // value={formState.lastname ||''}
            name="name"

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email Adress</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={changeHandler}
            //   value={formState.email ||''}
              name ="user_email"
  
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" required
           onChange={changeHandler}
        //    value={formState.phonenumber ||''}
           name ="message"
/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Phone Number.
          </Form.Control.Feedback>
        </Form.Group>
      <Row className="mb-3">
            <div>
            select services
        <Form.Select as={Col} md="6" controlId="validationCustom03" aria-label="Default select example"
         onChange={changeHandler}
        //  value={formState.select ||''}
         name ="message"
>
      <option>Select Package</option>
      <option value="Auli"> Auli</option>
      <option value="Binsar">Binsar</option>
      <option value="Dalhousie">Dalhousie</option>
      <option value=" Darjeeling">Darjeeling</option>
      
    </Form.Select>
    </div>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required 
           onChange={changeHandler}
        //    value={formState.address ||''}
           name="message"
/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button  type="submit">Submit form</Button>
    </Form>
     </div>
  );
}

export default Book;