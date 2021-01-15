import axios from 'axios';
import React, { useState } from 'react';
import {  Modal } from 'react-bootstrap';
import { Button, Input,InputGroup } from 'reactstrap';

const AddNewsModal= ({news,SetNews}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newsHeading,setNewsHeading] = useState("")
    const [newsLink,setNewsLink] = useState("")
    const handleUpload = () =>{
        if(newsHeading==="")
           return alert("Please enter all details")
        axios.post("https://svuceedu.netlify.app/.netlify/functions/server/news",{newsHeading:newsHeading,DriveLink:newsLink})
        .then((resp)=>{
             SetNews([resp.data,...news])
             setShow(false)
             console.log(resp)
        return alert("News Uploaded Succesfully")
        }) 
        // return Toast("News Uploaded Succesfully");
       

    }
    return (
    <>
    <Button color="success" onClick={handleShow}>
      Add News
    </Button>
 
    <Modal show={show} onHide={handleClose} style={{marginTop:40,background:"none",width:"80%"}}>
      <Modal.Header closeButton>
        <Modal.Title>News Posting Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <InputGroup >
              <Input type="text" placeholder="Enter News-Heading" value={newsHeading} onChange={(e)=>setNewsHeading(e.target.value)} required/>
              <Input type="text" placeholder="Enter Drive Link to the File" value={newsLink} onChange={(e)=>setNewsLink(e.target.value)} />
          </InputGroup>
      </Modal.Body>
      <Modal.Footer>
      <Button color="primary" onClick={handleUpload}>
          Upload
        </Button>
        <Button color="danger" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default AddNewsModal;
