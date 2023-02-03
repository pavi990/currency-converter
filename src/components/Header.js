import { Navbar, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar className='shadow' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='mx-auto fs-3'>Currency Converter</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;