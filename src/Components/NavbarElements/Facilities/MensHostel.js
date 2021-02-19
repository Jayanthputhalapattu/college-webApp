import { Col, Container, Row, Table } from "reactstrap"

const MensHostel = () =>{
    return (
<Container>
    <Row>
        <Col>
        <h2 style={{borderBottom:"6px solid #f03c02",borderBottomWidth:4,paddingTop:50}}>Hostels</h2> 
        <div >
           
            <p style={{paddingTop:20}}>
            Sri Venkateswara University College of Engineering (SVUCE), Tiruapti is a residentialinstitute and provides accommodation to students wishing to reside in the hostels.The SVUCE Men’s hostels are administered by a Warden and he is assisted by fourDeputy Wardens in all matters relating to the hostels. Warden and Deputy Wardensall are faculty members of SVUCE. Hostel Office is located within the SVUCE premises,and has one Office Superintendent, three Junior Assistants, one record Assistantand two Attenders, who assist the Warden / Dy. Wardens in matters related to variousactivities of the hostel. Hostel Office maintains all files, registers, records,ledgers, account books, supplier’s bills, payment registers, etc., pertaining tothe mess, hostel residents and the employees. The Hostel Office is open on all workingdays.
            </p>
         <p>
         The SVUCE Men’s hostels comprises of four-Boys Hostel Blocks, namely Visveswara,Viswakarma, Viswateja and Viswapragati. B.Tech Second, Third & Final year studentsare accommodated in Visveswara and Viswakarma Hostel Blocks. B.Tech first year studentsare placed at Viswateja Hostel Block, where as the Viswapragati Hostel Block ismeant exclusively for M.Tech Students.
         </p>
        </div>

        </Col>
       
    </Row>
    <Row>
    <Col>
        <Table bordered style={{marginTop:30}}>
            <thead>
               <tr>
               <th colSpan="2">Hostel contacts</th></tr> 

            </thead>
            <tbody>
                <tr>
                    <th>Principal- Cum- Chief Warden</th>
                    <td>(+91)-877-2289341, (+91)-877-2289561(O)</td>
                </tr>
                <tr>
                    <th>Hostel Office</th>
                    <td> (+91)-877-2248539, (+91)-877-2289459</td>
                </tr>
            </tbody>
        </Table>
        <p>
        Every student who has been admitted to the institute hostels is required to paythe prescribed Hostel Development Fee, Hostel Application Fee and Hostel MiscellaneousCharges along with a refundable Hostel mess caution deposit. These charges are subjectto revision from time to time. Every month mess bill consisting of Hostel Room Rent,University Water Charges, University Establishment Charges, Electricity Charges,Wages to NMR / Food basis staff, Maintenance Charges, Water supply through tankersand Mess Charges has to be paid every month into the Warden Account. Allotment ofrooms to the residents takes place at the end of each academic year when the finalyear UG and PG students vacate their rooms after completion of their programmesof study. The rooms vacated by the outgoing students are made available by the Wardenfor other residents in the hostel to change their rooms, on request. The changein rooms is effected in accordance with the policy decided by the hostels Warden and Dy. Warden (Maintenance).
        </p>
        <p>
        An external security agency is contracted for providing security at the hostels for I B.Tech students. The services of the security personnel are monitored by the Warden / Dy. Warden (Maintenance).
        </p>
        <h4 style={{borderBottom:"6px solid #f03c02",borderBottomWidth:2,paddingTop:50}}>SVUCE Men's Hostels</h4>
        <p>
        Men's Hostels of S V U College of Engineering are located nearer to NCC building. Hostels have good scenic view of Tirumala Hills. S V U C E Men's Hostels have following Four Blocks:
        </p>
        <Table bordered>
            <thead>
                <tr style={{color:"blue"}}>
                    <th >SVUCE Men's Hostel Block</th>
                    <th>Year of Establishment</th>
                    <th>Capacity</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <th>Viswakarma Block</th>
                    <td>1970</td>
                    <td>240</td>
                </tr>
                <tr>
                    <th>Visweswara Block</th>
                    <td>1973</td>
                    <td>240</td>
                </tr>
                <tr>
                    <th>Viswateja Block</th>
                    <td>1985</td>
                    <td>148</td>
                </tr>
                <tr>
                    <th>Viswa Pragati Block</th>
                    <td>2007</td>
                    <td>90</td>
                </tr>
            </tbody>
        </Table>
        </Col>
    </Row>
</Container>
    )
}
export default MensHostel