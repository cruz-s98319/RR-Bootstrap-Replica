import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StoreListing() {
    return (
        <div>
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }} />
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                <Row>
                    <Col xs=".5" >
                        <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5">
                        <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Image src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>

        </div>
    )
}

export default StoreListing