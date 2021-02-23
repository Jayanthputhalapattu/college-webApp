import React,{useState} from "react"
import { Button, Modal, ModalBody, ModalFooter} from 'reactstrap';

const Footer = () => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);

    const toggle = () => setOpen(!open);
    // eslint-disable-next-line
    const handleSelectChange = ({target: { value }}) => {
        setFocusAfterClose(JSON.parse(value));
    }
    return (
        <div id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 footer-contact">
                            <h3>Sri Venkateswara University College of Engineering</h3>
                            <p>
                                Sri Venkateswara University
                                <br/>
                                Tirupati, Andhra Pradesh - 517 502<br/>
                                India
                                <br/><br/>
                                <strong>Phone:</strong>
                                +91-877-2289561<br/>
                                <strong>Email:</strong>
                                principal_svuce2003@yahoo.co.in<br/>
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/">Home</a>
                                </li>
                                {/* <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="academics.html">Academics</a>
                                </li> */}
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/placements">Placements</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/linktofile">TimeTables</a>
                                </li>
                                {/* <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="examinations.html">Examinations</a>
                                </li> */}
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/TQ">TEQIP</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Facilities</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/alumni">Alumni</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/healthcentre">Health Centre</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/library">Library</a>
                                </li>

                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/nss_ncc">NSS / NCC</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="container">

                    <div>
                        &copy; Copyright
                        <strong>
                            <span> Developed by
                                <span  onClick={toggle} style={{color:"red",cursor:"pointer"}} > Web-Team</span>
                            </span>
                        </strong>. All Rights Reserved
                    </div>
                    <div className="credits"></div>
                </div>
                <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    <h2>DEVELOPERS</h2>
                    <a href="https://www.linkedin.com/in/jayanth-puthalapattu/" style={{color:"blue"}}>JAYANTH PUTHALAPATTU,</a><span>MERN STACK DEV</span>
                    <br/>
                    <a href="https://www.linkedin.com/in/jayanth-puthalapattu/" style={{color:"blue"}}>NSR JYOTHISH CHANDRA,</a><span>FULL STACK DEV</span>
                    </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
            </div>

        </div>

    )
}
export default Footer