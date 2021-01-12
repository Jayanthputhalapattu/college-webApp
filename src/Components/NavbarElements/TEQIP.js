import { Container, Table ,Row, ListGroup, ListGroupItem, Col} from "reactstrap";
import {data} from "../../assets/DBStatic/teqip"
import {bog_names} from "../../assets/DBStatic/bog_names"
import { bog_pdf_names } from "../../assets/DBStatic/bog_pdf_names";
import { teqipFileInfo } from "../../assets/DBStatic/teqipFileInfo";
const TEQIP = ()=>{
    console.log(data)
    return(
    
         <Container style={{paddingTop:100}}>  
<Row>
<Col ><img src="/teqip.png" width="200" height="90" alt="#"/></Col>
    <Col><h2>Welcome to Official page of TEQIP III of SVUCE</h2></Col>
    
    <p>Technical Education Quality Improvement Programme is a project of Government of India assisted by World Bank. The project was implemented to improve the quality of education in the technical institutions of India.</p>
</Row>

             <Row>
             <Table hover responsive bordered>
         <thead>
             <th>Phase</th>
             <th>Objectives</th>
             <th>Finanacial Outlay</th>
             <th>Major Activities</th>
             <th>Remarks</th>
         </thead>
    <tbody>
        {data.map((teqdata,index)=>(
            <tr key={index}>
                <th>{teqdata.phase}</th>
                <td >{teqdata.objectives}</td>
                <td>{teqdata.FinancialOutlay}</td>
                <td>{teqdata.MajorActivities}</td>
                <td>{teqdata.remarks}</td>
            </tr>
        ))}
    </tbody>
</Table>
             </Row>
             <h2>Board of Governors</h2>
<Row>
<Table hover responsive bordered>
    <thead>
        <th>S.No.</th>
        <th>Name</th>
        <th>Position</th>
    </thead>
    <tbody>
          {bog_names.map((bog,index)=>(
              <tr>
                  <th>{index +1}</th>
                  <td>{bog.Name} {bog.Email} {bog.Phone}</td>
                  <td>{bog.position}</td>
              </tr>
          ))}
    </tbody>
</Table>
</Row>
   <h3>SVU Annual Report</h3> 
   <ListGroup>
       {teqipFileInfo.map((Report,index)=>(
           <ListGroupItem style={{paddingLeft:80}}><a href={Report.fileSource}>{Report.Heading}</a></ListGroupItem>
        
       ))}
   </ListGroup>
    
<h2> BOG RESOLUTIONS</h2>
<ListGroup>

    {bog_pdf_names.map((name,index)=>(
        <ListGroupItem key={index} style={{paddingLeft:80}}>
            <a href={name.Filename}>{name.text}</a>
            
        </ListGroupItem>
    ))}
    </ListGroup>
    {/* //  </section>  */}
    </Container>
    

    )
}
export default TEQIP;