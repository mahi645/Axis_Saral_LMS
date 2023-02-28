import Topbar from '../../components/topBar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Feed from '../../components/feed/Feed';
import About from '../../components/about/About';
import Joiningletter from '../../components/joining/Joiningletter.jsx';
import { EmojiPeople } from '@material-ui/icons';
import Topbar1 from '../../components/topbar1/Topbar1';
import Footer from '../../components/footer/Footer';
import AdminTopbar from '../../components/topbar1/AdminTopbar';
import Carousel from 'react-material-ui-carousel';
export default function AdminHome() {
    
    
  return (
    <div className='homeContainer'>
        {/* <Topbar imageUrl={emp.imageUrl}/> */}
        <AdminTopbar/>
        <div className="homeWrapper">
          <Carousel className='home-caurosel'>
            <img src="https://i.pinimg.com/originals/ed/8d/1c/ed8d1c652cf9c69acf39b973a64995ac.jpg" alt="" className="homeCaurosel" />
            <img src="https://hvaccareermap.org/assets/image-uploads/Sales-Marketing-Associate_resized.jpg" alt="" className="homeCaurosel" />
            <img src="https://corporatetraining.usf.edu/hs-fs/hubfs/ctpe-blog-04-20-5-traits-of-effective-business-analysts-inline.jpg?width=740&name=ctpe-blog-04-20-5-traits-of-effective-business-analysts-inline.jpg" alt="" className="homeCaurosel" />
           </Carousel>
        
        </div>
        <Footer/>
    </div>
  )
}
