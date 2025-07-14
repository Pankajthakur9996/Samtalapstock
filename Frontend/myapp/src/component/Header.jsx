import { Container,Nav,Dropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from '../assets/logo.jpg'

export const Header=()=>
{
    return(
        <>
        <Container fluid className="w-100">
            <div className="d-flex justify-content-between" style={{border:"1px solid skyblue",borderLeft:"none",borderRight:"none"}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                       <img src={logo} alt="images" width="40"
                        height="40" className="d-inline-block align-top m-4" style={{ border:"1px solid black", borderRadius:"30px"}} />
                        <p className='text-center fs-3 fw-bold mt-3' style={{merginLeft:"0",paddingLeft:"0"}}>SAMTA LAPSTOCK</p>
                </div>
                             
                        <div className="m-4">
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Sign In
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/login1">
                                    sign in
                                    </Dropdown.Item>
                                     <Dropdown.Item href="/create">
                                    Create Account
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        
                        
             
                    </div>
                    

        </Container>

        </>
    )
}