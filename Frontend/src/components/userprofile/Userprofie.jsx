import './userprofile.css'
import Feed from '../../components/feed/Feed';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import  Accordion  from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import 'react-calendar/dist/Calendar.css';
import { useLocation } from 'react-router-dom';
import Topbar1 from '../topbar1/Topbar1';
export default function Userprofile(){
    const [emp,setData]=useState({
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
        imageUrl:"",
        appointmentDate:""
    });
    //const {id}=useParams();
    const location=useLocation();
    const {id}=location.state;
    const {url}=location.state;
    const {project}=location.state;
    const url2=url.imageUrl
    const id2=id.employeeId
    const project2=project.projectName
    console.log(id2)
    console.log(url2)
    console.log(project2)

    const [support,setSupport]=useState([]);
    const[colleagues,setColleagues]=useState([]);
    const[owner,setOwner]=useState({
        projId:"",
        projName:"",
        projDescription:"",
        projOwner:"",
        projOwnerDescription:"",
        projOwnerImg:"",
        projImg:"",
        projFlowChartImg:""
    });
    const[jobs,setJobs]=useState(null);

    // const [jobs,setJobs]=useState({
    //     jobId:"",
    //     designation:"",
    //     jobDesc:"",
    //     requiredSkils:"",
    //     experience:null
    // });
    useEffect(()=>{
        viewEmploy();
    },[])
    const viewEmploy=async () =>{
        const result=await axios.get(`http://localhost:9002/api/v1/employee/${id2}`);
        setData(result.data);
        const res=await axios.get(`http://localhost:9003/api/v3/project/${project2}`);
        setSupport(res.data);
        console.log(res.data)
        const resp=await axios.get(`http://localhost:9002/api/v1/project/${project2}/${id2}`);
        setColleagues(resp.data);
        console.log(resp.data)
        const resp12=await axios.get(`http://localhost:9008/api/v5/search/${project2}`);
        setOwner(resp12.data);
        console.log(resp12.data)

        const resp123=await axios.get(`http://localhost:8031/api/v4/job/${project2}`);
        setJobs(resp123.data);
        console.log(resp123.data)


        
    }
    
    return(
        <div className='profileContainer'>
            <Topbar1 imageUrl={emp.imageUrl}/>
            <div className="profile">
                {/* <Sidebar/> */}
                
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="https://wallpapercave.com/wp/wp1838755.jpg"
                             alt="" 
                             className="coverPicture" 
                             />
                            <img src={emp.imageUrl} 
                            alt="" 
                            className="profileImage" 
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileName'>{emp.name}</h4>
                            <span className="profiledesc">Hello {emp.name}</span>
                        </div>
                    </div>
                    <div className='profile-support'>
                    <div className="profileRightBottom">
                        {/* <Feed/>
                        <Rightbar profile/> */}
                        
                        <div className='userDetails' >
                            
                            <h5 style={{textIndent:"0px"}}>Employee  ID</h5>
                            <h5 style={{textIndent:"0px"}}>Name  </h5>
                            <h5>Gender</h5>
                            <h5 style={{textIndent:"0px"}}>Email       </h5>
                            <h5 style={{textIndent:"0px"}}>Date of Birth</h5>
                            <h5>Phone Number</h5>
                            <h5>Address</h5>
                            <h5>Project Name</h5>
                            <h5>Supervisor Name</h5>
                             
                                                       
                        </div>
                        <div className='dot'>
                        
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            <h5 className='dot-space'>:</h5>
                            
                            
                        </div>
                        <div className="calendar">
                        
                            <h5 >{emp.employeeId}</h5>
                            <h5 >{emp.name}</h5>
                            <h5>{emp.gender}</h5>
                            <h5>{emp.email}</h5>
                            <h5>{emp.dateOfbirth}</h5>
                            <h5>{emp.phoneNumber}</h5>
                            <h5>{emp.address}</h5>
                            <h5>{emp.projectName}</h5>
                            <h5>{emp.supervisorName}</h5>
                        </div>
                        
                    </div>
                    <div className="support-team-user">
                    <h5 style={{color:"white"}}>Support Team</h5>
                            <div className="support-member">
                                
                                {support.map((e)=>(

                                <Accordion className="support-accordian" key={e.id}>
                                    <AccordionSummary>
                                        <div className="img-support-user">
                                            <img src={e.imageUrl} alt="" className="support-collegue" />
                                            <div className='name-support'>
                                                <p className="memName">{e.name}</p>
                                            </div>
                                        </div>
                                        
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-support'>
                                        <div className="support-details-user">
                                            <div className='details-1'>
                                            <p className='details-support'>Id</p>
                                            <p className='details-support'>Designation</p>
                                            <p className='details-support'>Email</p>
                                            <p className='details-support'>Phone No</p>
                                            </div>
                                            <div className='details-2'>
                                                <p className="passage-details">{e.name}</p>
                                                <p className="passage-details">{e.designation}</p>
                                                <p className="passage-details">{e.email}</p>
                                                <p className="passage-details">{e.phoneno}</p>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                                
                                ))}
                            </div> 
                    </div>
                    </div>
                    <div className="colleague-wrapper">
                    <div className="collegues">
                        
                        <div className="collegues-div">
                        <h5 className="colleguesList">Colleagues</h5>
                        </div>
                        
                        <div className="collegues-list" >
                        
                            {/* <div className="coll"  >   
                                <div className="colleague1">
                                    <img src={e.imageUrl} alt="" className="colleague-img" />
                                </div>
                                <div className="colliegue-info">
                                    <p className="collegue-name">Id:{e.employeeId}</p>
                                    <p className="collegue-name">Name:{e.name}</p>
                                    <p className="collegue-name">Email:{e.email}</p>
                                    <p className="collegue-name">Phone:{e.phoneNumber}</p>
                                </div>
                            </div> */}
                                    {colleagues.map((e)=>(
                                    <Accordion className="support-accordian" key={e.employeeId} >
                                    <AccordionSummary>
                                        <div className="img-support-user">
                                            <img src={e.imageUrl} alt="" className="support-collegue" />
                                            <div className='name-support'>
                                                <p className="memName">{e.name}</p>
                                            </div>
                                        </div>
                                        
                                    </AccordionSummary>
                                    <AccordionDetails className='accordian-support'>
                                        <div className="support-details-user">
                                            <div className='details-1'>
                                            <p className='details-support'>Id</p>
                                            <p className='details-support'>Name</p>
                                            <p className='details-support'>Email</p>
                                            <p className='details-support'>Phone No</p>
                                            </div>
                                            <div className='details-2'>
                                                <p className="passage-details">{e.employeeId}</p>
                                                <p className="passage-details">{e.name}</p>
                                                <p className="passage-details">{e.email}</p>
                                                <p className="passage-details">{e.phoneNumber}</p>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                              ))} 
                        </div>
                        
                        </div>
                        <div className="support-team-user" style={{marginTop:"20px",marginLeft:"17px",marginBottom:"30px"}} >
                            
                            <div className="collegues-div1" style={{paddingBottom:"5px"}}>
                                <h5 className="colleguesList" style={{paddingBottom:"10px"}}  >Owner</h5>
                            </div>
                            <div className="owner-div1" style={{backgroundColor:"white",width:"420px",height:"200px"}}>
                            <div className="owner-img1">
                                <img src={owner.projOwnerImg} alt="" className="owner-pic" style={{width:"150px",height:"150px",border:"3px solid grey",borderRadius:"50%"}} />
                            </div>
                            <div className="owner-name">
                                <h5>{owner.projOwner}</h5>
                            </div>
                            <div className="owner-desc">
                                <h6>{owner.projOwnerDescription}</h6>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-div">
                        <div className="jobs-container">
                        <Accordion className='jobs-div'>
                            <AccordionSummary>
                                <div className="projct-name">
                                    <h5>{owner.projName}</h5>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="pro-img" style={{backgroundImage:`url(${owner.projImg})`}}>
                                    <h5 className='proj-desc'>{owner.projDescription}</h5>
                                </div>
                                
                            </AccordionDetails>
                            <AccordionSummary>
                                <div className="project-flowchart">
                                    <h5 className='proj-des' >Project flow-chart</h5>
                                    <img src={owner.projFlowChartImg} alt="" className="flow-char" />
                                </div>
                            </AccordionSummary>
                        </Accordion>
                        </div>
                    </div>
                    <div className="project-pic11">
                        <h4 style={{color:"white"}}>JOb Vacancies</h4>
                        { jobs&& jobs.map((e)=>(
                        <div className="job-accordion" key={e.jobId}>
                            <Accordion>
                                <AccordionSummary>
                                    <div className="job-title-user">
                                        <h5>Position:{e.designation}</h5>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="job-user-1" style={{backgroundColor:"grey"}}>
                                        <div className="job-id">
                                            <h6><b>Job ID:</b>{e.jobId}</h6>
                                        </div>
                                        <div className="job-info">
                                            <h6><b>Job Description:</b></h6>
                                            <p>{e.jobDesc}</p>
                                        </div>

                                        <div className="job-skills">
                                            <p><b>Required Skills:</b>{e.requiredSkils}</p>
                                        </div>
                                        <div className="job-skills">
                                            <p><b>Experience:</b>{e.experience}</p>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}