import {Container, Table, Row, Col} from "reactstrap";
import {CivFaculty} from "../../assets/departments/CivFaculty";
const h1Style = {
    color:'red',
    textAlign: 'center',
  };
const CE = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="section-title">Civil Engineering</h1>

                    
                    <h3 style={h1Style}>
      <a href="https://svuniversity.edu.in/departments_engg/civil-engineering">
        SV University Website Link
      </a>
    </h3> 
    <div className="card">
      <img 
        src="https://svuniversity.edu.in/storage/2021/12/civil-1024x293.jpg" 
        className="card-img-top" 
        alt="Electrical and Electronics Engineering"/>
        <br/>
        <a href="https://svuniversity.edu.in/storage/2023/02/CIVIL.pdf">
        <b>Download Department brochure </b>
        </a> 
    </div>
    <h3 style={{color:'Green'}}>Vision</h3>

<p>To produce globally competitive and committed Civil Engineers with ethical values to cater to the needs of the society and strive for sustainable development through research and innovation.</p>

<h3 style={{color:'Green'}}>Mission</h3>

<p>1. To impart quality education with the support of state-of-art Infrastructure and faculty.</p>

<p>2. To inculcate inquisitiveness, infuse training and research for the societal development.</p>  

<p>3. To address growing needs of sustainable infrastructure development.</p>

<p>4. To provide technical advice and support to the industry.</p>

<p>5. To provide awareness of global economic problems and contribute to Nation building.</p>

<p>6. To provide entrepreneurial skills for the upliftment of the country.</p>

<h3 style={{color:'Green'}}>Programme Educational Objectives (PEOs)</h3>

<p><b>PEO1</b> - To provide students with the fundamental, technical knowledge and skills in mathematics, sciences and engineering to recognize, analyze and solve complex problems in the areas of Structural, Geotechnical, Hydraulics and Water Resources, Transportation and Environmental engineering.</p>

<p><b>PEO2</b> - To provide students with individual working skills and practical experience and to fulfill their professional duties and communicate effectively in teamwork, ethical thinking, technical leadership, and lifelong learning.</p>

<p><b>PEO3</b> - To make the students responsible professionals to work in various positions in industry or government and/or succeed in graduate or other professional organizations.</p>

<p><b>PEO4</b> - To train the students to become engineers, managers, scientists, researchers and innovators and make substantial contributions to the society.</p>

<p><b>PEO5</b> - To guide the students to use modern tools to solve complex engineering problems.</p>

<p><b>PEO6</b> - To make the students to strive for the improvement of the quality of life and improve the standard of living by providing environmental sustainability.</p>

<h3 style={{color:'Green'}}>Programme Outcomes (POs)</h3>

<p><b>PO1</b> - Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and civil engineering specialization to solve complex engineering problems.</p>
<p> <b>PO2</b> - Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>
<p><b>PO3</b>  - Design solutions: Design solutions for complex engineering problems meeting specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</p>
<p><b>PO4</b>  - Investigations: Conduct investigations of complex problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.</p>
<p> <b>PO5</b> - Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p>
<p> <b>PO6</b> - Engineer and society: Assess societal, health, safety, legal and cultural issues and consequent responsibilities relevant to professional engineering practice.</p>
<p> <b>PO7</b> - Environment and sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of sustainable development.</p>
<p> <b>PO8</b> - Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.</p>
<p> <b>PO9</b> - Individual and teamwork: Function effectively as an individual, and as a member or leader in diverse teams and multidisciplinary settings.</p>
<p><b>PO10</b>  - Communication: Communicate effectively on complex engineering activities with the engineering community and society at large.</p>
<p><b>PO11</b>  - Project management: Demonstrate knowledge and understanding of engineering and management principles and apply these to manage projects and in multidisciplinary environments.</p>
<p><b>PO12</b>  - Life-long learning: Recognize the need for, and engage in life-long learning in the context of technological change.</p>

<h3 style={{color:'Green'}}>Programme Specific Outcomes (PSOs)</h3>

<p> <b>PSO1</b> - Specify, design, test and evaluate foundations, superstructures for residences, public buildings, industries, irrigation structures, transportation systems and environmental engineering systems.</p>

<p><b>PSO2</b> - Develop state-of-art skills for using modern tools, as an entrepreneur in the domain or multidisciplinary environments.</p>
                    

                </Col>

            </Row>
            <Row>
                <Col>
                    <h2
                        style={{
                        width: "80%",
                        margin: "auto"
                    }}>Faculty Details- Civil Engg</h2>
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
                                <td>Prof. D.V. Prasada Rao</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(PG)</th>
                                <td> Prof. I.V. Ramana Reddy</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(UG)</th>
                                <td>Prof. Ch. Sudha Rani</td>
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

                            {CivFaculty.map((details, index) => (
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
export default CE;