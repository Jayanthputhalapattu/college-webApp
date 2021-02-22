import {Col, Container, Row} from "reactstrap"

const Alumni = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3
                        style={{
                        borderBottom: "2px solid #f03c02",
                        paddingTop: 20
                    }}>SVUCE Alumni Association</h3>
                    <p>Sri Venkateswara University College of Engineering (SVUCE) Alumni Association
                        was started in 1965. It is formally registered in the year.</p>
                    <h3
                        style={{
                        borderBottom: "2px solid #f03c02",
                        paddingTop: 20
                    }}>Objectives of the SVUCE Alumni Association:</h3>

                    <h4 style={{
                        paddingTop: 20
                    }}>1. Welfare of SVUCE Alumni</h4>
                    <ul>
                        <li>Provide moral support to SVUCE Alumni when they are in need, professionally
                            or personally</li>
                        <li>Encourage and support entrepreneurship among SVUCE Alumni</li>
                        <li>Encourage social networking and support gatherings for SVUCE Alumni, locally
                            all across the globe</li>
                    </ul>

                    <h4 style={{
                        paddingTop: 20
                    }}>2. Welfare of SVUCE</h4>
                    <ul>
                        <li>Encourage SVUCE Spirit among the budding engineers of SVUCE and pass it to
                            the future generations</li>
                        <li>Encourage and support SVUCE budding engineers to participate in the top
                            competitive examinations like IES, IAS, IPS, GATE, CAT or others that IITians
                            compete</li>

                        <li>Encourage the SVUCE Alumni to support SVUCE financially to retain its
                            academic excellence</li>
                        <li>To maintain a directory of the alumni</li>
                        <li>Help the Alumni to maintain contacts with the college</li>
                        <li>Arrange annual gatherings of the alumni and enrol fresh members.</li>
                        <li>Institute prizes in the name of the association for encouraging academic
                            excellence and all round performance</li>

                    </ul>
                    <h4 style={{
                        paddingTop: 20
                    }}>3. Links for registration</h4>
                    <ol type="1">
                        <li>Network website address for registration and Login. web:<a href="https://www.svucealumni.org/">https://www.svucealumni.org/</a>
                        </li>
                        <li>2) Once registered, the approved members can Install and Use mobile app.
                            Also to get life membership card. The SVUCE Alumni Association Android App is
                            really handy, available 24/7 at finger tips.</li>
                        <p>Android:
                            <a href="https://play.google.com/store/apps/details?id=com.coherendz.vaave">https://play.google.com/store/apps/details?id=com.coherendz.vaave</a>
                        </p>
                        <li>For Tabs, use IOS application. The app is really handy.</li>
                        <li>IOS:
                            <a href="IOS: https://apps.apple.com/us/app/my-alumni-network/id1361057578">IOS: https://apps.apple.com/us/app/my-alumni-network/id1361057578</a>
                        </li>
                    </ol>

                </Col>

            </Row>
        </Container>
    )
}
export default Alumni