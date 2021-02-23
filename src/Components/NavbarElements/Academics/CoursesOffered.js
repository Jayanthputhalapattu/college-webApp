import { Container,Row,Col, Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"

const CoursesOffered = () =>{
     return(
<Container>
    <Row>
        <Col>
        <h3 style={{color:"red",textAlign:"center"}}>NOTE : THIS IS PAGE IS UNDER DEVELOPEMENT</h3>
          <h2 className="section-title">Courses Offered</h2>
          <h4>B.Tech</h4>
          <Card style={{marginBottom:40}}>
 
        <CardBody>
          <CardTitle tag="h5">Courses Offered in B.Tech</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">6 courses</CardSubtitle>
          <p>CHE</p>
          <p>CHE</p>
          <p>CHE</p>
          <p>CHE</p>
          <p>CHE</p>
          <p>CHE</p>

          
        </CardBody>
      </Card>
        </Col>
    </Row>
    <Row>
        <Col>
        <h4>M.Tech</h4>
        <Card style={{marginBottom:40}}>
 
 <CardBody>
   <CardTitle tag="h5">Courses Offered in M.Tech</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">6 courses</CardSubtitle>
   <p>CHE</p>
   <p>CHE</p>
   <p>CHE</p>
   <p>CHE</p>
   <p>CHE</p>
   <p>CHE</p>

   
 </CardBody>
</Card>
        </Col>
    </Row>
</Container>
     ) 
}
export default CoursesOffered