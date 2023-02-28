import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useEffect } from 'react';
import Topbar1 from '../topbar1/Topbar1';
import { useLocation } from 'react-router-dom';
import Create from './Create';
const Printsalary = () => {
  const componentRef = useRef();

 
  const [show,setShow]=useState(false);
  const[id1,setId]=useState('');
  const[year,setYear]=useState('');
  const[month,setMonth]=useState('');
  const[emp,setEmp]=useState([]);
  const location=useLocation();
  const {id}=location.state;
  const id2=id.employeeId
  const {designation}=location.state;
  const desg=designation.designation;
  const {name}=location.state;
  const name1=name.name;
  console.log(desg)
  console.log(id2)
  const onSubmit=()=>{
    axios.post(`http://localhost:9007/api/v1/salary`,{
        employeeId:id2,
        year:year,
        month:month
        
    })
    .then((response)=>{
        {
            console.log(response.data)
            setEmp(response.data)
            alert("post added successfully")
            // window.location.reload();
            setShow(true)
        }
        
    })

    
    }   
  return (
    <div>
      <Topbar1 imageUrl={emp.imageUrl}/>
      <div className="button-click" style={{marginTop:"20px"}}> 
            {/* <input type="text" placeholder='id' onChange={(e)=>setId(e.target.value)}/> */}
            <input type="text"  placeholder='year' onChange={(e)=>setYear(e.target.value)}/>
            <input type="text"  placeholder='month' onChange={(e)=>setMonth(e.target.value)}/>
            <button className="submit" onClick={onSubmit} style={{width:"200px",height:"33px",border:"3px solid White",backgroundColor:"#1777ee",color:"white"}} >Submit</button>
        </div>
      <ReactToPrint
        trigger={() => <button style={{width:"150px",height:"33px",marginTop:"20px",border:"3px solid White",backgroundColor:"#1775ee",color:"white"}}>Print this out!</button>}
        content={() => componentRef.current}
      />
        
      {show && 
      <Create
       ref={componentRef} name={name1} basicSal={emp.basicSal} 
       month={emp.month} year={emp.year} epf={emp.epf} designation={desg} medical={emp.medical}
       houseRent={emp.houseRent} healthInsurance={emp.healthInsurance} conveyance={emp.conveyance}
       special={emp.special} grossSalary={emp.grossSalary} totalDeductions={emp.totalDeductions}
       netSal={emp.netSal} tax={emp.tax} 
       employeeId={emp.employeeId} bankName={emp.bankName} accountNo={emp.accountNo}/>
       
      }
    </div>
    
  );
};
export default Printsalary;