import {Col, Container, Table, Row} from "reactstrap";

import {EceFaculty} from "../../assets/departments/EceFaculty";

const Ece = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="section-title">Electronis and Communication Enggineering</h1>
                    <p>
                        The discipline of Electronics and Communication Engineering was started under
                        Department of Electrical and Electronics Engineering in 1971. After a long
                        co-existence with EEE, due to administrative reasons and anticipated accelerated
                        growth ,it is transformed and formed as the Department of Electronics and
                        Communications Engineering in September, 2011.

                    </p>
                    <p>
                        At present the department of ECE is offering a B.Tech(ECE) programme with an
                        intake of 60 , M.Tech (Communication Systems) with an intake of 24 and M.Tech
                        (Signal Processing )with an intake of 24. M.Tech programme with specialization
                        in Signal Processing commenced from 2013-14. Doctoral programmme offered by the
                        department is attracting talented researchers and the research activity is in
                        full swing.
                    </p>
                    <p>
                        Top class students who excelled in state-level entrance examination, EAMCET ,
                        are joining for B.Tech course in the department. With the training they receive
                        in the department, they are performing excellently in competitive examinations
                        like GATE,at national level. The ECE association is conducting invited talks ,
                        group discussions, paper contests to promote the academic zeal among the
                        students. Students are getting good number of placements in companies like
                        WIPRO, TCS, Intergraph, Infotech, TechMahindra, L&T etc..
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
                                <td>Prof. T. Ramashree</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(PG)</th>
                                <td>Prof. B. Anuradha</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(UG)</th>
                                <td>
                                    Prof. G. Srinivasulu</td>
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

                            {EceFaculty.map((details, index) => (
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

export default Ece;