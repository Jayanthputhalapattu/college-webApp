import { Container, Table ,Row,Col} from "reactstrap"
import { CheFaculty } from "../../assets/departments/CheFaculty"

const Che=()=>{
    return(
        <Container>
            <Row>
                <Col>
                <h1 className="section-title">Chemical Enggineering</h1>
                <p>
                    To be a world class department of chemical engineering in effective teaching and knowledge creation which is seamlessly integrated with bordering sciences and committed to ignite and propel young minds with passion for originality, innovation and excellence.
    
                   </p>
                   <p>
                   Department of Chemical Engineering, with 122 papers and total citation of 973 , is placed at Rank 17 National Level   and Rank 7 in South Zone According to National Institute of Science Technology and Development Studies , CSIR, NewDelhi
<b style={{paddingLeft:20}}>Basis: Publication OutputPeriod: 1998-2008</b>

                   </p>
                </Col>
            </Row>
            <Row>
            <h2 style={{width:"80%",margin:"auto"}}>Faculty Details</h2>
    <Table style={{width:"80%",margin:"auto"}} responsive bordered>
    <tbody>
        <tr>
        <th>HOD</th>
        <td>Dr. B. Sarath Babu</td>
    </tr>
    <tr>
        <th>Chairman BOS(PG)</th>
        <td></td>
    </tr>
    <tr>
        <th>Chairman BOS(UG)</th>
        <td></td>
    </tr>
    </tbody>
    </Table>
    <Table style={{width:"80%",margin:"auto",marginTop:20}} hover responsive bordered>
    <thead>
        <tr>
        <th>Designation</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Details</th>
    </tr>
    </thead>
    <tbody>
        
           {CheFaculty.map((details,index)=>(
               <tr>
               <td>{details.designation}</td>
               <td>{details.Name}</td>
               <td>{details.Phone}</td>
               <td>{details.Email}</td>
             {details.Details==="NA" ? (<><td>NA</td></>):(<><td><a href={details.Details} >Details</a></td></>)}  
               </tr>
           ))}
        
    </tbody>
    </Table>
            </Row>
        </Container>

    )
}
export default Che