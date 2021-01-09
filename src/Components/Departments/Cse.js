import { Table } from "reactstrap";
import { cseFaculty } from "../../assets/departments/CseFacultyDetails";

const Cse  = ()=>{
    return(
      
            <section id="about">
        <div class="inner-width">
            <h1 class="section-title">Computer Science and Engineering</h1>
            <div class="about-content">
                {/* <!-- <img src="" alt="" class="about-pic"/> --> */}
                <div class="about-text">
                    {/* <h2></h2> */}
                    
                    <p>
                    The Department of Computer Science and Engineering was established in 1986 offering B.Tech Program with initial intake of 20. Now the BTech (CSE) intake is increased to 40. The post graduate program i.e. MTech (CSE) was started in the year 2005 with initial intake of 18 and now it is increased to 25. The MTech students, qualified in GATE receive Rs 8000 fellowship per month from AICTE. The PhD admissions in CSE started in the year 2002 and there are nearly 34 scholars are working for their doctoral degree. The thrust areas of research of the department are Natural Language Processing, Distributed Systems, Grid Computing, Artificial Intelligence, Software Architecture, Data Mining, Wireless Networks and Speech Processing.  </p>
                </div>
                </div>
            </div>

<h2 style={{width:"80%",margin:"auto"}}>Faculty Details</h2>
<Table style={{width:"80%",margin:"auto"}}>
    <tbody>
        <tr>
        <th>HOD</th>
        <td>Prof. P Venkata Subba Reddy</td>
    </tr>
    <tr>
        <th>Chairman BOS(PG)</th>
        <td>Prof. ch D V Subba Rao</td>
    </tr>
    <tr>
        <th>Chairman BOS(UG)</th>
        <td>Prof.ch D V Subba Rao</td>
    </tr>
    </tbody>
</Table>
<Table style={{width:"80%",margin:"auto",marginTop:20}} dark>
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
        
           {cseFaculty.map((details,index)=>(
               <tr>
               <td>{details.designation}</td>
               <td>{details.Name}</td>
               <td>{details.Phone}</td>
               <td>{details.Email}</td>
               <td><a href={details.Details} >Details</a></td>
               </tr>
           ))}
        
    </tbody>
</Table>
</section>

     
    )
}
export default Cse;