import { Container, Table ,Row, Col,Card, CardText, CardBody,
  CardTitle, CardSubtitle} from "reactstrap";
import  {PlacementsInfo} from "../../assets/DBStatic/PlacementsInfo"
  const Placements = () =>{
  return(
      <Container> 
       
       <Row>
         <Col>
           <h2 className="section-title">Placements</h2>
           <Card style={{marginBottom:40}}>
             <CardBody>
             <CardTitle tag="h4">Placement Office details</CardTitle>
             <CardSubtitle>Prof. M. SriMurali</CardSubtitle>
             <CardSubtitle>msrimurali@yahoo.co.in</CardSubtitle>
             
             <CardSubtitle>(+91)-9603078920</CardSubtitle>
             <CardSubtitle>Main Building, II floor, SVUCE, Tirupati, 517 502</CardSubtitle>
             </CardBody>
          
          </Card>
           {PlacementsInfo.map((placementYear,index)=>(
           <Card style={{marginBottom:40,paddingBottom:20}} >
           <CardBody>
             <CardTitle tag="h5">Year {placementYear.year}</CardTitle>
             <CardSubtitle tag="h6" className="mb-2 text-muted">Statistics</CardSubtitle>
             <CardText>
               <Table bordered responsive>
                 <thead>
                   <tr>
                     <th>Branch</th>
                    <th>Total No.of Students</th>
                    <th>No.of students Placed</th>
   
                   </tr>
                 </thead>
                 <tbody>
                   
                   <tr>
                     <th>CHE</th>
                     <td>{placementYear.CHE[0]}</td>
                     <td>{placementYear.CHE[1]}</td>
                   </tr>
                   <tr>
                     <th>CIV</th>
                     <td>{placementYear.CIV[0]}</td>
                     <td>{placementYear.CIV[1]}</td>
                   </tr>
                   <tr>
                     <th>EEE</th>
                     <td>{placementYear.EEE[0]}</td>
                     <td>{placementYear.EEE[1]}</td>
                   </tr>
                   <tr>
                     <th>ECE</th>
                     <td>{placementYear.ECE[0]}</td>
                     <td>{placementYear.ECE[1]}</td>
                   </tr>
                   <tr>
                     <th>MEC</th>
                     <td>{placementYear.MEC[0]}</td>
                     <td>{placementYear.MEC[1]}</td>
                   </tr>
                   <tr>
                     <th>CSE</th>
                     <td>{placementYear.CSE[0]}</td>
                     <td>{placementYear.CSE[1]}</td>
                   </tr>
                 </tbody>
                 
               </Table>
             </CardText>
       
           </CardBody>
           <a href={placementYear.fileLink} style={{paddingLeft:20,color:"red"}}>See the Statistics in detail</a>
         </Card>
           ))}
           

         </Col>
       </Row>
        </Container>
  )
} 
export default Placements