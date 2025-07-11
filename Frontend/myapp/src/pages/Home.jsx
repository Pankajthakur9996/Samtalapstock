import { Container,Carousel } from "react-bootstrap"
import laptop1 from '../assets/laptop1.jpg'
import laptop2 from '../assets/laptop2.jpg'
import laptop3 from '../assets/laptop3.jpg'
import laptop4 from '../assets/laptop4.jpg'
import { Header } from "../component/Header"
import { Navbar1 } from "../component/Navbar1"
import { Footer } from "../component/Footer"
export const Home=()=>
{
    const data=[
        laptop1,
        laptop2,laptop3,laptop4

    ]
    return(
        <>
        <Header/>
        <Navbar1/>
        <Container fluid  >
             <div style={{ width: "100vw", height: "auto", overflow: "hidden" }}>
            <Carousel interval={3000} controls='false' pause='false'>
                {
                    data.map((item,index)=>(
                       <Carousel.Item key={index} >
                         <img className="d-block  " src={item} alt={`Slide ${index + 1}`} style={{ width: "80vw", height: "80vh",justifySelf:"center"
                
              }}/>

                       </Carousel.Item>
                    ))
                }

            </Carousel>
            </div>
            </Container>
            <Footer/>
        

        </>
    )
}