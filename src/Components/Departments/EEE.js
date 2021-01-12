import { Table } from "reactstrap";
import { EeeFaculty } from "../../assets/departments/EeeFaculty";

const EEE = () =>{
  return(
    <section id="about">
    <div class="inner-width">
        <h1 class="section-title">Electrical & Electronics Engineering</h1>
        <div class="about-content">
            {/* <!-- <img src="" alt="" class="about-pic"/> --> */}
            <div class="about-text">
                {/* <h2></h2> */}
               <p>
               The department of Electrical & electronics Engineering has made rapid strides in the field of teaching and research since its inception in 1959. The department offers B.Tech in Electrical and Electronics Engineering with an intake of 60 ; MTech in Power Systems with an intake of 24. The faculty are well qualified and visited countries like USA, UK, Canada, Iraq and Malaysia. The department had produced 37 PhD degrees and 41 are in progress.
                </p> 
               <p>
               With well designed curricula and good laboratory facilities, sound theoretical and practical knowledge is being imparted to students. The EEE Association , with students as active members will conduct Quizzes, seminars, group discussions as regular programmes. To its credit, the association has successfully organized National level student paper contest SIGMOID for five times, and SPARX regularly every year.
               </p>
               <p>
               Students of the department are securing top ranks in national level tests like GATE, IES consistently. A good number of students are getting admission in high ranking institutions in India and abroad excelling in GRE and TOEFL.
               </p>
               <p>
               Three research projects worth 10 lakhs were completed. Faculty of the department is regularly attending conferences, seminars, and workshops. More than 300 research papers were published by the faculty of the department in various journals and conferences.
               </p>
                </div>
            </div>
        </div>

<h2 style={{width:"80%",margin:"auto"}}>Faculty Details</h2>
<Table style={{width:"80%",margin:"auto"}} responsive bordered>
<tbody>
    <tr>
    <th>HOD</th>
    <td></td>
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
    
       {EeeFaculty.map((details,index)=>(
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
</section>
  )
}

export default EEE;