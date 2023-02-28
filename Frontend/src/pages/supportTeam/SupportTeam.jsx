import './supportTeam.css'
import Carousel from 'react-material-ui-carousel'
import AdminTopbar from '../../components/topbar1/AdminTopbar'
import Accordion  from '@material-ui/core/Accordion'
import  AccordionSummary  from '@material-ui/core/AccordionSummary'
import AccordionDetails  from '@material-ui/core/AccordionDetails'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar1 from '../../components/topbar1/Topbar1'
const SupportTeam= () => {
    const[id,setId1]=useState('');
    const[name1,setName2]=useState('');
    const[email1,setEmail2]=useState('');
    const[phoneno1,setPhone1]=useState('');
    const[imageUrl1,setImageUrl2]=useState('');
    const [designation,setdesignation1]=useState('');
    const[project,setProject]=useState('');
    
    const navigate=useNavigate();
    
        

        
        
    const [emp,setEmp]=useState([])
    const[filterdata,setfilterdata]=useState([]);
    const [query,setQuery]=useState('');
    useEffect(() => {
        
        axios.get("http://localhost:9003/api/v3/getAll").then((response) => {
        setEmp(response.data);
        setfilterdata(response.data);
        console.log(response.data);
        });
    }, []);
    const handleSearch=(event)=>{
        const getSearch=event.target.value;
        setQuery(getSearch);
        if(getSearch.length>0){
            const searchData=emp.filter((i)=>i.id.toUpperCase().includes(getSearch));
            setEmp(searchData);
        }
        else{
            setEmp(filterdata);
        }
        setQuery(getSearch);

    }
    return (
    <div className='support-box'>
        <Topbar1/>
        <div className='support-searchbar'>
            <input type="text" className='support-search-input' placeholder='  Search here' value={query} onChange={(e)=>handleSearch(e)}/>
            <button className='support-search'>Search</button>
        </div>
        <div className="support-wrapper">
            <div className='support-leftcontainer'>
                <div className='support-crousel'>
                    <Carousel className='support-carousel'>
                        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/04/how-to-future-proof-bank-employee-training.jpeg" alt="" className='support-image' />
                        <img src="https://www.technologyrecord.com/Portals/0/EasyDNNNews/5683/940443p512EDNmainunified-banking-.jpg" alt="" className='support-image'/>
                        <img src="https://www.axisbank.com/annual-report-2015-2016/images/slide-4.jpg" alt="" className='support-image'/>
                    </Carousel>
                </div>
                <div className="support-picture">
                    
                </div>

            </div>
            <div className='support-rightcontainer'>
                <div className='support-addemployee'>
                    
                </div><br/><br/>
                
                { emp.map((e)=>(
                <div className='support-viewemployee' key={e.id}>
                    <div className="support-viewemployeewrapper">
                        <img src={e.imageUrl} 
                        className="support-wrapperimage"alt="" />
                    </div>
                    

                    
                    <div className="support-viewemployeedetails">
                        <div className="support-employHeadings1">
                        <h5 className='support-viewemployeetitle' > Id       </h5>
                        <h5 className='support-viewemployeetitle'> Name        </h5>
                        <h5 className='support-viewemployeetitle'> Email           </h5>
                        <h5 className='support-viewemployeetitle'> Phone Num   </h5>
                        <h5 className='support-viewemployeetitle'> Project   </h5>
                        
                        <h5 className='support-viewemployeetitle'> Designation   </h5>
                        
                        </div>
                        <div className="support-employColon">
                            <h5 className="support-colonSymbol">:</h5>
                            <h5 className="support-colonSymbol">:</h5>
                            <h5 className="support-colonSymbol">:</h5>
                            <h5 className="support-colonSymbol">:</h5>
                            <h5 className="support-colonSymbol">:</h5>
                            <h5 className="support-colonSymbol">:</h5>
                           
                            
                        </div>
                        <div className="support-employDetails1">
                            <h5 className="support-employInfo11">{e.id}</h5>
                            <h5 className="support-employInfo1">{e.name}</h5>
                            <h5 className="support-employInfo1">{e.email}</h5>
                            <h5 className="support-employInfo1">{e.phoneno}</h5>
                            <h5 className="support-employInfo1">{e.projectname}</h5>
                            <h5 className="support-employInfo1">{e.designation}</h5>
                            
                        </div>
                    </div>
                    
                
                </div>
                ) )}
            </div>
           
        </div>
      
    </div>
  )
}

export default SupportTeam;