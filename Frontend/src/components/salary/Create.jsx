import { useState } from 'react';
import Topbar1 from '../topbar1/Topbar1';
import './salary.css';
import axios from 'axios'
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas';
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { forwardRef } from 'react'
const Create=forwardRef(( props, ref )=> {
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
    const net=props.grossSalary-props.totalDeductions
    console.log(desg)
    console.log(id2)
    const handlePdf = () => {
        const input = document.getElementById('Distance');
    
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'px', 'a3');
                //var width = pdf.internal.pageSize.getWidth();
                //var height = pdf.internal.pageSize.getHeight();
    
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${id2}`);
            });
    };
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
      <div  ref={ref}>
        
         
        <div>
    <div className='Distance' >
    <div style={{ textAlign: 'left', padding: '80px' }}>
    <center>
        <img     src="" height="150" width="auto" />
      </center>
      <h4 >SalarySlip</h4>
      <>{new Date().toLocaleDateString()}</>
      <p></p>
      <div>
<table>  
      <thead>
       <tr>
            <th className='Salary1'><b>Your Bank</b></th>
        </tr>
        
        <tr>
            <th className='Salary1'><b>Salary Slip for {props.month} {props.year}</b>     </th>
            </tr>
            </thead>
            <table>
                <tr>
                <td>
                    <div className='table'>
                    Name 
                    <div className='Spacing'>{props.name}</div>     
                    </div>
                    </td>
                <td>
                    <div className='table'>
                    Department
                    <div className='Spacing'>{props.designation}</div>
                    </div>
                    </td>
                </tr>
                <tr>
                <td>
                    <div className='table'>
                    Emp No.
                    <div className='Spacing'>{props.employeeId}</div>
                    </div>
                    </td>
                <td>
                    <div className='table'>
                    Bank Name:
                    <div className='Spacing'>{props.bankName}</div>
                    </div>
                    </td>
                </tr>
                <tr>
                <td>
                    <div className='table'>
                    Designation : 
                    <div className='Spacing'></div>    
                    </div>
                    </td>
                <td>
                    <div className='table'>
                    A/c No.:
                    <div className='Spacing'>{props.accountNo}</div>
                    </div>
                    </td>
                </tr>
            </table>
            <table>
            <thead>
            <tr>
          <th>Earnings</th>
          <th>Deductions</th>
        </tr>
            </thead>
            
                <tr>
                    
                    <td>
                        <div className='table'>
                        Basic Salary:
                        <div className='Spacing'> {props.basicSal}</div>
                        </div>
                    </td>
                    <td>
                        <div className='table'>
                         EPF:
                         <div className='Spacing'>{props.epf}</div>
                        </div>
                        </td>
                </tr>
                <tr>
                    <td>
                        <div className='table'>
                            House Rent Allowences:
                            <div className='Spacing1'> {props.houseRent}</div>
                            </div>
                        </td>

                    <td>
                        <div className='table'>
                            Health Insurance:
                            <div className='Spacing1'>{props.healthInsurance} </div>
                        </div>
                        </td>
                </tr>
                <tr>
                    <td>
                        <div className='table' >
                        Conveyance Allowances
                        <div className='Spacing1'>{props.conveyance}</div>
                        </div>
                        </td>
                    <td>
                        <div className='table' >
                        Professional Tax:
                        <div className='Spacing1'> {props.tax}</div>
                        </div>
                        </td>
                </tr>
                <tr>
                    <td>
                        <div className='table'>
                        Medical Allowances:
                        <div className='Spacing2'>{props.medical} </div>
                        </div>
                        </td>
                    <td>TDS:</td>
                </tr>
                <tr>
                    <td>
                        <div className='table'>
                        Special Allowances:
                        <div className='Spacing2'>{props.special}</div>
                        </div>
                        </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div className='table'>
                        Gross Salary
                        <div className='Spacing'>{props.grossSalary}</div>
                        </div>
                        </td>
                    <td>
                        <div className='table'>
                        Total Deductions
                        <div className='Spacing1' >{props.totalDeductions}</div>
                        </div>
                        </td>
                </tr>
                <thead>
            <tr>
          <th>Net Pay</th>
          <th>{net}</th>
          
        </tr>
            </thead>
            </table>
    </table>
      </div>
      
  
    </div>
    </div>
    {/* <div>
        
    <button className="btn btn-success" onClick={handlePdf}>Download</button> 
    </div> */}
   </div>

        
    </div>
  );
});


export default Create;