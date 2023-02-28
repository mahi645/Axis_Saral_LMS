import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Resume from './Resume';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar1 from '../topbar1/Topbar1';
const Example = () => {
  const componentRef = useRef();

  const [text, setText] = useState('Hello world!');
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
    <div>
      <Topbar1 imageUrl={emp.imageUrl}/>
      <ReactToPrint
        trigger={() => <button style={{width:"100px",marginTop:"10px",backgroundColor:"#1775ee"}}>Print this out!</button>}
        content={() => componentRef.current}
      />
      <Resume ref={componentRef} name={emp.name} join={emp.joiningDate} address={emp.address}/>
    </div>
  );
};
export default Example;