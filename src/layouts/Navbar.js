import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";
import { Academic_regulations_btech } from "../assets/DBStatic/academics/academic_regulations";
import { Syllabus_btech } from "../assets/DBStatic/academics/syllabus_btech";
import { Syllabus_mtech } from "../assets/DBStatic/academics/syllabus_mtech";
const Navba = () => {
    const [isLoggedIn,
        setIsloggedIn] = useState(false)
    useEffect(() => {
        const x = (JSON.parse(localStorage.getItem("user")));

        if (x) {
            if (x.token && x._id) {
                setIsloggedIn(true)
            }
        }
    }, [])
    const handleLOgout = (e) => {
        e.preventDefault();
        localStorage.clear()
        window
            .location
            .reload()(alert("Logged out succesfully"))
    }
    return (
        <div>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container d-flex">
                    <div className="contact-info mr-auto">
                        <i className="icofont-envelope"></i>
                        <a href="mailto:principal_svuce2003@yahoo.co.in">principal_svuce2003@yahoo.co.in</a>
                        <i className="icofont-phone"></i>
                        +91-877-2289561
                    </div>

                </div>
            </section>
            <header id="header">
                <div className="container d-flex">

                    <div className="logo mr-auto">

                        <h1 className="text-light">
                            <a href="/">SVUCE</a>
                        </h1>

                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="drop-down">
                                <a >About</a>
                                <ul>
                                   <li><a href="/principals">Principals</a></li>
                                </ul>
                            </li>
                            <li className="drop-down">
                                <a href={window.location}>Academics</a>
                                <ul>
                                    <li>
                                        <a href="/courses_offered">Courses Offered</a>
                                    </li>
                                    <li>
                                        <a href="/linktopdf">Academic Calendar</a>
                                    </li>

                                    <li className="drop-down">
                                        <a href="/academic_regulations">
                                            Academic Regulations</a>
                                        <ul>
                                            <li className="drop-down">
                                                <a>B.Tech</a>
                                                <ul>
                                                    <li><a href="/academics/B.Tech.(CBCS) Regulations, 2018(R-2018).pdf">B.Tech.(CBCS) Regulations, 2018(R-2018)</a></li>
                                                    <li ><a href="/academics/Modifications of BTech Regulations on Open Electives.pdf">Modifications of BTech Regulations on Open Electives</a></li>
                                                     <li><a href="/academics/B.Tech Regulations ,2020(R-20).pdf">B.Tech Regulations ,2020(R-20)</a></li>
                                                </ul>
                                                
                                            </li>
                                            <li>
                                                <a>M.Tech</a>
                                               
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-down">
                                        <a href="/#">Syllabus</a>
                                        <ul>
                                            <li className="drop-down">
                                                <a>B.Tech</a>
                                                <ul>
                                                {Syllabus_btech.map((arb)=>(
                                                    <li>
                                                        <a href={arb.location}>{arb.Filename}</a>
                                                    </li>
                                                ))}
                                                </ul>
                                            </li>
                                            <li className="drop-down">
                                                <a>M.Tech</a>
                                                <ul>
                                                 {Syllabus_mtech.map((arb)=>(
                                                    <li>
                                                        <a href={arb.location}>{arb.Filename}</a>
                                                    </li>
                                                ))}
                                                </ul>
                                               
                                            </li>
                                        </ul>
                                    </li>
                                    <li >
                                        <a href="/timetables.pdf">Time Tables</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="drop-down">
                                <a href={window.location}>Departments</a>
                                <ul>
                                    <li>
                                        <a href="/ChE">Chemical Engineering</a>
                                        <ul>
                                            {/* <li><a href="che_faculty">Faculty</a></li>
                <li><a href="che_students">Students</a></li>
                <li><a href="che_facilities">Facilities</a></li> */}
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/CE">Civil Engineering</a>
                                        <ul>
                                            {/* <li><a href="ce_faculty">Faculty</a></li>
                <li><a href="ce_students">Students</a></li>
                <li><a href="ce_facilities">Facilities</a></li> */}
                                        </ul>
                                    </li>
                                    <li >
                                        <a href="/EEE">Electrical and Electronics Engineering</a>
                                    </li>
                                    <li >
                                        <a href="/ECE">Electronics and Communication Engineering</a>
                                    </li>
                                    <li >
                                        <a href="/ME">Mechanical Engineering</a>
                                    </li>
                                    <li>
                                        <a href="/CSE">Computer Science & Engineering</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="drop-down"><a href="examinations">Examinations</a>
          <ul>
            <li><a href="exam_notifications">Notifications</a></li>
            <li><a href="exam_results">Results</a></li>
            <li><a href="exam_applications">Applications</a></li>
            <li><a href="exam_halltickets">Hall Tickets</a></li>
          </ul>
        </li> */}
                            <li className="drop-down">
                                <a href={window.location}>Facilities</a>
                                <ul>
                                    <li >
                                        <a href="/hostels">Hostels</a>
                                        {/* <ul>
                <li><a href="/mens_hostel">SVUCE Men's Hostels</a></li>
                <li><a href="/womens_hostel">SVU Women's Hostels</a></li>
              </ul> */}
                                    </li>
                                    <li>
                                        <a href="/library">Library</a>
                                    </li>
                                    <li>
                                        <a href="/healthcenter">Health Centre</a>
                                    </li>
                                    <li>
                                        <a href="/nss_ncc">NSS / NCC</a>
                                    </li>
                                    {/* <li><a href="/student_support_cell">Student Support Cell</a></li>
            <li><a href="/grievances_redressal_cell">Grievances Redressal Cell</a></li> */}
                                    <li>
                                        <a href="/alumni">Alumni</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/placements">Placements</a>
                            </li>
                            <li >
                                <a href="/TQ">TEQIP</a>
                                {/* <ul>
            <li><a href="bog">BOG</a></li>
            <li><a href="nirf">NIRF</a></li>
            <li><a href="audit">Audit</a></li>
            <li><a href="eap">EAP</a></li>
          </ul> */}
                            </li>
                            <li>
                                <a href="/newsportal">News</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            {isLoggedIn
                                ? (
                                    <li>

                                        <Button
                                            onClick={handleLOgout}
                                            style={{
                                            marginTop: 10,
                                            fontSize: 15,
                                            padding: "6px 10px"
                                        }}>LOGOUT</Button>

                                    </li>
                                )
                                : (
                                    <li>
                                        <a href="/login">LOGIN</a>
                                    </li>
                                )}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>

    )
}
export default Navba
