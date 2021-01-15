import {  Modal } from 'react-bootstrap';
import { Button } from 'reactstrap';
import {useState} from "react"
// import { news } from '../../assets/DBStatic/news';
import axios from 'axios';
// import { FaRegStopCircle } from 'react-icons/fa';
const DeleteNewsModal= ({news_id,SetNews,news_heading}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [newNews,setNewNews] = useState([])
    console.log(news_id)
    const handleDelete = (e) =>{
        e.preventDefault();
      axios.delete(`http://localhost:5000/news/${news_id.toString()}`)
      .then((resp)=>{
          
          SetNews((resp.data))
          setShow(false)
             return alert("Data deleted Successfully")
      })
      
    }
    return (
    <>
    <Button color="danger" onClick={handleShow}>
      Delete
    </Button>

    <Modal show={show} onHide={handleClose} style={{marginTop:40,background:"none",width:"80%"}}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <p>Are you sure you want to delete ?</p>
        <b>{news_heading}</b> 
         
      </Modal.Body>
      <Modal.Footer>
      <Button color="primary" onClick={handleDelete}>
          Yes
        </Button>
        <Button color="danger" onClick={handleClose}>
          NO
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default DeleteNewsModal