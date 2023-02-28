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

export default function AdminMediaCard() {
    const [empdata, empdatachange] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8030/api/v8/posts").then((response) => {
        empdatachange(response.data);
       });
      }, []);
  return (

    <div >
        
        <Typography>
        { empdata &&
                empdata.map((item,index)=>(
    <Card sx={{ maxWidth: 345 }} key={index}>
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
            <AccordionSummary style={{backgroundColor:"#1775ee"}} >Comments</AccordionSummary>
            <AccordionDetails style={{backgroundColor:"#177777"}}>
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
            <Accordion>
                <AccordionSummary style={{backgroundColor:"#1775ee"}}>Leave your Comment</AccordionSummary>
                <AccordionDetails style={{width:"200px",backgroundColor:"#177777"}}>
                    <div style={{width:"60px",}} >
                    <div ><input type="text" placeholder='Id' style={{width:"150px",padding:"3px",margin:"3px"}}/></div>
                    <div ><input type="text" placeholder='name' style={{width:"150px",padding:"3px",margin:"3px"}}/></div>
                    
                    <div ><input type="text" placeholder='comment' style={{width:"150px",padding:"3px",margin:"3px"}}/></div>
                    <div ><button type="submit" style={{paddingRight:"100px",backgroundColor:"#1775ee"}}><center >submit</center></button></div>
                    </div>

                </AccordionDetails>
            </Accordion>
        </div>
      </CardActions>
    </Card>
    ))
    }
    </Typography>
    </div>
  );
}