import { Navbar, Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar fixed="bottom" className="bg-dark py-3">
      <Container className=" bg- dark d-flex justify-content-center align-items-center">
        <h6 className="text-white m-0 text-center">
          © SAMTA LAPSTOCK, 2025
        </h6>
      </Container>
    </Navbar>
  );
};
