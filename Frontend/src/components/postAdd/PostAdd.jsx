import "./postadd.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
export default function PostAdd() {
    const [id,setId]=useState();
    const [img,setimg]=useState();
    const [desc,setdesc]=useState({});
    const [likes,setLikes]=useState(null);
    const[imgText,setimgText]=useState();
    const navigate=useNavigate();
    const onSubmit=()=>{
        if(id=='' && img==''){
            alert("Fill Details");
          }
        
            axios.post(`http://localhost:8030/api/v8/add`,{
                id:id,
                img:img,
                desc:desc,
                likes:likes,
                imgText:imgText
            }).then(response=>{return response.data
                // console.log(response.data)
            })
            
            .then((response)=>{
                {
                    // pathchg(history);
                    console.log(response)
                    alert("post added successfully")
                   navigate('/feeds');
                }
                
            })
    
            
        }
  return (
    <div className='addPost'>
      
      <div>
      
          <h4 style={{color:"#1775ee"}}>Add or Edit Post</h4>
        
          <input placeholder="Enter ID" name="ID" type="text" className="postid"  onChange={(e)=>setId(e.target.value)}/>
          <input placeholder="Enter image Url"  type="text" className="postimg" onChange={(e)=>setimg(e.target.value)} />
          <input placeholder="Enter Description"  type="text" className="postimg" onChange={(e)=>setimgText(e.target.value)} />
        <div>
          <button className="forgotpasswordButton" onClick={onSubmit}> Add </button>
           <button className="forgotpasswordButton" onClick={onSubmit}> Edit </button>
           
      
        </div>
         
      </div>
      
    </div>
  )
}
