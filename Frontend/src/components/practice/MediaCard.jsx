import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Accordion,AccordionSummary,AccordionDetails } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import PostAdd from '../postAdd/PostAdd';

export default function MediaCard() {

  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
        axios.delete("http://localhost:8030/api/v8/delete/" + id).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
  }

    const [empdata, empdatachange] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8030/api/v8/posts").then((response) => {
        empdatachange(response.data);
       });
      }, []);
  return (

    <div >
        <PostAdd/>
        <Typography style={{marginTop:"20px"}}>
        { empdata &&
                empdata.map((item,index)=>(
    <Card sx={{ maxWidth: 345 ,marginTop:"10px"}} key={index}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {empdata.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {empdata.imgText}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" >Share</Button>
        <Button size="small">Learn More</Button> */}
        <Accordion>
            <AccordionSummary style={{backgroundColor:"#1775ee",color:"white"}} >Comments</AccordionSummary>
            <AccordionDetails style={{backgroundColor:"#177777",color:"white"}}>
                <div>
            {
                Object.entries(item.desc).map(([key,value],i)=>(
                    <p  key={i} >        
                        {key}-{value}
                                        
                    </p>
                    ))
            }
            </div>
            </AccordionDetails>
        </Accordion>
        <div>
            {/* <Accordion>
                <AccordionSummary style={{backgroundColor:"rgb(207, 220, 20)"}}>Leave your Comment</AccordionSummary>
                <AccordionDetails style={{width:"200px",backgroundColor:"greenyellow"}}>
                    <div style={{width:"60px",}} >
                    <div ><input type="text" placeholder='Id' style={{width:"150px",padding:"3px",margin:"3px"}}/></div>
                    <div ><input type="text" placeholder='name' style={{width:"150px",padding:"3px",margin:"3px"}}/></div>
                    
                    <div ><input type="text" placeholder='comment' style={{width:"150px",padding:"3px",margin:"3px"}}/></div>
                    <div ><button type="submit" style={{paddingRight:"100px"}}><center >submit</center></button></div>
                    </div>

                </AccordionDetails>
            </Accordion> */}
            <div className='deleteEmp1'>
                        <button className='editemployeebutton' style={{ width: "140px",
                          height: "48px",
                          backgroundColor: "#1775ee",
                          border:"none",
                          marginLeft: "8px",
                        marginTop:"8px"
                      }} 
                          onClick={() => { Removefunction(item.id) }}>Delete</button>
            </div>
        </div>
      </CardActions>
    </Card>
    ))
    }
    </Typography>
    </div>
  );
}