import  {useFormik} from 'formik';
import { useEffect } from 'react';
import logo from '../assets/logo.jpg'
import { Container, Form, Button, Row, Col, Card  } from 'react-bootstrap';
import  * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Signup=()=>
{

    const validationschema=yup.object().shape({
        firstName:yup.string().min(5, 'Minimum 5 characters required').required('please enter firstName'),
        lastName:yup.string().min(5, 'Minimum 5 characters required').required('please enter lastName'),
        email:yup.string().min(5, 'Minimum 5 characters required').required('please enter email').email("please enter valid email"),
        password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&?!*])([a-zA-Z\d!@#$%&*?]{8,})$/,'Must be 8+ chars with upper, lower, number & special char').required('please enter password'),
        confirm:yup.string().oneOf([yup.ref('password'),null],"password must match").required("please enter confirm password")

    })
    const formik=useFormik(
        {
            initialValues:{
                firstName:"",
                lastName:"",
                email:'',
                password:'',
                confirm:''
                
            },
           onSubmit: async (values, { setSubmitting, resetForm }) => {
  try {
    const { email, password } = values;  

    const res = await axios.post('http://localhost:3000/create', {
      email,
      password
    });

    console.log(" Data sent to backend:", res.data);
    alert("User registered successfully!");
    navigate('/sign');
    resetForm();
  } catch (error) {
    console.error(" Error:", error.response?.data || error.message);
    alert("Registration failed!");
  } finally {
    setSubmitting(false);
  }
},

             validationSchema:validationschema


        }
    )
   
    return(
        <>     
        
        <Container className=' d-flex justify-content-center align-items-center   py-4' style={{height:"100%"}}>
            <div  className='  p-4 shadow-lg justify-content-start  bg-grey' style={{height:"80vh"}}>
        
                 <div className='d-flex gap-2'>
                    <img src={logo} alt="images" width="40"
            height="40" className="d-inline-block align-top" style={{ border:"1px solid black", borderRadius:"20px"}} />
            
                <h3 className='text-center mb-4 '>Create Account</h3>
                </div>   
                
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId='first' className='mb-2 d-flex'> 
                    <Form.Label className="me-3 mb-0">FirstName:</Form.Label>
                    <Form.Control type='text' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Form.Group>
                    {
                        formik.errors.firstName?<div  style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.firstName}</div>:null
                    }
                    <Form.Group controlId='lastName' className='mb-2 d-flex'> 
                    <Form.Label className="me-3 mb-0">lastName</Form.Label>
                    <Form.Control type='text' name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Form.Group>
                    {
                        formik.errors.lastName?<div  style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.lastName}</div>:null
                    }
                    <Form.Group controlId='email' className='mb-2 d-flex'> 
                    <Form.Label className="me-3 mb-0">Email</Form.Label>
                    <Form.Control type='text' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Form.Group>
                    {
                        formik.errors.email?<div  style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.email}</div>:null
                    }
                    <Form.Group controlId='password' className='mb-2 d-flex'> 
                    <Form.Label className="me-3 mb-0">Password</Form.Label>
                    <Form.Control type='text' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Form.Group>
                    {
                        formik.errors.password?<div  style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.password}</div>:null
                    }
                    <Form.Group controlId='confirm' className='mb-2 d-flex'> 
                    <Form.Label className="me-3 mb-0">ConfirmPassword</Form.Label>
                    <Form.Control type='text' name='confirm' value={formik.values.confirm} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </Form.Group>
                    {
                        formik.errors.confirm?<div style={{ color: 'red', fontSize: '0.9rem' }}>{formik.errors.confirm}</div>:null
                    }
                    <div>
                        <Button className='d-grid gap-2' variant='primary' type='submit'disabled={formik.isSubmitting}>{formik.isSubmitting ? "Submitting..." : "Submit"}</Button>
                    </div>
        
                </Form>
            </div>
        </Container>
        </>
    )
}