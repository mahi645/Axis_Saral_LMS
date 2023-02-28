import TopBar from '../topBar/Topbar'
import './notifications.css'
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import { Card, Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { useParams } from 'react-router-dom';
import AccordionDetails from '@material-ui/core/AccordionActions';
export default function Notifications() {
    const [empdata, empdatachange] = useState(null);
  
    const [id1,setid]=useState();
    const[desc,setdesc]=useState();
    const [show,setShow]=useState(true);
    const [emp,setData]=useState(
        {
            employeeId:"",
            name:"",
            password:"",
            designation:"",
            projectName:"",
            supervisorName:"",
            joiningDate:"",
            dateOfbirth:"",
            email:"",
            address:"",
            phoneNumber:null,
            gender:""
        }
    )
    const {id}=useParams();
    useEffect(()=>{
        viewEmploy();
    },[])
    const viewEmploy=async () =>{
        const result=await axios.get(`http://localhost:9002/api/v1/employee/${id}`);
        setData(result.data);
    }
    const addComment=()=>{
        axios.post("http://localhost:8030/api/v8/comment",{
            id:id1,
            desc:desc
        })
        .then((response)=>{
            {return response.data}
        });
    }
    useEffect(() => {
       axios.get("http://localhost:8030/api/v8/posts").then((response) => {
       empdatachange(response.data);
      });
     }, []);
  return (
    <div className='notifications'>
      <TopBar/>
      <div className='notificationsContainer'>
        <div className='leftContainer'> 
            <div className='right-top'>
            
            <Carousel className='right-top' >
                <img className='right-top-img' src="https://i.pinimg.com/originals/59/2a/1a/592a1a2d253c84086991ea625dc86341.jpg" alt=""/>
                <img className='right-top-img' src="https://i.pinimg.com/originals/59/2a/1a/592a1a2d253c84086991ea625dc86341.jpg" alt=""/>
                <img src="https://i.pinimg.com/originals/e0/c2/ec/e0c2ec3d3547f299aa4ffbb8eef978d0.jpg" className='right-top-img' alt=""/>
            
            </Carousel>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/e0/c2/ec/e0c2ec3d3547f299aa4ffbb8eef978d0.jpg" alt=""/>
            </div>
            
        </div>
        <div className='rightContainer'>
            <div className='postContainer'>
            
            <Typography>
            { empdata &&
                empdata.map((item,index)=>(
                    <div className='anotherPic' key={index}>
                        <div className='postWrapper'>
                        
                            <div className='postImg'>
                                <img src={item.img} className='post' alt=""/>
                            </div>

                            <div className='postBody'>
                                <p className='postLikes'><b>{item.likes} likes</b></p>
                                    <div className='commment'>
                                        <Accordion className='accordian'>
                                        <AccordionSummary>Comments</AccordionSummary>
                                        <AccordionDetails>
                                    {
                                        Object.entries(item.desc).map(([key,value],i)=>(
                                            <div className='postComment' key={i}>        
                                                <p className='UserName'  ><b>{key}:</b>{value}</p>
                                        
                                            </div>
                                        ))
                                    }
                                    </AccordionDetails>
                                    </Accordion>
                                
                                    </div>

                            
                            </div>
                            <div className='input'>
                                <input type="text" className='idd' value={item.id} onChange={(e)=>setid(e.target.value)}/>
                                <input type="text" placeholder='enter your comment' onChange={(e)=>setdesc(e.target.value)} />
                                <button type='submit' onSubmit={addComment}>submit</button>
                            </div>

                        </div>
                    </div>
                    
                ))
            }
            </Typography>
            </div>
        </div>
        
        
      </div>
    </div>
  )
}
