import {Container, Table, Row, Col} from "reactstrap";
import {cseFaculty} from "../../assets/departments/CseFacultyDetails";

const Cse = () => {
    return (
        <Container className="green">
            <Row>
                <Col>
                    <h1 class="section-title">Computer Science and Engineering</h1>

                    <h3 style={{textAlign:"center"}}>
      <a style={{textDecoration:'underline'}} href="https://svuniversity.edu.in/departments_engg/computer-science-and-engineering">
        SV University Website Link
      </a>
                   </h3>
                   <div className="card">
      <img 
        src="https://i.imgur.com/2gdk64H.jpg" 
        className="card-img-top" 
        alt="Electrical and Electronics Engineering"/>
        <br/>
        <a style={{textDecoration:'underline'}}  href="https://svuniversity.edu.in/storage/2023/02/CSE.pdf">
        <b>Download Department brochure </b>
        </a> 
    </div>
    <h3 style={{color:'Green'}}>
                      About C.S.E Department
                  </h3>
                  <p>
                    The Department of Computer Science and Engineering (CSE) was started in the year 1986-87. This department has been offering undergraduate course in the Computer Science and Engineering and Post Graduate Course in Computer Science and Engineering (CSE) started in year 2005 respectively. Several research scholars are pursuing Ph.D. Programs in the areas viz. Machine Learning, Deep Learning, Big Data, Distributed Computing, Cloud Computing, Computer Networks, Natural Language Processing, Speech Processing, Software Architecture and Software Testing.
                  </p>
                  <h3>
                    Vision
                  </h3>
                  <p>
                    To be one of the premier departments for achieving excellence in teaching and research with social responsibility and for producing innovative technical graduates in Computer Science and Engineering.
                  </p>
                  <h3>
                    Mission
                  </h3>
                  <ol>
  <li>
    Utilize state of the art computing facilities to impart Computer Science and Engineering education.
  </li>

  <li>
    Inculcate an inter-disciplinary approach to academic, industrial and research oriented activities. Infuse scholarly inquisitiveness. Make an imprint on the technological, economic and social development of the nation.
  </li>

  <li>
    Impart international quality technical education by providing adequate exposure to quality, methods, e-technologies and workflow automation.
  </li>

  <li>
    Develop expertise within the department to help and guide all other departments, constituent and affiliated colleges dealing with computer science education.
  </li>

  <li>
    Develop capabilities within the department to help and guide industries with their IT requirements. 
  </li>
</ol>
 <h2 style={{color:'Green'}}>Programme Educational Objectives (PEOs)</h2>
 <ol> <li><strong>PEO1:</strong> To Provide quality learning through effective teaching-learning process enabled by free and open learning environment in turn Producing high quality graduate.</li> <li><strong>PEO2:</strong> To Prepare students for properly positioning them in the society(academic, industrial, research and entrepreneurial areas in particular) with reference to trans-disciplinary activities, regular professional activities with high degree of innovation, competence, and commitment</li> <li><strong>PEO3:</strong> To create broad based expertise in the areas of CSE in general and a few (minimum of 4 to 5 ) focused areas for in-depth study and high quality research such as e-technologies, very large databases, data mining / warehousing, networking, security, high performance computing systems, embedded systems, software engineering methodology, s/w quality testing, multimedia, theoretical computer science aspects and so on.</li> <li><strong>PEO4:</strong> To inculcate the culture of Lifelong learning during the evolution of the student to a full-fledged professional through educating the applicant about the ever increasing needs of the society, technological trends and ethical values.</li> <li><strong>PEO5:</strong> To set up a sense of efficient administrative / economical practices, to evolve the applicant with the required leadership qualities and managerial skills.</li> </ol>
 <h3  style={{color:'Green'}}> Program Outcomes</h3>
 <ol>
<li>Apply computing, math, science, and engineering fundamentals appropriately.</li>

<li>Analyze problems and formulate computing requirements for solutions.</li>

<li>Design, implement, and evaluate computer systems and processes considering public health/safety, cultural, societal, and environmental factors.</li>

<li>Design and conduct experiments and analyze/interpret data.</li>

<li>Use current techniques, skills, and modern tools necessary for computing practice.</li>

<li>Analyze local and global impacts of computing on individuals, organizations, and society.</li>

<li>Understand contemporary computing issues.</li>

<li>Understand professional, ethical, legal, security and social issues/responsibilities.</li>

<li>Function effectively individually and on diverse, multidisciplinary teams to accomplish a common goal.</li>

<li>Communicate effectively with a range of audiences.</li>

<li>Recognize the need for and engage in continuing professional development.</li>

<li>Understand and apply engineering and management principles as a member/leader of a team and to manage projects.</li>
</ol>
 <h3  style={{color:'Green'}}>Program Specific Outcomes</h3>
 <ol>
    <li>
        <b>PSO1:</b> Empowering the students for continuous learning and acquire skills to deliver efficient solutions for 
Emerging challenges in the computation domain.
   </li>
   <li>

<b>PS02</b>Ability to design, develop, implementation and decision making skills in current research areas in real 
world problems.

    </li>
 </ol>



                </Col>
            </Row>
            <Row>
                <Col>
                    <h2
                        style={{
                        width: "80%",
                        margin: "auto"
                    }}>Faculty Details</h2>
                    <Table
                        style={{
                        width: "80%",
                        margin: "auto"
                    }}
                        responsive
                        bordered>
                        <tbody>
                            <tr>
                                <th>HOD</th>
                                <td>Prof. M. Humera Khanam</td>
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
                                <th>Designation</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cseFaculty.map((details, index) => (
                                <tr>
                                    <td>{details.designation}</td>
                                    <td>{details.Name}</td>
                                    <td>{details.Phone}</td>
                                    <td>{details.Email}</td>
                                    {details.Details === "NA"
                                        ? (<><td> NA </td></>)
                                        : ( <><td> <a href={details.Details}>Details</a> </td></>)}
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}
export default Cse;