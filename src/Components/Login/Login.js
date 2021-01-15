import { Button} from "reactstrap";
import { useEffect, useState } from "react";
import { Col, Container,Row } from "reactstrap";
import axios from "axios";
import {Redirect} from "react-router-dom"
const Login = () =>
{
    const [isLoggedIn,setIsloggedIn] = useState(false)
useEffect(()=>{
   const x = JSON.parse(localStorage.getItem("user"))
   if(x){
       if(x.token && x._id)
         setIsloggedIn(true)  
   }
},[])


    
    const [Username,setUserName] = useState("")
    const [Password,setPassword] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("https://svuceedu.netlify.app/auth/login",{"username" : Username,"password" : Password})
        .then((resp)=>{
            console.log(resp)
            if (resp.data.success){
                localStorage.setItem("user",JSON.stringify(resp.data))
                window.location.reload()
                setIsloggedIn(true)
              return alert("succesfully logged in!") 

            }
           return alert("Invalid credientials")
        })
       }
       if(isLoggedIn)
{
 return <Redirect to="/" />
}
   return(
     
            
                 <Container >
                     
                     <Row style={{width:"100%"}}>
                         <Col >
                             
                         <div className="login" >
                         <h3 style={{textAlign:"center",paddingTop:20,color:"blueviolet"}}>SVUCE-LOGIN</h3>
                      <form onSubmit={{handleSubmit}}  className="form-login">
                          <input type="text" placeholder="Enter Username" value={Username} onChange={(e)=>setUserName(e.target.value)}/>
                          <input type = "password" placeholder = "Enter Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                          <Button color="primary" style={{marginLeft:105,marginTop:20}} onClick={handleSubmit}>Submit</Button>
                      </form>
                   </div>
                         </Col>
                     </Row>
                   
                   </Container>
                
      
   )
}
export default Login;