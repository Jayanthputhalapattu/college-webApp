import {Container, Table, Row, Col} from "reactstrap";
import {SCFaculty} from "../../assets/departments/SCFaculty";

const SC = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="section-title">Sciences and Humanities</h1>
                    <p>The Department of Sciences & Humanities (S&H) plays a vital role in grooming the students in their basic knowledge of sciences and humanities courses. The Department comprises six disciplines namely, Mathematics, Physics, Chemistry, English, Managerial Economics and Physical Education. As an integral part of the institute, the prime focus of S&H Department is to provide a conceptual base in Basic Sciences which form a foundation to the Engineering courses. The department caters to the tastes and needs of students of various backgrounds.  Besides curricular activities, the department guides and prepares students for the co-curricular and extra-curricular programs.
<br></br>The department takes pride in having experienced faculty. In view of the rapid development of knowledge and the technological changes, the department of S&H seeks to strengthen the department by integrating it with the engineering departments for a productive knowledge base. The Department of Sciences & Humanities (S&H) routine matters and activities are monitored by the Vice-Principal. </p>
<h2>Vision</h2>	
<p>To promote interdisciplinary knowledge and foundational concepts in applied sciences and humanities.</p>
<h2>Mission</h2>
<p>To become instrumental in providing a strong base to the engineering disciplines and act as an interface between core areas of engineering and basic sciences.</p>
<h2>Goals & Objectives</h2>
<p>To provide a curriculum relevant to Modern Engineering disciplines.<br></br>To encourage faculty to acquire advanced knowledge.<br></br>To synchronize knowledge of sciences with Engineering.</p>
                   

                </Col>

            </Row>
            <Row>
                <Col>
                    <h2
                        style={{
                        width: "80%",
                        margin: "auto"
                    }}>Faculty Details- Sciences and Humanities</h2>
                    <Table
                        style={{
                        width: "80%",
                        margin: "auto"
                    }}
                        responsive
                        bordered>
                        
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

                            {SCFaculty.map((details, index) => (
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
export default SC;