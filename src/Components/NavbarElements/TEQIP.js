import { Container, Table ,Row, ListGroup, ListGroupItem} from "reactstrap";
import {data} from "../../assets/DBStatic/teqip"
import {bog_names} from "../../assets/DBStatic/bog_names"
import { bog_pdf_names } from "../../assets/DBStatic/bog_pdf_names";
const TEQIP = ()=>{
    console.log(data)
    return(
    
         
          <section id="about">
        <div class="inner-width" id="about">
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
    
      
         <Table  hover style={{margin:"auto",marginBottom:"20px",width:"85%"}} >
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
     
     
<h1 style={{paddingTop:40,paddingBottom:20,paddingLeft:50}}> Board of Governors</h1>

    
    <Table hover style={{margin:"auto",marginBottom:"20px",width:"85%"}}>
    <thead>
        <th>Position</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        
    </thead>
    <tbody>
          {bog_names.map((bog,index)=>(
              <tr>
                  <th>{bog.position}</th>
                  <td>{bog.Name}</td>
                  <td>{bog.Email}</td>
                  <td>{bog.Phone}</td>
              </tr>
          ))}
    </tbody>
</Table>
<h2 style={{paddingLeft:50  ,paddingTop:40,paddingBottom:20}}> BOG RESOLUTIONS</h2>
<ListGroup style={{marginLeft:"10%",width:"65%"}}>

    {bog_pdf_names.map((name,index)=>(
        <ListGroupItem key={index} style={{paddingLeft:80}}>
            <a href={name.Filename}>{name.text}</a>
            
        </ListGroupItem>
    ))}
    </ListGroup>
     </section> 

    

    )
}
export default TEQIP;