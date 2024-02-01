import { Col, Container, Table, Row } from "reactstrap";
import { EceFaculty } from "../../assets/departments/EceFaculty";

const h1Style = {
    color: 'red',
    textAlign: 'center',
};

const Ece = () => {
    return (
        <Container className="green">
            <Row>
                <Col>
                    <h1 class="section-title">Electronics and Communication Engineering</h1>
                    <h3 style={h1Style}>
                        <a style={{ textDecoration: 'underline' }} href="https://svuniversity.edu.in/departments_engg/electronis-and-communication-enggineering">
                            SV University Website Link
                        </a>
                    </h3>
                    <div className="card">
                        <img
                            src="https://i.imgur.com/HnLcsxo.jpg"
                            className="card-img-top"
                            alt="Electrical and Electronics Engineering"
                        />
                        <br />
                        <a style={{ textDecoration: 'underline' }} href="https://svuniversity.edu.in/storage/2023/02/ECE.pdf">
                            <b>Download Department brochure </b>
                        </a>
                    </div>
                    <h2>Vision</h2>
                    To be a lead department imparting quality and value embedded higher education and research emphasizing freedom of learning and practice.
                    <br />
                    <h2>Mission</h2>
                    <p>
                        Transforming students into full-fledged professionals and to become leaders in dynamic global environment.<br />
                        Augmenting knowledge and technologies in rapidly advancing fields of Electronics and Communication Engineering.<br />
                        Promoting in depth research and create centre of excellence in thrust areas.<br />
                    </p>
                    <h2>Programme Educational Objectives (PEOs)</h2>
                    <p>
                        ECE graduates will<br />
                        <b>PEO1</b>-have adequate analytical capabilities and practical knowledge to attend to the current challenging tasks and to absorb futuristic trends.<br />
                        <b>PEO2</b>-have adequate analytical capabilities and practical knowledge to attend to the current challenging tasks and to absorb futuristic trends.<br />
                        <b>PEO3</b>-able to abreast with the latest hardware and software design techniques and cutting-edge technologies.<br />
                        <b>PEO4</b>-able to enhance the knowledge and skills continually throughout their career and to make them capable to adapt in diverse environments.<br />
                        <b>PEO5</b>-imbibe leadership qualities among the students to take up challenging roles in their career by ensuring professional ethics with high sense of social responsibility.<br />
                    </p>
                    <h2>Programme Outcomes (POs)</h2>
                    Here is the code with only the PO numbers bolded:
                    <p>
                        <b>PO1</b>- Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems related to Electronics & Communication and Engineering.<br />
                        <b>PO2</b>- Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems related to Electronics & Communication Engineering and reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.<br />
                        <b>PO3</b>- Design/development of solutions: Design solutions for complex engineering problems related to Electronics & Communication Engineering and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.<br />
                        <b>PO4</b>- Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.<br />
                        <b>PO5</b>- Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.<br />
                        <b>PO6</b>- The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the Electronics & Communication Engineering professional engineering practice.<br />
                        <b>PO7</b>- Environment and sustainability: Understand the impact of the Electronics & Communication Engineering professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.<br />
                        <b>PO8</b>- Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.<br />
                        <b>PO9</b>- Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.<br />
                        <b>PO10</b>- Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.<br />
                        <b>PO11</b>- Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to manage projects and in multidisciplinary environments.<br />
                        <b>PO12</b>- Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.<br />
                    </p>
                    <h2>Programme specific Outcomes (PSOs)</h2>
                    <p>
                        <b>PSO1</b>- Competence in analysis and design of analog and digital system using hardware and software tools.<br />
                        <b>PSO2</b>- Understand, analyse the present and future generations of wireless communication technologies.<br />
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ width: "80%", margin: "auto" }}>Faculty Details</h2>
                    <Table style={{ width: "80%", margin: "auto" }} responsive bordered>
                        <tbody>
                            <tr>
                                <th>HOD</th>
                                <td>Prof. G. Umamaheswara Reddy</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(PG)</th>
                                <td>Prof. G. Srinivasulu</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(UG)</th>
                                <td>Prof. B. Anuradha</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table style={{ width: "80%", margin: "auto", marginTop: 20 }} hover responsive bordered>
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
                            {EceFaculty.map((details, index) => (
                                <tr>
                                    <td>{details.designation}</td>
                                    <td>{details.Name}</td>
                                    <td>{details.Phone}</td>
                                    <td>{details.Email}</td>
                                    {details.Details === "NA" ? (
                                        <>
                                            <td> NA </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>
                                                <a href={details.Details}>Details</a>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Ece;