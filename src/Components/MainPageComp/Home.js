import { Col, Container, Row } from "reactstrap"
import { news } from "../../assets/DBStatic/news"

const Home = () =>{
  return(
    <section id="home">
      <Container>
          <Row>
            <Col>
            
            </Col>
            <Col></Col>
            <Col>
            <div className="card card-5">
              <h2 style={{textAlign:"center",borderBottom:"2px solid grey",color:"blue"}}>NEWS</h2>
                <div className="news">
                  {news.map((word,index)=>(
                   <a href={word.Filename} style={{color:"darkviolet"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.name}</p></a>
                  ))}
                </div>
            </div>
            </Col>
          </Row>
      </Container>
</section>
  )
}
export default Home