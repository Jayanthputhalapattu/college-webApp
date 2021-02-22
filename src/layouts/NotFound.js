import {Col, Container, Row} from "reactstrap"

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p
                        style={{
                        textAlign: "center",
                        fontSize: "200px",
                        color:"#f03c02"
                    }}>
                        404 
                    </p>
                    <div style={{textAlign:"center",fontSize:"24px"}} className="notfound">
                       OOPS! PAGE YOU ARE LOOKING FOR, IS NOT AVAILABLE OR IT IS UNDER DEVELOPMENT
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default NotFound