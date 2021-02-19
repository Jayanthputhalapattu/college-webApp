
import { Col, Container ,ListGroup,ListGroupItem,Row} from "reactstrap"


import {useState,useEffect} from "react";
import axios from "axios"
import { FaEdit } from "react-icons/fa";
import { BsFillXSquareFill } from "react-icons/bs";
import AddNewsModal from "../MainPageComp/AddNewsModal";
import DeleteNewsModal from "../MainPageComp/DeleteNewsModal";
const NEWS = () =>{
  const [user,SetUser] = useState({admin:false})
  useEffect(()=>{
    var ls = (JSON.parse(localStorage.getItem("user")))
     if(ls)
     {
     if(ls._id){
       axios.get(`https://svuceedu.netlify.app/.netlify/functions/server/auth/${ls._id}`)
       .then((resp)=>{
      SetUser(resp.data)
       })
       .catch((err)=>{SetUser({admin:false})})
     }
    }
    
    }
  ,[])
  const [newsEditClicked,SetNewsEditClicked] = useState(false)
  const handleNewsEdit = ()=>{
       SetNewsEditClicked(!newsEditClicked);
  }
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
               {/* <div style={{marginTop:100,backgroundColor:"#605c5b",borderTop:"10px solid #f03c02" ,padding:"10px 20px 10px 20px"}}> 
              <h2 style={{color:"white"}}>NEWS</h2>
              
               <div className="news">
                  {news.map((word,index)=>(
                   <a href={word.DriveLink} style={{color:"#90b5dd"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.newsHeading}</p></a>
                  ))}
                </div>
            </div> */}
           <div style={{marginTop:100,backgroundColor:"#605c5b",borderTop:"6px solid #f03c02" ,padding:"10px 20px 10px 20px",marginBottom:100}}> 
             
             <h2 style={{color:"white"}}>NEWS
             {/* FA EDIT ICON */}
             {user.admin?(
             <>
                 {!newsEditClicked ? (
                  <>
                    <FaEdit onClick={handleNewsEdit} className="Fanews" style={{right:30,fontSize:30,position:"absolute",paddingTop:9}}/>

                 </>):
             (
                 <>
                 <BsFillXSquareFill  onClick={handleNewsEdit} style={{right:20,fontSize:30,position:"absolute",paddingTop:10}} className="Fanews" color="red"/>
                 </>)}
             </>)
             :
             (
             <>
             </>
             )}
             </h2>
             {newsEditClicked?(
             <>
              <div>
                 <ListGroup>
                 <AddNewsModal news={news} SetNews={SetNews}/>
               
                 {news.map((word,index)=>(
                  <ListGroupItem href={word.DriveLink} style={{color:"darkviolet"}}>
                     <a href={word.DriveLink} style={{color:"rgb(107 178 255)"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.newsHeading}</p></a>
                    <DeleteNewsModal news_id = {word._id}  SetNews = {SetNews} news_heading = {word.newsHeading}/>
                  </ListGroupItem>
                 ))}
                 </ListGroup>
                </div>
               
             </>)
             :
             (
             <>
             <div className="news">
                 {news.map((word,index)=>(
                  <a href={word.DriveLink} style={{color:"rgb(107 178 255)"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.newsHeading}</p></a>
                 ))}
               </div>
             </>
             )}
               
              
               
           </div>
               </Col>
               
           </Row>
       </Container>
   )
}

export default NEWS