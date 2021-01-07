import { Container, Table } from "react-bootstrap";
import {data} from "../../assets/DBStatic/teqip"
const TEQIP = ()=>{
    console.log(data)
    return(
     <div>
          <section id="about">
        <div class="inner-width">
            <h1 class="section-title">TEQIP III</h1>
            <div class="about-content">
                <img src="/teqip.png"  class="about-pic" />
                <div class="about-text">
                    <h2>This is official page of TEQIP III of SVUCE</h2>
                    
                    <p>
                        Technical Education Quality Improvement Programme is a project of Government of India assisted by World Bank. The project was implemented to improve the quality of education in the technical institutions of India.
                    </p>
                </div>
            </div>
     </div>
     
     {/* Table starts */}
     <Container fluid>
     <Table striped bordered hover  style={{margin:"auto",marginBottom:"20px"}}>
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
     </Container>
   </section> 
     </div>

    )
}
export default TEQIP;