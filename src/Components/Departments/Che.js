import { Container, Table ,Row,Col} from "reactstrap"
import { CheFaculty } from "../../assets/departments/CheFaculty"

const Che=()=>{
    return(
        <Container>
            <Row>
                <Col>
                <h1 className="section-title">Chemical Enggineering</h1>

                <h3 style={{textAlign:"center"}}>
      <a style={{textDecoration:'underline'}} href="https://svuniversity.edu.in/departments_engg/chemical-engineering">
        SV University Website Link
      </a>
    </h3>
    <div className="card">
      <img 
        src="https://svuniversity.edu.in/storage/2022/03/Chemistry-Dept-1024x768.jpg" 
        className="card-img-top" 
        alt="Electrical and Electronics Engineering"/>
        <br/>
        <a style={{textDecoration:'underline'}} href="https://svuniversity.edu.in/storage/2023/02/Chemical-Engineering.pdf">
        <b>Download Department brochure </b>
        </a> 
    </div>

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

        

<h3 style={{color:'Green'}}>Vision</h3>

<p>To be a world class department of chemical engineering in effective teaching and knowledge creation which is seamlessly integrated with bordering sciences and is committed to ignite and propel young minds with passion for originality, innovation and excellence.</p>

<h3 style={{color:'Green'}}>Mission</h3>

<p>1. To train technically competent and socially aware chemical engineers through innovative and rigorous educational programs to meet technological needs of the society.</p>

<p>2. To encourage self-learning, problem solving, inquisitiveness and team work among students.</p>

<p>3. To enable students to develop capabilities needed to perform in multidisciplinary environment.</p> 

<p>4. To promote industry- institute interaction to nurture collaborative and applied research programs.</p>

<p>5. To help students develop a well-rounded personality with qualities of innovative thinking, leadership, entrepreneurship and ethical mind.</p>

<p>6. To create amiable ambience of academics for intellectual pursuit and innovative research</p>


<h3 style={{color:'Green'}} >Program Educational Objectives</h3>

<p>1. To seek career as Chemical engineers in traditional Chemical industries and also in areas of manufacture of newer materials, pharmaceuticals and biological, environmental remediation and development of renewable energy sources.</p>

<p>2. To pursue higher qualification in Chemical Engineering or a related discipline, with a view to become a researcher or an academician.</p>

<p>3. To be able to synthesize a chemical process from simple and even complex chemistry and to translate any chemical process from conceptual to commercial stage.</p>

<p>4. To posses good breadth in scientific and engineering knowledge so as to understand, analyze and to offer novel solutions to problems arising in today’s rapidly changing increasingly technological global society.</p>

<p>5. To be socially conscious chemical engineers through their sensitivity towards impact on environment, energy, security and sustainability.</p>

<h3 style={{color:'Green'}}>Program Outcomes </h3> 


<p>1. To apply principles of conservation, thermodynamics, transport processes, reaction engineering and process control to analyze and design process equipment.</p> 

<p>2. To integrate and apply concepts of mathematics, physics, chemistry and biology to real life situations.</p>


<p>3. To develop mathematical models of chemical engineering systems.</p>

<p>4. To demonstrate computational abilities and use of software tools in design & simulation of process and equipment.</p>

<p>5. To apply techniques of optimization to improve the performance of chemical processes.</p>

<p>6. To analyze equipment and processes for retrofitting and debottlenccking.</p> 

<p>7. To conduct energy audit and suggest strategies for its conservation.</p>

<p>8. To incorporate effective measures for environmental protection and sustainability into chemical process design.</p>

<p>9. To participate in laboratory scale process development and scale up or scale down of processes.</p>

<p>10. To communicate effectively in both verbal and written forms.</p>

<p>11. To adapt to changing seenario and circumstances, with selt confidence.</p>

<p>12. To succeed in competitive examinations like GATE, UPSC</p>
              
            <h2 style={{width:"80%",margin:"auto"}}>Faculty Details</h2>
    <Table style={{width:"80%",margin:"auto"}} responsive bordered>
    <tbody>
        <tr>
        <th>HOD</th>
        <td>Dr. P. Akhila Swathantra</td>
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