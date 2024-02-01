import { Container,Row,Col, Card, CardBody, CardTitle, CardSubtitle, Table} from "reactstrap"

const CoursesOffered = () =>{
     return(
<Container className="courses">
    <Row>
        <Col>
        
          <h2 className="section-title">Courses Offered</h2>
          <h4 style={{marginLeft:330}}>B.Tech</h4>
          <Card  style={{maxWidth:1000 ,  marginBottom:40 }} >
 
        <CardBody>
          <CardTitle tag="h5">Courses Offered in B.Tech</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">6 courses</CardSubtitle> 
          <Table bordered responsive>
          <thead>
                   <tr>
                    <th>S.no</th>
                    <th>B.Tech programmes Specialization</th>
                    <th>Code</th>
                    <th>Code No.</th>
                    <th>Intake as per AICTE</th>
                   </tr>
          </thead>
          <tbody>
            <tr>
                   <th>1</th>
                    <th>Chemical Engineering</th>
                    <th>CH</th>
                    <th>01</th>
                    <th>60 + 06 (EWS) + 06 (LES) </th>
            </tr>
            <tr>
                   <th>2</th>
                    <th>Civil Engineering</th>
                    <th>CE</th>
                    <th>02</th>
                    <th>60 + 06 (EWS) + 06 (LES) </th>
            </tr>
            <tr>
                   <th>3</th>
                    <th>Electrical and Electronics Engineering</th>
                    <th>EE</th>
                    <th>03</th>
                    <th>60 + 06 (EWS) + 06 (LES) </th>
            </tr>
            <tr>
                   <th>4</th>
                    <th>Electronics and Communication Engineering </th>
                    <th>EC</th>
                    <th>04</th>
                    <th>60 + 06 (EWS) + 06 (LES) </th>
            </tr>
            <tr>
                   <th>5</th>
                    <th>Mechanical Engineering </th>
                    <th>ME</th>
                    <th>05</th>
                    <th>60 + 06 (EWS) + 06 (LES) </th>
            </tr>
            <tr>
                   <th>6</th>
                    <th>Computer Science & Engineering </th>
                    <th>CS</th>
                    <th>06</th>
                    <th>60 + 06 (EWS) + 06 (LES) </th>
            </tr>
          </tbody>
          </Table>
        </CardBody>
      </Card>

        </Col>
    </Row>
    <Row>
        <Col>
        <h4 style={{marginLeft:330}}>M.Tech</h4>
        <Card style={{maxWidth:1000 ,  marginBottom:40 }}>
 
 <CardBody>
   <CardTitle tag="h5">Courses Offered in M.Tech</CardTitle>
   <CardSubtitle tag="h6" className="mb-2 text-muted">9 courses</CardSubtitle>
   <Table bordered responsive>
          <thead>
                   <tr>
                    <th>S.no</th>
                    <th>Department</th>
                    <th>M.Tech programmes Specialization</th>
                    <th>Code</th>
                    <th>Intake as per AICTE</th>
                   </tr>
          </thead>
          <tbody>
            <tr>
                   <th>1</th>
                    <th>Chemical Engineering</th>
                    <th>Chemical Engineering</th>
                    <th>CH</th>
                    <th>12</th>
            </tr>
            <tr>
                   <th>2</th>
                    <th>Civil Engineering</th>
                    <th>
                      <tr>
                      Geotechnical Engineering
                      </tr>
                      <tr>
                      Structural Engineering
                      </tr>
                    </th>
                    <th>
                    <tr>
                      GE
                      </tr>
                      <tr>
                      SE
                      </tr>
                    </th>
                    <th>
                      <tr>24</tr>
                      <tr>24</tr>
                    </th>
            </tr>
            <tr>
                   <th>3</th>
                    <th>Electrical and Electronics Engineering</th>
                    <th>Power Systems</th>
                    <th>PS</th>
                    <th>18 </th>
            </tr>
            <tr>
                   <th>4</th>
                    <th>Electronics and Communication Engineering </th>
                    <th>
                      <tr>Communication Systems </tr>
                      <tr>Signal Processing</tr>
                    </th>
                    <th>
                      <tr>CM</tr>
                      <tr>SP</tr>
                    </th>
                    <th>
                      <tr>24</tr>
                      <tr>24</tr>
                   </th>
            </tr>
            <tr>
                   <th>5</th>
                    <th>Mechanical Engineering </th>
                    <th>
                      <tr>Industrial Engineering  </tr>
                      <tr>Production Engineering</tr>
                    </th>
                    <th>
                      <tr>IE</tr>
                      <tr>PE</tr>
                    </th>
                    <th>
                      <tr>18</tr>
                      <tr>18</tr>
                   </th>
            </tr>
            <tr>
                   <th>6</th>
                    <th>Computer Science & Engineering </th>
                    <th>Computer Science & Engineering</th>
                    <th>06</th>
                    <th>18 </th>
            </tr>
          </tbody>
          </Table>

   
 </CardBody>
</Card>
        </Col>
    </Row>
</Container>
     ) 
}
export default CoursesOffered