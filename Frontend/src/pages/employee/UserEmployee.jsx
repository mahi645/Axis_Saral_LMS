import './employee.css'
import Carousel from 'react-material-ui-carousel'
import Accordion  from '@material-ui/core/Accordion'
import  AccordionSummary  from '@material-ui/core/AccordionSummary'
import AccordionDetails  from '@material-ui/core/AccordionDetails'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar1 from '../../components/topbar1/Topbar1'
 const UserEmployee = () => {
    
    
    
    const [emp,setEmp]=useState([])
    const[filterdata,setfilterdata]=useState([]);
    const [query,setQuery]=useState('');
    useEffect(() => {
        
        axios.get("http://localhost:9002/api/v1/employees").then((response) => {
        setEmp(response.data);
        setfilterdata(response.data);
        console.log(response.data);
        });
    }, []);
    const handleSearch=(event)=>{
        const getSearch=event.target.value;
        setQuery(getSearch);
        if(getSearch.length>0){
            const searchData=emp.filter((i)=>i.employeeId.toUpperCase().includes(getSearch));
            setEmp(searchData);
        }
        else{
            setEmp(filterdata);
        }
        setQuery(getSearch);

    }
    return (
    <div className='employee-box'>
        <Topbar1/>
        <div className='emp-searchbar'>
            <input type="text" className='search-input' placeholder='  Search here' value={query} onChange={(e)=>handleSearch(e)}/>
            <button className='emp-search'>Search</button>
        </div>
        <div className="employee-wrapper">
            <div className='employee-leftcontainer'>
                <div className='emp-crousel'>
                    <Carousel className='emp-carousel'>
                        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/04/how-to-future-proof-bank-employee-training.jpeg" alt="" className='emp-image' />
                        <img src="https://www.technologyrecord.com/Portals/0/EasyDNNNews/5683/940443p512EDNmainunified-banking-.jpg" alt="" className='emp-image'/>
                        <img src="https://www.axisbank.com/annual-report-2015-2016/images/slide-4.jpg" alt="" className='emp-image'/>
                    </Carousel>
                </div>
                <div className="emp-picture">
                    
                </div>

            </div>
            <div className='employee-rightcontainer'>
                <div className='addemployee'>
                   
                </div><br/><br/>
                
                { emp.map((e)=>(
                <div className='viewemployee' key={e.employeeId}>
                    <div className="viewemployeewrapper">
                        <img src={e.imageUrl} 
                        className="wrapperimage"alt="" />
                    </div>
                    

                    
                    <div className="viewemployeedetails">
                        <div className="employHeadings1">
                        <h5 className='viewemployeetitle' > EmployeeId       </h5>
                        <h5 className='viewemployeetitle'> Name        </h5>
                        <h5 className='viewemployeetitle'> Email           </h5>
                        <h5 className='viewemployeetitle'> Desgination   </h5>
                        <h5 className='viewemployeetitle'> Project Name    </h5> 
                        <h5 className='viewemployeetitle'> Supervisor Name</h5>
                        <h5 className='viewemployeetitle'> Phone Number   </h5>
                        </div>
                        <div className="employColon">
                            <h5 className="colonSymbol">:</h5>
                            <h5 className="colonSymbol">:</h5>
                            <h5 className="colonSymbol">:</h5>
                            <h5 className="colonSymbol">:</h5>
                            <h5 className="colonSymbol">:</h5>
                            <h5 className="colonSymbol">:</h5>
                            <h5 className="colonSymbol">:</h5>
                        </div>
                        <div className="employDetails1">
                            <h5 className="employInfo11">{e.employeeId}</h5>
                            <h5 className="employInfo1">{e.name}</h5>
                            <h5 className="employInfo1">{e.email}</h5>
                            <h5 className="employInfo1">{e.designation}</h5>
                            <h5 className="employInfo1">{e.projectName}</h5>
                            <h5 className="employInfo1">{e.supervisorName}</h5>
                            <h5 className="employInfo1">{e.phoneNumber}</h5>
                        </div>
                    </div>
                    
                
                </div>
                ) )}
            </div>
           
        </div>
      
    </div>
  )
}
export default UserEmployee;
