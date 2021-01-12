import { Col, Container ,Row} from "reactstrap"
import { news } from "../../assets/DBStatic/news"

const NEWS = () =>{
   return(
       <Container>
           <Row>
               <Col>
               <div style={{color:"blue",marginTop:100}}> 
              <h2 >NEWS</h2>
                <div >
                  {news.map((word,index)=>(
                   <a href={word.Filename} style={{color:"#B9345A",fontWeight:"bold"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.name}</p></a>
                  ))}
                </div>
            </div>
               </Col>
           </Row>
       </Container>
   )
}

export default NEWS