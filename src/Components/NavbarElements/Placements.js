import { Container, Table ,Row, Col,Card, CardText, CardBody,
  CardTitle, CardSubtitle} from "reactstrap";
import  {PlacementsInfo} from "../../assets/DBStatic/PlacementsInfo"
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
  const Placements = () =>{
  return(
      <Container> 
       
       <Row>
         <Col>
         
           <h2 className="section-title">Placements</h2>
            <h2 style={{color:"darkgoldenrod"}}>TRAINING & PLACEMENT CELL</h2>
            
<p>Training & Placement Cell of Sri Venkateswara University College of Engineering(SVUCE) was constituted in the year 1992 and has been serving the student community in training and providing placements.  It is located in the second floor of S.V.U.C.E Main Building, S.V.U. Campus, Tirupati. You may communicate to us by e-mailing to : plcmnt_svuce@yahoo.co.in 
</p>
          <h3 style={{color:"darkgoldenrod"}}>Vision:</h3>
<p>A Training and Placement Cell is found to be necessary to meet the global competition so as to train the students to know the High-Tech environment in addition to the usual academic activities.  Further, to inculcate the need of standards and quality of education by the time they enter the practical world.  Thus students of all disciplines of the University will have the provision to get maximum placement opportunities.  It also endeavors to have continued interaction with the industry to expose the students to practical aspects of technological developments.  It also wishes to provide opportunities to students to attain good communication skills by way of participation in seminars/symposia/conferences.  Further, any accreditation agencies like NAAC, AICTE, UGC, NBA and Public undertakings are insisting to have a Training & Placement Cell.
</p>
          <h3 style={{color:"darkgoldenrod"}}>Mission:</h3>
<p>Our mission is to make the students for self-sustainable development by starting their own industries / consultancy services to make the  Training & Placement Cell by developing continuous interaction with the industries.
</p>
          <h3 style={{color:"darkgoldenrod",textDecoration:'underline'}}>Objectives:</h3>
          <ul>
            <li>            The Placement Cell is offering Training in Aptitude and Soft skills and enhancing the recruitment every year.
</li>
            <li>The Placement Cell is conducting various activities like Group Discussions, Quiz, Mock Tests, Online Test etc. to enhance the employability.
</li>
            <li>Several Companies both Software and Core are visiting the campus and hiring the students in good numbers.
</li>
            <li>Every year 75% – 80% are selected through Campus / Pool Campus Drives.
</li>
            <li>The Alumni are strengthened, the institution will grow in strength and stature.
</li>
            <li>The Companies offlering the annual packages is minimum 3.50 lakhs to maximum 12.00 lakhs.
</li>
            <li>To develop MOUs with the corporate for initiating scholarships and workshops.
</li>
            <li>To strengthen and achieve maximum placements for the students of all disciplines.
</li>
            
          </ul>

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