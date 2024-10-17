import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function TopBar () {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                    <img src="https://placehold.co/150x50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search products and stores"
                                className=" mr-sm-2"
                            />
                        </Col>
                    </Row>
                </Form>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopBar