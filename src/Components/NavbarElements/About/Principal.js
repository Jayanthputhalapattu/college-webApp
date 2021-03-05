import {Col, Container, Table, Row} from "reactstrap";
import  {P_details} from "./P_details"
const Principals = () =>{
   return(
       <Container>
            <Row>
                <Col>
                    <h1 class="section-title">Principals</h1>
                    
                </Col>
            </Row>
            <Row>
                <Col>

                    <h2
                        style={{
                        width: "80%",
                        margin: "auto"
                    }}>Succesive Principals</h2>
                  
                    <Table
                        style={{
                        width: "80%",
                        margin: "auto",
                        marginTop: 20
                    }}
                        hover
                        responsive
                        bordered>
                        
                        <thead>
                          <tr>
                              <th>Name</th>
                               <th>Period</th>
                                <th>Phone</th>
                                 <th>Email</th>
                           </tr>
                           </thead>
                        <tbody>
                           
                            {P_details.map((details, index) => (
                                <tr>
                                   
                                    <td>{details.Name}</td>
                                    <td>{details.Period}</td>
                                    <td>{details.Phone}</td>
                                    <td>{details.Email}</td>
                                    
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
   )
}
export default Principals;