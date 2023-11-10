import {Container, Row, Col} from "reactstrap"

const Healthcentre = () => {
    return (
        <Container>
            <Row>
                                      <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <div className="carousel-inner" role="listbox">

      
        <div className="carousel-item active" style={{backgroundImage: "url(https://i.imgur.com/Ak5FtaQ.jpg)"}}>
        </div>
        
         <div className="carousel-item active" style={{backgroundImage: "url()"}}>
        </div>

       
 </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

    </div>
    
  </section>
                <Col>
                    <h3
                        style={{
                        borderBottom: "2px solid #f03c02",
                        paddingTop: 20
                    }}>SVU Health Center</h3>
                    <p>
                        Sri Venkateswara University Health centre was established in 1963. It is a
                        serviceOriented mini-hospital extending free medical service to the
                    </p>
                    <ul>
                        <li>Students</li>
                        <li>Research Scholars</li>
                        <li>Employees of S.V.University and their dependent family members like parents
                            andunmarried children</li>
                        <li>Retired employees and their spouses and</li>
                        <li>Guests and visitors to the University on various programmes</li>
                    </ul>
                    <p>
                        The total population covered is about 20,000/-. The average daily outpatient
                        strengthof the centre is about 300. The Centre has aone Senior Medical Officer,
                        one LadyJunior Medical Officer and two Junior Medical Officers, who are assisted
                        by paramedicalstaff members. Specialist consultancy services in general
                        Medicines, general sugary,Dental surgery and Ophthalmology drawn from the
                        specialists of S.V.R.R. GovernmentGeneral Hospital, Tirupati are available at
                        the Health centre on specified days.
                    </p>
                    <p>
                        The Centre renders Out Patient treatment, Inpatient treatment with 12 beds,
                        Minorsurgical procedures, Antenatal Check-ups and post natal care, Immunization,
                        AnnualMedical check-ups for students and call duty services. The centre also has
                        a Clinicallaboratory and Bio-chemical laboratory, X-Rays, Dental X-Ray, E.C.G
                        etc., for diagnosticpurpose, besides an Ambulance Van for the transport of the
                        patients. It has proposalsto acquire diagnostic equipments like Ultrasound
                        Scanner and Upper gastro-intestinalendoscope
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Healthcentre