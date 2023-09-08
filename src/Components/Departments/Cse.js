import {Container, Table, Row, Col} from "reactstrap";
import {cseFaculty} from "../../assets/departments/CseFacultyDetails";

const Cse = () => {
    return (
        <Container className="green">
            <Row>
                <Col>
                    <h1 class="section-title">Computer Science and Engineering</h1>

                    <h3 style={{textAlign:"center"}}>
      <a style={{}}href="https://svuniversity.edu.in/departments_engg/computer-science-and-engineering">
        SV University Website Link
      </a>
                   </h3>
                   <div className="card">
      <img 
        src="https://svuniversity.edu.in/storage/2022/11/photo-2-1024x596.jpg" 
        className="card-img-top" 
        alt="Electrical and Electronics Engineering"/>
        <br/>
        <a href="https://svuniversity.edu.in/storage/2023/02/CSE.pdf">
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
                  <p>
                    • To impart Computer Science and Engineering education by utilizing state of the art computing facilities.<br/>
• To infuse scholarly inquisitiveness, professional behavior and ethical values among students and research scholars, thereby making an imprint in the technological, economic and social development of the nation.<br/>
• To impart high quality professional training of international standards to meet the current and future demands of the industry and academia.<br/>
• To develop adequate e-infrastructure, environment and culture for the state-of-the-art research work in Computer Science and Engineering.<br/>
                  </p>




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