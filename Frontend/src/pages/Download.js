import React ,{useState} from 'react'
import  jsPDF from 'jspdf';
import  html2canvas from 'html2canvas';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
export default function Download() {
    const [file,setFile]=useState();
    const handlePdf = () => {
        const input = document.getElementById('view');
    
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'px', 'a3');
                //var width = pdf.internal.pageSize.getWidth();
                //var height = pdf.internal.pageSize.getHeight();
    
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${file}`);
            });
    };
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
  return (
    <div>
      <div className="container"  >
      
          <div id="view" >
            
          
          <div className="JoiningLetter" >
    <div style={{ textAlign: 'left', padding: '80px' }}>
    <center>
        {/* <img src={YBlogo} height="200" width="auto"/> */}
      </center>
      {/* <h1 style={{ textAlign: 'center', fontWeight: 'bold',marginBottom:"30px" }}>JOINING LETTER</h1> */}
      <p style={{marginBottom:"1px"}}><b>Ref:YB/DT20221847127/687373/Hyderabad</b></p>
      <p style={{marginBottom:"13px"}}><b>Date: {new Date().toLocaleDateString()}</b></p>
      <p style={{marginBottom:"1px"}}>To,</p>
      <div style={{width:"300px",height:"70px"}}>
      <p style={{  marginBottom:"1px"}}>{emp.name}</p>
      <p style={{marginBottom:"1px"}}>{emp.address}</p>
      </div>
      <p><b>Sub:Joining Letter</b></p>
      <p style={{marginBottom:"5px"}}>Dear {emp.name},</p>
      <p style={{ textIndent: '0px' }}>
      We would like to take this opportunity to extend you a very warm welcome to Your Bank(YB) family.
      </p>
      <p style={{ textIndent: '0px' }}>
      We are pleased to inform you that your joining date at <b>YB</b> will be <b> {emp.joiningDate}</b> , your joining
location is <b>Hyderabad</b> and work location is <b>Hyderabad</b> . This has been provided considering
your preference and business requirements.
      </p>
      <p style={{ textIndent: '0px' }}>
      YB Onboarding Team will reach out to you over email in the next few days to guide you further on the
onboarding process and steps to be taken to prepare yourself for onboarding.
      </p>
      <p style={{ textIndent: '0px' }}>
      Congratulations on completing the first phase of your learning through YB Xplore Program. We
appreciate your passion towards learning which has helped you to perform well. You are now set to
experience learning through our coveted YB Xperience Program.
      </p>
      <h4>YB Xperience Program</h4>
      <p style={{ textIndent: '0px' }}>
      Learning is a way of life at YB. The YB Xperience Program will open a world of opportunities and
help you to scale greater heights in your professional life.
      </p>
      <p style={{ textIndent: '0px' }}>
      The program is carefully designed to develop software engineering skills, nurture professionalism and
inculcate a process mindset. This program provides the perfect platform to polish the skills you have
gained through the YB Xplore program, making you 'project ready'.
      </p>
      <p style={{ textIndent: '0px' }}>
      The duration of your YB Xperience Program is based on your performance in YB Xplore program
and business requirements.
      </p>
      <p style={{ textIndent: '0px' }}>
      The program has regular assessments based on pre-defined learning objectives. You are expected to
meet the required standards during the YB Xperience Program. In case, the performance does not
meet the expectations, the management reserves the right to either extend your program or take
appropriate action.
      </p>
      <p style={{ textIndent: '0px' }}>
      As communicated through various forums during the recruitment process, your appointment is subject
to completion of your final academic (UG/PG) course within the stipulated time as specified by your
University/Institute and as per YB selection guidelines. You must also fulfill all the YB eligibility
criteria as stated in the Offer letter.
      </p>
      <p style={{ textIndent: '0px' }}>
      Kindly confirm your acceptance of this program by clicking on the 'I Accept' button in Nextstep portal.
We encourage you to join us on the specified date to enjoy the benefit of timely processing and avail
better opportunities.
      </p>
      <p style={{ textIndent: '0px' }}>
      We look forward to you joining us on an enriching career with YB. Together, let us take this
organization to greater heights!
      </p>
      <p style={{ textIndent: '0px' }}>
      Gear up to experience the future!!
      </p>
      <p style={{ textIndent: '0px' }}>
      Warm regards,
      </p>
      <h5>Krishna.S</h5>
      <h5>Global Head - Talent Development</h5>
      <h5>YB Human Resources</h5>
  
    </div>
    </div>

          
        
    </div>
    <div>
      <input type="text" placeholder="File name" onChange={(e)=>setFile(e.target.value)}/>
      <button className="btn btn-success" onClick={handlePdf}>Download</button> 
      </div>
    </div>
    </div>
  )
}
