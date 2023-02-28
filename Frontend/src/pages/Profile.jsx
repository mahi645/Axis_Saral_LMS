import "./profile.css";
import {motion} from "framer-motion";
import { FaHome,FaUser, FaVenus, FaAd, FaBars} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import TopBar from "../components/topBar/Topbar";
import { useState } from "react";
const routes=[
        {
            path:"/pro/about",
            name:"About",
            icon:<FaHome/>
        },
        {
            path: "/pro/support",
            name: "Support",
            icon: <FaUser />,
          },
          {
            path: "/pro/feed",
            name: "Employees",
            icon: <FaVenus />,
          },
          {
            path: "/pro/stake",
            name: "StakeHolders",
            icon: <FaAd/>,
          },
]
export default function Profile({children}) {
    const [isActive,setActive]=useState(false);
    const toggle=()=>setActive(!isActive);
    const showAnimation = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        show: {
          opacity: 1,
          width: "auto",
          transition: {
            duration: 0.5,
          },
        },
      };
  return (
    <div className='sidebarContainer'>
        <TopBar/>
      <motion.div animate={{width:isActive?"200px":"45px",transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },}} className="sidebar">
        <div className="top_section">
            {isActive && <h4>Welcome</h4>}
            <div className="bars">
            <FaBars onClick={toggle}/>
            </div>
            
        </div>
        <section className="section-routes">
            {routes.map((route=>
            <NavLink to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                <div className="linkText">{route.name}</div>
            </NavLink>
            ))}
        </section>
        <main>
            {children}
        </main>
      </motion.div>


    </div>
  )
}
