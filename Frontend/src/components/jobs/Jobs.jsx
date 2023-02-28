import './jobs.css'
import AdminTopbar from '../topbar1/AdminTopbar'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Jobs() {
  const[jobId,setJobId]=useState('');
  const[projname,setProjname]=useState('');
  const[designation,setDesignation]=useState('');
  const[skills,setSkills]=useState('');
  const[jobDesc,setJobDesc]=useState('');
  const[exp,setExperience]=useState('');
  
  const onSubmit=()=>{
    axios.post(`http://localhost:8031/api/v4/add`,{
      jobId:jobId,
      projectname:projname,
      designation:designation,
      requiredSkils:skills,
      jobDesc:jobDesc,
      experience:exp
    }).then(response=>{return response.data
        // console.log(response.data)
    })
    .then((response)=>{
        {
            console.log(response)
            alert("post added successfully")
            window.location.reload();
        }
        
    })

    
  }   

 
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
        axios.delete("http://localhost:8031/api/v4/delete/" + id).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
  }
      
  const [emp,setEmp]=useState([])
  const[filterdata,setfilterdata]=useState([]);
  const [query,setQuery]=useState('');
  useEffect(() => {
      
      axios.get("http://localhost:8031/api/v4/all").then((response) => {
      setEmp(response.data);
      setfilterdata(response.data);
      console.log(response.data);
      });
  }, []);
  const handleSearch=(event)=>{
      const getSearch=event.target.value;
      setQuery(getSearch);
      if(getSearch.length>0){
          const searchData=emp.filter((i)=>i.jobId.toUpperCase().includes(getSearch));
          setEmp(searchData);
      }
      else{
          setEmp(filterdata);
      }
      setQuery(getSearch);

  }
  return (
    <div>
      <AdminTopbar/>
      <div className="search-div-live1">
        <div className="search-input-div1">
          <div className="search-input-live11">
            <input className='search-pro1' placeholder='Search here' value={query} onChange={(e)=>handleSearch(e)}/>
            <button className='search-btn-live1'>Search</button>
          </div>
        </div>
      </div>
      <div className="live-projects-container1">
          <div className="live-left-container1">
            <div className="live-left-wrapper1">
              <div className="projects-live-accordian1">
                <div className="projects-live-title1">
                  <h5>Job Vacancies</h5>
                </div>
                {emp.map((e)=>(

               
                <div className="accordion-div-live-pro1" key={e.jobId}>
                <Accordion className='live-accordian1'>
                  <AccordionSummary className='live-projects-summary1'>
                    <div className="projects-wrapper-button1">
                    {/* <div className="project-name-summary1">
                      <h5 className="project-title-name1" style={{color:"#1777ee"}}>{e.jobId}</h5>
                    </div> */}
                    <div className="project-name-job1">
                                <p className="name-job" style={{color:"#1777ee"}}> <b>{e.designation}:{e.projectname}:{e.jobId}</b></p>
                                
                     </div>
                    <div className="delete-project-div11">
                          <button className='del-project-button11' onClick={() => { Removefunction(e.jobId) }}>Delete</button>
                      
                    </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className='live-projects-details1'>
                    <div className="jobs-wrapper-div">
                        <div className="job-desc-info">
                            
                            <div className="project-name-job">
                                <p className="name-job"> <b>Project Name:</b>{e.projectname}</p>
                                
                            </div>
                            <div className="project-name-job1">
                                <p className="name-job"><b>Position:</b>{e.designation}</p>
                            </div>
                            <div className="project-name-job1">
                                <p className="name-job"><b>Responsibilities:</b></p>
                            </div>
                            <div className="job-desc-pro">
                                <p>{e.jobDesc}</p>
                            </div>
                            <div className="project-name-job1">
                                <p className="name-job"><b>Skills Required:</b>{e.requiredSkils}</p>
                            </div>
                            <div className="project-name-job1">
                                <p className="name-job"><b>Experience required:</b>{e.experience}</p>
                            </div>
                        </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                </div>
                 ))}
              </div>
            </div>
          </div>
          <div className="live-right-container1">
            <div className="live-right-wrapper1">
                <div className="projects-accordioan-live1">
                  <Accordion  className='projects-accordion1'>
                    <AccordionSummary className='projects-summary-live1'>
                          <div className="projects-add-edit1">
                            <h5 style={{marginLeft:"130px"}}>Add or Edit</h5>
                          </div>
                    </AccordionSummary>
                    <AccordionDetails className='projects-details-live1'>
                      <div className="add-div-conatiner1">
                        <div className="input-div-project1">
                          <input type="text" className="add-input1" placeholder='Job Id' onChange={(e)=>setJobId(e.target.value)}/>
                        </div>
                        <div className="input-div-project1">
                          <input type="text" className="add-input1" placeholder='Project Name' onChange={(e)=>setProjname(e.target.value)}/>
                        </div>
                        <div className="input-div-project1">
                          <input type="text" className="add-input1" placeholder='Desination' onChange={(e)=>setDesignation(e.target.value)}/>
                        </div>
                        <div className="input-div-project12">
                          <textarea type="text-area" className="add-input12" placeholder='Job Description' onChange={(e)=>setJobDesc(e.target.value)} />
                        </div>
                        <div className="input-div-project1">
                          <input type="text" className="add-input1" placeholder='Required Skills' onChange={(e)=>setSkills(e.target.value)} />
                        </div>
                        <div className="input-div-project1">
                          <input type="text" className="add-input1" placeholder='Experience Required' onChange={(e)=>setExperience(e.target.value)}/>
                        </div>
                        
                        
                        <div className="input-div-project1">
                          <button className='add-project-button1' onClick={ onSubmit }>Add</button>
                          <button className='add-project-button1' onClick={ onSubmit}>Edit</button>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
            </div>
          </div>

      </div>
    </div>
  )
}
