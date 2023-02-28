import './employee.css'
import Carousel from 'react-material-ui-carousel'
import AdminTopbar from '../../components/topbar1/AdminTopbar'
import Accordion  from '@material-ui/core/Accordion'
import  AccordionSummary  from '@material-ui/core/AccordionSummary'
import AccordionDetails  from '@material-ui/core/AccordionDetails'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Employee2 = () => {
    const[employ1,setEmp1]=useState('');
    const[name1,setName1]=useState('');
    const[pwd1,setPwd1]=useState('');
    const[desig1,setDesig1]=useState('');
    const[proj1,setProj1]=useState('');
    const[supervisor1,setSupervisor1]=useState('');
    const[join1,setJoiningDate11]=useState('');
    const[dateOfbirth1,setDateOfBirth1]=useState('');
    const[email1,setEmail1]=useState('');
    const[address1,setAddress1]=useState('');
    const[phNo1,setPhno1]=useState('');
    const[gender1,setGender1]=useState('');
    const[imageUrl1,setImageUrl1]=useState('');
    const[appoint,setAppoint]=useState('');
    const navigate=useNavigate();
    const onSubmit=()=>{
            axios.post(`http://localhost:9002/api/v1/add`,{
                employeeId:employ1,
                name:name1,
                dateOfbirth:dateOfbirth1,
                joiningDate:join1,
                gender:gender1,
                address:address1,
                appointmentDate:appoint,
                phoneNumber:phNo1,
                email:email1,
                password:pwd1,
                projectName:proj1,
                supervisorName:supervisor1,
                imageUrl:imageUrl1,
                designation:desig1
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
                axios.delete("http://localhost:9002/api/v1/delete/" + id).then((res) => {
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
        
        axios.get("http://localhost:9004/api/v1/all").then((response) => {
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
        <AdminTopbar/>
        <div className='emp-searchbar'>
            <input type="text" className='search-input' placeholder='Search here' value={query} onChange={(e)=>handleSearch(e)}/>
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
                    <Accordion>
                        <AccordionSummary >
                            <p className='edittitle'>Add or Edit</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Employee Id' onChange={(e)=>setEmp1(e.target.value)} />
                                    <input type="text" placeholder='Name' onChange={(e)=>setName1(e.target.value)} />
                                </div>
                                <div className='input-id'>
                                    <input type="email" placeholder='Email' onChange={(e)=>setEmail1(e.target.value)} />
                                    <input type="text" placeholder='PhoneNumber' onChange={(e)=>setPhno1(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Gender' onChange={(e)=>setGender1(e.target.value)}/>
                                    <input type="text" placeholder='DateOfBirth' onChange={(e)=>setDateOfBirth1(e.target.value)} />
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Desgination' onChange={(e)=>setDesig1(e.target.value)}/>
                                    <input type="text" placeholder='Joining Date'  onChange={(e)=>setJoiningDate11(e.target.value)}/>
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Appiontment Date' onChange={(e)=>setAppoint(e.target.value)}/>
                                    <input type="text" placeholder='Project Name' onChange={(e)=>setProj1(e.target.value)} />
                                </div>
                                <div className='input-id'>
                                    <input type="text" placeholder='Supervisor Name' onChange={(e)=>setSupervisor1(e.target.value)}/>
                                    <input type="text" placeholder='ImageUrl' onChange={(e)=>setImageUrl1(e.target.value)} />
                                </div>
                                <div className='input-id'>
                                    <input type="password" placeholder='Password' onChange={(e)=>setPwd1(e.target.value)}/>
                                    <input type="text" placeholder='Address' onChange={(e)=>setAddress1(e.target.value)} />
                                </div>
                                <div className='input-id'>
                                    <button className='editemployeebutton' onClick={onSubmit} >Edit</button>
                                    <button className='editemployeebutton' onClick={onSubmit} >Add</button>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
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
                    <div className='deleteEmp'>
                        <button className='editemployeebutton' onClick={() => { Removefunction(e.employeeId) }}>Delete</button>
                    </div>
                
                </div>
                ) )}
            </div>
           
        </div>
      
    </div>
  )
}

export default Employee2;