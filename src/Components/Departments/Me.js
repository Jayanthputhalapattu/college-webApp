import {Container, Table, Row, Col} from "reactstrap"
import {MeFaculty} from "../../assets/departments/MeFaculty"

const Me = () => {
    return (
        <Container className="green">
            <Row>
                <Col>
                    <h1 class="section-title">Mechanical Engineering</h1>
                    
                    <h3 style={{textAlign:"center"}}>
      <a href="https://svuniversity.edu.in/departments_engg/mechanical-engineering
">
        SV University Website Link
      </a>
    </h3>
    <div className="card">
      <img 
        src="https://svuniversity.edu.in/storage/2021/12/SVU-College-of-Engineering-Workshop-1024x293.jpg" 
        className="card-img-top" 
        alt="..."/>
        <br/>
        <a href="https://svuniversity.edu.in/storage/2023/02/Mechanical.pdf">
        <b>Download Department brochure </b>
        </a> 
    </div>
                    <p>
                        The Department has 10 faculty members, 240 UG students, 36 PG students and 43
                        supporting technical staff. The Department offers academic programmes leading to
                        B.Tech., M.Tech. and Ph.D. degrees. The department is offering two PG programs
                        Industrial Engineering and Production Engineering.</p>
                    <p>
                        The faculty members are in various research areas and they are clustered under
                        three broad specializations - Design, Manufacturing and Thermal Engineering.
                        They have been engaged in research in all the classical areas of Mechanical
                        Engineering and upcoming areas too.
                    </p>
                    <p>
                        The academic activities are supported by 14 laboratories of which four are
                        specialized and research laboratories. The laboratories are refurbished under
                        TEQIP Phase I. The new laboratories established are IC engines laboratory and
                        Flexible manufacturing Systems. The department is focusing major research in the
                        areas of metal cutting, Non-conventional energy resources, composite materials,
                        etc., and also department of mechanical Engineering is revising the courses
                        every two years to meet the industrial requirement. As a consequence every year
                        75% of students from mechanical Engineering are placed in the campus placements
                        and also most of the students are GATE aspirants. The department of Mechanical
                        Engineering has top ten ranks in GATE in its credit in the past years.

                    </p>
                </Col>
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
                                    <td>Dr. V. Diwakar Reddy</td>
                                </tr>
                                <tr>
                                    <th>Chairman BOS(PG)</th>
                                    <td>Dr. P. Venkataramaiah</td>
                                </tr>
                                <tr>
                                    <th>Chairman BOS(UG)</th>
                                    <td>Sri K. Rajesh Babu</td>
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

                                {MeFaculty.map((details, index) => (
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
            </Row>
        </Container>
    )
}
export default Me;