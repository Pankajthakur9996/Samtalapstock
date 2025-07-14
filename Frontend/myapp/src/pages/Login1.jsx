import  {useFormik} from 'formik';
import { useEffect } from 'react';
import logo from '../assets/logo.jpg'
import { Container, Form, Button, Row, Col, Card  } from 'react-bootstrap';
import  * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';

export const Login1=()=>
{

    const validationschema=yup.object().shape({
        email:yup.string().min(5, 'Minimum 5 characters required').required('please enter email').email("please enter valid email")
       
    })
    const formik=useFormik(
        {
            initialValues:{
                email:'',
                
            },
           onSubmit: async (values, { setSubmitting, resetForm }) => {
  try {
    
    resetForm();
  } catch (error) {
    console.error(" Error:", error.response?.data || error.message);
    
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
              <Link to="/create" style={{ textDecoration: "none" }}>
                <p className='mt-2 ms-4'>Create Account</p>
              </Link>
            </div>

            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="email" className="mb-4 d-flex">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Username or Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ width: "100%", height: "6vh", marginLeft: "4%" }}
                />
              </Form.Group>
              {formik.errors.email ? (
                <div className="mb-1 ms-3 mt-1" style={{ color: "red", fontSize: "0.9rem" }}>
                  {formik.errors.email}
                </div>
              ) : null}

              <Button
                className="d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "6vh", marginLeft: "4%" }}
              >
                Use Password
              </Button>
              <p className="d-flex justify-content-center align-items-center mt-3" style={{ color: "grey" }}>
                or
              </p>
              <button className="codebutton">Send sign-in code</button>

              <Link to="/forgetUsername" style={{ textDecoration: "none" }}>
                <p className="codebutton1 mt-5">Forget your Username?</p>
              </Link>
              <Link to="/privacy" style={{ textDecoration: "none" }}>
                <div className="d-flex justify-content-end">
                  <p className="me-2 privacy" style={{ marginTop: "37%", color: "blue" }}>
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