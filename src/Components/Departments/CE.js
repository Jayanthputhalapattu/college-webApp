import {Container, Table, Row, Col} from "reactstrap";
import {CivFaculty} from "../../assets/departments/CivFaculty";

const CE = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="section-title">Civil Engineering</h1>
                    <p>
                        The Department of Civil Engineering was established in 1959 with B.Tech. Course
                        in Civil Engineering with an intake of 40 students. Subsequently M.Tech.
                        programme was introduced in 1971 with four specializations viz. Environmental
                        Engineering, Geotechnical Engineering, Hydraulics and Water Resources
                        Engineering and Structural Engineering. So far 42 Ph.D. and 350 M.Tech. Degrees
                        were awarded by the Department and Ph.D. works are in progress. Every year more
                        than 60% of students of this Department obtain M.Tech. admissions in I.I.Sc. and
                        I.I.T.s in various Civil Engineering disciplines. Centre for Rural Development
                        and Appropriate Technology (CERDAT) was established in 1989 and is involved in
                        conducting several awareness and training programmes for the rural youth. Water
                        Technology Centre was established with financial assistance from UGC under
                        DSA-SAP Programme in the year 1994. Committee of strengthening of Infrastructure
                        for Science and Technology (COSIST) was sanctioned by UGC in the year 2000.
                    </p>
                    <p>
                        Faculty of the Department visited countries like USA, Australia, Germany, South
                        Korea, France, U.K., Thailand, Singapore etc. and presented / published 300
                        research papers in Journals and Conferences. Six research projects worth Rs.136
                        lakhs were completed and six more worth Rs.143 lakhs are under progress. The
                        Department has brought out 15 books on various subjects in Civil Engineering,
                        Twelve Conferences / Seminars were organized by the Department.

                    </p>
                    <p>
                        The Department has a wide consultancy base including Governmental and Public /
                        Private sector organizations enriching the financial reserves of the University.

                    </p>

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
                                <td>Prof. D.V.S.N. Murthy</td>
                            </tr>
                            <tr>
                                <th>Chairman BOS(PG)</th>
                                <td></td>
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