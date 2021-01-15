
import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap"

import {BsFillXSquareFill} from "react-icons/bs"

import AddNewsModal from "./AddNewsModal"
import DeleteNewsModal from "./DeleteNewsModal"
import axios from "axios"

const Home = () =>{
  const [user,SetUser] = useState({admin:false})
  useEffect(()=>{
    var ls = (JSON.parse(localStorage.getItem("user")))
     if(ls)
     {
     if(ls._id){
       axios.get(`https://svuceedu.netlify.app/auth/${ls._id}`,{headers: {"Access-Control-Allow-Origin": "*"}})
       .then((resp)=>{
      SetUser(resp.data)
       })
       .catch((err)=>console.error(err))
     }
    }
    
    }
  ,[])
   
  // console.log(Ls)
 
  const [newsEditClicked,SetNewsEditClicked] = useState(false)
  const handleNewsEdit = ()=>{
       SetNewsEditClicked(!newsEditClicked);
  }
  const [news,SetNews] = useState([]);
  useEffect(()=>{
    axios.get("https://svuceedu.netlify.app/news",{headers: {"Access-Control-Allow-Origin": "*"}})
    .then((resp)=>{
  
  SetNews(resp.data.news.reverse())
    })
  },[])
  
  return(
    <section id="home">
      <Container>
          <Row>
            <Col>
            
            </Col>
            <Col></Col>
            <Col>
           
            <div className="card card-5">
             
              <h2 style={{textAlign:"center",borderBottom:"2px solid grey",color:"blue"}}>NEWS
              {/* FA EDIT ICON */}
              {user.admin?(
              <>
                  {!newsEditClicked ? (
                   <>
                     <FaEdit onClick={handleNewsEdit} className="Fanews" style={{right:0,fontSize:30,position:"absolute",paddingTop:9}}/>

                  </>):
              (
                  <>
                  <BsFillXSquareFill  onClick={handleNewsEdit} style={{right:0,fontSize:30,position:"absolute",paddingTop:10}} className="Fanews" color="red"/>
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
                     <p><span style={{fontSize:20}}>{index+1}</span>. {word.newsHeading}</p>
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
                   <a href={word.DriveLink} style={{color:"darkviolet"}}><p><span style={{fontSize:20}}>{index+1}</span>. {word.newsHeading}</p></a>
                  ))}
                </div>
              </>
              )}
                
               
                
            </div>
            </Col>
          </Row>
      </Container>
</section>
  )
}
export default Home