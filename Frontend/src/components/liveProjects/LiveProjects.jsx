import './liveProjects.css'
import AdminTopbar from '../topbar1/AdminTopbar'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function LiveProjects() {
  const[projId,setProjId]=useState('');
  const[projname,setProjname]=useState('');
  const[projOwner,setOwner]=useState('');
  const[projOwnerDes,setProjOwnerDes]=useState('');
  const[projImg,setProjImage]=useState('');
  const[projDesc,setProjDesc]=useState('');
  const[projFlowchart,setProjFlowChart]=useState('');
  const[projOwnerImg,setProjOwnerImg]=useState('');
  const onSubmit=()=>{
    axios.post(`http://localhost:9008/api/v5/add`,{
      projId:projId,
      projName:projname,
      projDescription:projDesc,
      projOwner:projOwner,
      projOwnerDescription:projOwnerDes,
      projOwnerImg:projOwnerImg,
      projImg:projImg,
      projFlowChartImg:projFlowchart
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
        axios.delete("http://localhost:9008/api/v5/delete/" + id).then((res) => {
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
      
      axios.get("http://localhost:9008/api/v5/all").then((response) => {
      setEmp(response.data);
      setfilterdata(response.data);
      console.log(response.data);
      });
  }, []);
  const handleSearch=(event)=>{
      const getSearch=event.target.value;
      setQuery(getSearch);
      if(getSearch.length>0){
          const searchData=emp.filter((i)=>i.projId.toUpperCase().includes(getSearch));
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
      <div className="search-div-live">
        <div className="search-input-div">
          <div className="search-input-live1">
            <input className='search-pro' placeholder='Search here' value={query} onChange={(e)=>handleSearch(e)}/>
            <button className='search-btn-live'>Search</button>
          </div>
        </div>
      </div>
      <div className="live-projects-container">
          <div className="live-left-container">
            <div className="live-left-wrapper">
              <div className="projects-live-accordian">
                <div className="projects-live-title">
                  <h5>Live Projects</h5>
                </div>
                { emp.map((e)=>(
                <div className="accordion-div-live-pro" key={e.projId}>
                <Accordion className='live-accordian'>
                  <AccordionSummary className='live-projects-summary'>
                    <div className="projects-wrapper-button">
                    <div className="project-name-summary">
                      <h5 className="project-title-name" style={{color:"#1777ee"}}>{e.projId}-{e.projName}</h5>
                    </div>
                    <div className="delete-project-div1">
                          <button className='del-project-button1' onClick={() => { Removefunction(e.projId) }}>Delete</button>
                      
                    </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className='live-projects-details'>
                    <div className="project-live-desc-wrapper">
                      <div className="owner-live-project">
                        <div className="owner-project-img">
                          <img src={e.projOwnerImg}
                           alt="" className="owner-img-live" />
                           <div className="project-owner-name">
                            <h6 className="owner-name-live">{e.projOwner}</h6>
                            <p className="owner-desc-script">{e.projOwnerDescription}</p>
                           </div>
                           
                        </div>
                        <div className="project-projectId" style={{backgroundImage:`url(${e.projImg})`}}>
                            <div className="project-desc-1">
                              <h6>{e.projDescription}</h6>
                            </div>
                            
                        </div>
                        <div className="project-flowchart-live">
                              <h6 style={{fontSize:"23px"}}>Flow Chart</h6>
                        </div>
                        <div className="live-project-chart">
                          <img src={e.projFlowChartImg} 
                          alt="" className="flow-chart-live1" />
                        </div>
                        {/* <div className="delete-project-div">
                          <button className='del-project-button'>Delete</button>
                      
                        </div> */}
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                </div>
                ) )}
              </div>
            </div>
          </div>
          <div className="live-right-container">
            <div className="live-right-wrapper">
                <div className="projects-accordioan-live">
                  <Accordion  className='projects-accordion'>
                    <AccordionSummary className='projects-summary-live'>
                          <div className="projects-add-edit">
                            <h5 style={{marginLeft:"130px"}}>Add or Edit</h5>
                          </div>
                    </AccordionSummary>
                    <AccordionDetails className='projects-details-live'>
                      <div className="add-div-conatiner">
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Id' onChange={(e)=>setProjId(e.target.value)}/>
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Name' onChange={(e)=>setProjname(e.target.value)}/>
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Owner Name' onChange={(e)=>setOwner(e.target.value)}/>
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Owner Description' onChange={(e)=>setProjOwnerDes(e.target.value)} />
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Owner ImageUrl' onChange={(e)=>setProjOwnerImg(e.target.value)} />
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project ImageUrl' onChange={(e)=>setProjImage(e.target.value)}/>
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Description' onChange={(e)=>setProjDesc(e.target.value)} />
                        </div>
                        <div className="input-div-project">
                          <input type="text" className="add-input" placeholder='Project Flowchart url' onChange={(e)=>setProjFlowChart(e.target.value)}/>
                        </div>
                        <div className="input-div-project">
                          <button className='add-project-button' onClick={ onSubmit }>Add</button>
                          <button className='add-project-button' onClick={ onSubmit}>Edit</button>
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
