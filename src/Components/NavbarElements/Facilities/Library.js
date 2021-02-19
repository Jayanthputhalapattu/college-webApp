import { Col, Container, Row, Table } from "reactstrap"

const Library = () =>{
  return(
      <Container>
          <Row>
              <Col>
              <h3 style={{fontWeight:"bold"}}>Sri Venkateswara University Library</h3>
              <Table bordered>
                  <tbody>
                      <tr>
                          <th>Librarian</th>
                          <td>Dr. K. Surendra Babu, Incharge</td>
                      </tr>
                      
                  </tbody>
              </Table>
              <h3 style={{borderBottom:"2px solid #f03c02",paddingTop:50}}>Historical background</h3> 
              <p>Sri Venkateswara University, named after the Lord of the Seven Hills, came into existence as a teaching and affiliating University on the 2nd September, 1954, for the encouragement of higher education and research in all branches of learning. It was intended to fulfil the long felt need of the people of Rayalaseema for their educational advancement.</p>
              <h3 style={{borderBottom:"2px solid #f03c02",paddingTop:30}}>Genesis</h3> 
              <p>
                The University Library was started in the year 1955 with a small collection of 6,700 books taken from the Sri Venkateswara College, Tirupati, administered by Tirumala Tirupati Devasthanams. Initially the library was housed in one portion of the college main building. Later, it was shifted to the present building which was declared open in July 1964, by Late Dr. S. Radhakrishnan, the then President of India. He described it as <b>Taj Mahal of the South</b>
              </p>
             <p>
             The plinth area of the library building is about 56,637 sq. ft. of which 19,558 sq.ft. is occupied by the Stack Area, 16,980 sq. ft. is reader’s area, 5,100 sq. ft. is the work space and the rest for miscellaneous use. The library has four reading halls with a seating capacity for 400 users at a time.
             </p>
             <p>
             The university library, centrally situated and easily accessible to all the departments on the campus has steadily grown over the years and it has 3,75,600 documents as on today. It includes textbooks, reference books, general books, gift books, reports, back volumes of Journals. The library subscribes to about 400 print journals of National and International importance.
             </p>
             <p>
             The library is kept open for readers between 8-00 AM to 10.00-00 PM on all working days with the transactions at the circulation counter except on Sundays and Holidays, on which days the library will function from 10-00 AM to 5-00 PM for study and consultation purpose only.
             </p>
             <h3 style={{borderBottom:"2px solid #f03c02",paddingTop:30}}>IT infrastructure</h3> 
             <p>
             The S.V.University Library is a participating member in the INFLIBNET Programme of UGC. The UGC has provided financial assistance for computerisation of SVU Library under INFLIBNET Programme. Library professionals at various levels were trained in DOS, CDS/ISIS and SOUL ( Software for University Libraries ) software packages by INFLIBNET Centre staff, Ahmedabad. The creation of Database for Theses, Serials and books were completed. Library in-house operations are totally automated
             </p>
             <h4 style={{paddingTop:20}}>Digital library</h4> 
             <p>
             SV University library is a participating member of UGC INFONET Programme. Under this programme, the V-Sat facility to have access to Internet is installed in SVU Computer Centre. The INFLIBNET has provided 1 Gbps connectivity to S.V. University. The Computer Centre has provided Internet connectivity to all the Departments/Institutions on the Campus.
             </p>
             <p>
             Digital Library with a provision to accommodate 42 users at a time was established in SVU Library inorder to access about 15,000 e-resources provided by UGC-INFLIBNET centre, under e-ShodhSindu programme.
             </p>
              </Col>
          </Row>
      </Container>
  )
}
export default Library