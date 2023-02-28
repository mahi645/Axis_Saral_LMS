import './feed.css'
import Carousel from 'react-material-ui-carousel';
import { Card } from '@material-ui/core';
import MediaCard from '../practice/MediaCard';
import { useLocation } from 'react-router-dom';
import Topbar1 from '../topbar1/Topbar1';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminMediaCard from '../practice/AdminMediaCard';
export default function EmployeeFeeds() {
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
const location=useLocation();
const {id}=location.state;
//const {id}=useParams();
console.log(id.employeeId)
const id2=id.employeeId
const url=id.url
useEffect(()=>{
    viewEmploy();
},[])
const viewEmploy=async () =>{
    const result=await axios.get(`http://localhost:9002/api/v1/employee/${id2}`);
    setData(result.data);
    console.log(emp)
  }
  return (
    <div className='notifications'>
      <Topbar1 imageUrl={emp.imageUrl}/>
        <div className="notificationsContainer">
          <div className="leftContainer">
            <div className="right-top">
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
          <div className="rightContainer">
            <AdminMediaCard/>
          </div>
        </div>
     
    </div>
  )
}
