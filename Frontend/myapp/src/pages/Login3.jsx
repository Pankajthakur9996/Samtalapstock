import  {useFormik} from 'formik';
import { useEffect } from 'react';
import logo from '../assets/logo.jpg'
import { Container, Form, Button, Row, Col, Card  } from 'react-bootstrap';
import  * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const Login3=()=>
{
  const location=useLocation();
  const email = location.state?.data;
  console.log(email);

    const validationschema=yup.object().shape({
        password:yup.string().required('please enter password')
    })
    const formik=useFormik(
        {
            initialValues:{
                password:'',
                
            },
      onSubmit: async (values, { setSubmitting, resetForm }) => {
  try {
    const {password} = values; 
    

    const res = await axios.post('http://localhost:3000/login', {

      email,password
      

    });

    console.log(" Data sent to backend:", res.data);
    alert(res.data.message);
  
    
    resetForm();
  } catch (error) {
    console.error(" Error:", error.response?.data || error.message);
    alert( " login failed!");
  } finally {
    setSubmitting(false);
  }
},

             validationSchema:validationschema


        }
    )
   
    return (
  <>
    <Container className="d-flex justify-content-center align-items-center py-4" style={{ minHeight: "100vh" }}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <div className="p-4 shadow-lg bg-grey" style={{ height: "80vh", width: "100%" }}>
            <div className="d-flex gap-2">
              <img
                src={logo}
                alt="images"
                width="40"
                height="40"
                className="d-inline-block align-top"
                style={{ border: "1px solid black", borderRadius: "20px" }}
              />

              <h3 className="text-center mb-4">Sign In</h3>
              
            </div>
            <div>
              <p className='fw-bold ms-3'> check {email} for a message from SamtaLapstock</p>
            </div>

            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="otp" className="mb-4 d-flex">
                <Form.Control
                  type="text"
                  name="password"
                  placeholder="enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "100%", height: "6vh", marginLeft: "4%" }}
                />
              </Form.Group>
              {formik.errors.password ? (
                <div className="mb-1 ms-3 mt-1" style={{ color: "red", fontSize: "0.9rem" }}>
                  {formik.errors.password}
                </div>
              ) : null}
              <button className="codebutton" type='submit'>sign-in </button>
              <Link to="/privacy" style={{ textDecoration: "none" }}>
                <div className="d-flex justify-content-end">
                  <p className="me-2 privacy" >
                    Privacy
                  </p>
                </div>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);
}