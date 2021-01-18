
import { Col, Container ,Row} from "reactstrap"


import {useState,useEffect} from "react";
import axios from "axios"
const NEWS = () =>{
     const [news,SetNews] = useState([]);
  useEffect(()=>{
    axios.get("https://svuceedu.netlify.app/.netlify/functions/server/news")
    .then((resp)=>{
  
  SetNews(resp.data.news.reverse())
    })
  },[])
   return(
       <Container>
           <Row>
              
               <Col>
               <div style={{color:"blue",marginTop:100}}> 
              <h2 >NEWS</h2>
              
               <div className="news">
                  {news.map((word,index)=>(
                   <a href={word.DriveLink} style={{color:"darkviolet"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.newsHeading}</p></a>
                  ))}
                </div>
            </div>
          
               </Col>
               
           </Row>
       </Container>
   )
}

export default NEWS