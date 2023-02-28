import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppointmentLetter from './AppointmentLetter';
import { useEffect } from 'react';
import Topbar1 from '../topbar1/Topbar1';
import { useLocation } from 'react-router-dom';
const PrintAppointment = () => {
  const componentRef = useRef();

  
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
        gender:"",
        appointmentDate:""
    }
)
//const {id}=useParams();
const location=useLocation();
const {id}=location.state;
console.log(id.employeeId)
const id2=id.employeeId
useEffect(()=>{
    viewEmploy();
},[])
const viewEmploy=async () =>{
    const result=await axios.get(`http://localhost:9002/api/v1/employee/${id2}`);
    setData(result.data);
    console.log(emp)
  }
  return (
    <div>
      <Topbar1 imageUrl={emp.imageUrl}/>
      <ReactToPrint
        trigger={() => <button style={{width:"100px",marginTop:"10px",backgroundColor:"#1775ee"}}>Print this out!</button>}
        content={() => componentRef.current}
      />
        
      <AppointmentLetter ref={componentRef} name={emp.name} appoint={emp.appointmentDate} address={emp.address}/>
    </div>
  );
};
export default PrintAppointment;