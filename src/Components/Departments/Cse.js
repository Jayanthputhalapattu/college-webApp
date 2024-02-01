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
        
    </div>
    <h3 style={{color:'Green'}}>
                      About C.S.E Department
                  </h3>
                  <p>
                    The Department of Computer Science and Engineering (CSE) was started in the year 1986-87. This department has been offering undergraduate course in the Computer Science and Engineering and Post Graduate Course in Computer Science and Engineering (CSE) started in year 2005 respectively. Several research scholars are pursuing Ph.D. Programs in the areas viz. Machine Learning, Deep Learning, Big Data, Distributed Computing, Cloud Computing, Computer Networks, Natural Language Processing, Speech Processing, Software Architecture and Software Testing.
                  </p>
                  <h3>
                    Vision of the Department
                  </h3>
                  <p>
                   To be one of the premier departments for achieving excellence in teaching and research with social responsibility and for producing innovative technical graduates in Computer Science and Engineering.
                  </p>
                  <h3>
                    Mission of the Department
                  </h3>
                  <ol>
  <li>
    To impart Computer Science and Engineering education by utilizing state of the art computing facilities.
  </li>

  <li>
   To inculcate inter-disciplinary approach with reference to academic, industrial and research-oriented activities, infusing scholarly inquisitiveness, making an imprint in the technological, economic and social development of the nation.
  </li>

  <li>
    To impart quality technical education of international standard in terms of providing adequate exposure to quality & methods, e-technologies and work flow automation in particular.
  </li>

  <li>
   To develop adequate expertise within the department, to help and guide all other departments of the institution, constituent and affiliate colleges of the University, dealing with computer science education.
  </li>

  <li>
 To develop capabilities within the department to help and guide industries with respect to the IT requirements.

  </li>
</ol>
<h2 style={{color:'Green'}}>Programme Educational Objectives (PEOs)</h2>

    <li><strong>PEO1:</strong> To Provide quality learning through effective teaching-learning process enabled by free and open learning environment in turn Producing high quality graduate.</li>
    <li><strong>PEO2:</strong> To Prepare students for properly positioning them in the society(academic, industrial, research and entrepreneurial areas in particular) with reference to trans-disciplinary activities, regular professional activities with high degree of innovation, competence, and commitment</li>
    <li><strong>PEO3:</strong> To create broad based expertise in the areas of CSE in general and a few (minimum of 4 to 5 ) focused areas for in-depth study and high quality research such as e-technologies, very large databases, data mining / warehousing, networking, security, high performance computing systems, embedded systems, software engineering methodology, s/w quality testing, multimedia, theoretical computer science aspects and so on.</li>
    <li><strong>PEO4:</strong> To inculcate the culture of Lifelong learning during the evolution of the student to a full-fledged professional through educating the applicant about the ever increasing needs of the society, technological trends and ethical values.</li>
    <li><strong>PEO5:</strong> To set up a sense of efficient administrative / economical practices, to evolve the applicant with the required leadership qualities and managerial skills.</li>

<h3 style={{color:'Green'}}>Program Outcomes <b>(POs)</b></h3>
<ol>
<li><b>Engineering knowledge:</b> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>

<li><b>Problem analysis:</b> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
</li>

<li><b>Design/development of solutions:</b> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>

<li><b>Conduct investigations of complex problems:</b> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>

<li><b>Modern tool usage:</b> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>

<li><b>The engineer and society:</b> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>

<li><b>Environment and sustainability:</b> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>

<li><b>Ethics:</b> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>

<li><b>Individual and team work:</b> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>

<li><b>Communication:</b> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>

<li><b>Project management and finance: </b>Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>

<li><b>Life-long learning:</b> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
</ol>
 <h3  style={{color:'Green'}}>Program Specific Outcomes<b>(PSOs)</b></h3>

    <li>
        <b>PSO1:</b> Empowering the students for continuous learning and deliver efficient solutions for emerging challenges in the computation domain.
   </li>
   <li>

<b>PS02:</b>Ability to design, develop and implement problems of current research areas.


    </li>




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
                                <td>Prof. Ch D V Subba Rao</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(PG)</th>
                                <td>Prof. M. Humera Khanam</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(UG)</th>
                                <td>Prof. M. Humera Khanam</td>
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