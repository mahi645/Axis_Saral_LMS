import './stakeholders.css'
//import {Carousel} from 'react-material-ui'
import Carousel from 'react-material-ui-carousel';
import AdminTopbar from '../../components/topbar1/AdminTopbar'
// import Accordion  from '@material-ui/core/Accordion'
// import  AccordionSummary  from '@material-ui/core/AccordionSummary'
// import AccordionDetails  from '@material-ui/core/AccordionDetails'
import {AccordionSummary,AccordionDetails,Accordion} from '@material-ui/core';

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AdminStakeHolders= () => {
    const[id,setId1]=useState('');
    const[name1,setName2]=useState('');
    const[email1,setEmail2]=useState('');
    const[address1,setAddress2]=useState('');
    const[imageUrl1,setImageUrl2]=useState('');
    const [shares,setShares]=useState('');
    
    const navigate=useNavigate();
    const onSubmit=()=>{
            axios.post(`http://localhost:8081/api/v2/add`,{
                id:id,
                name:name1,
                address:address1,
                no_of_shares:shares,
                email:email1,
                imageUrl:imageUrl1,
                
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
                axios.delete("http://localhost:8081/api/v2/delete/" + id).then((res) => {
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
        
        axios.get("http://localhost:8081/api/v2/all").then((response) => {
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
    <div className='stake-box'>
        <AdminTopbar/>
        <div className='stake-searchbar'>
            <input type="text" className='stake-search-input' placeholder='  Search here' value={query} onChange={(e)=>handleSearch(e)}/>
            <button className='stake-search'>Search</button>
        </div>
        <div className="stake-wrapper">
            <div className='stake-leftcontainer'>
                <div className='stake-crousel'>
                    <Carousel className='stake-carousel'>
                        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/04/how-to-future-proof-bank-employee-training.jpeg" alt="" className='stake-image' />
                        <img src="https://www.technologyrecord.com/Portals/0/EasyDNNNews/5683/940443p512EDNmainunified-banking-.jpg" alt="" className='stake-image'/>
                        <img src="https://www.axisbank.com/annual-report-2015-2016/images/slide-4.jpg" alt="" className='stake-image'/>
                    </Carousel>
                </div>
                <div className="stake-picture">
                    
                </div>

            </div>
            <div className='stake-rightcontainer'>
                <div className='stake-addemployee'>
                    <Accordion>
                        <AccordionSummary >
                            <p className='stake-edittitle'>Add or Edit</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <div className='stake-input-id'>
                                    <input type="text" placeholder='Stakeholder Id' onChange={(e)=>setId1(e.target.value)} />
                                    <input type="text" placeholder='Name' onChange={(e)=>setName2(e.target.value)} />
                                </div>
                                <div className='stake-input-id'>
                                    <input type="email" placeholder='Email' onChange={(e)=>setEmail2(e.target.value)} />
                                    <input type="text" placeholder='NO.of Shares Holding' onChange={(e)=>setShares(e.target.value)}/>
                                </div>
                                <div className='stake-input-id'>
                                    <input type="text" placeholder='Address' onChange={(e)=>setAddress2(e.target.value)}/>
                                    <input type="text" placeholder='ImageUrl' onChange={(e)=>setImageUrl2(e.target.value)} />
                                </div>
                                <div className='stake-input-id'>
                                    <button className='stake-editemployeebutton' onClick={ onSubmit } >Edit</button>
                                    <button className='stake-editemployeebutton' onClick={onSubmit} >Add</button>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div><br/><br/>
                
                { emp.map((e)=>(
                <div className='stake-viewemployee' key={e.id}>
                    <div className="stake-viewemployeewrapper">
                        <img src={e.imageUrl} 
                        className="stake-wrapperimage"alt="" />
                    </div>
                    

                    
                    <div className="stake-viewemployeedetails">
                        <div className="stake-employHeadings1">
                        <h5 className='stake-viewemployeetitle' > Id       </h5>
                        <h5 className='stake-viewemployeetitle'> Name        </h5>
                        <h5 className='stake-viewemployeetitle'> Email           </h5>
                        <h5 className='stake-viewemployeetitle'>Shares   </h5>
                        <h5 className='stake-viewemployeetitle'> Address   </h5> 
                        
                        </div>
                        <div className="stake-employColon">
                            <h5 className="stake-colonSymbol">:</h5>
                            <h5 className="stake-colonSymbol">:</h5>
                            <h5 className="stake-colonSymbol">:</h5>
                            <h5 className="stake-colonSymbol">:</h5>
                            <h5 className="stake-colonSymbol">:</h5>
                            
                        </div>
                        <div className="stake-employDetails1">
                            <h5 className="stake-employInfo11">{e.id}</h5>
                            <h5 className="stake-employInfo1">{e.name}</h5>
                            <h5 className="stake-employInfo1">{e.email}</h5>
                            <h5 className="stake-employInfo1">{e.no_of_shares}</h5>
                            <h5 className="stake-employInfo1">{e.address}</h5>
                            
                        </div>
                    </div>
                    <div className='stake-deleteEmp'>
                        <button className='stake-editemployeebutton' onClick={() => { Removefunction(e.id) }}>Delete</button>
                    </div>
                
                </div>
                ) )}
            </div>
           
        </div>
      
    </div>
  )
}

export default AdminStakeHolders;