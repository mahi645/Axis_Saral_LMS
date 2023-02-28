import './forgotpassword.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Forgotpassword() {
    const [id,setId]=useState();
    const [pwd,setpwd]=useState();
    
    const navigate=useNavigate();
   const onSubmit=()=>{
    if(id=='' && pwd==''){
        alert("Fill credentials");
      }
    
        axios.post(`http://localhost:9002/api/v1/change`,{
            employeeId:id,
            password:pwd
        }).then(response=>{return response.data
            // console.log(response.data)
        })
        
        .then((response)=>{
            if(response==="updated password"){
                // pathchg(history);
                console.log(id)
                alert("password updated successfully")
               navigate('/login');
            }
            else{
                alert("please verify credentials")
            }
        })

        
    }
  return (
    <div>
       <div className="forgetpassword">
    <div className="forgetpasswordWrapper">
        <div className="changepasswordBox">
            <h3 className="forgetpasswordtitle">Forget Password</h3>
            <input placeholder="Enter ID" name="ID" type="text" className="newpassword"  onChange={(e)=>setId(e.target.value)}/>
            <input placeholder="Enter new password" name="newpassword" type="password" className="newpassword" onChange={(e)=>setpwd(e.target.value)} />
            
            <center><Link to="/login"><button className="forgetpasswordButton" onClick={onSubmit}> Submit </button></Link></center>
        </div>
    </div>
  
</div>
    </div>
  )
}
