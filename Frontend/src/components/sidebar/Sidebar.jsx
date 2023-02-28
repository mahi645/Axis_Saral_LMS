import './sidebar.css';
import {RssFeed,Chat,PlayCircleFilled, Bookmark,HelpOutlineRounded, WorkOutline,Event, Group} from '@material-ui/icons'
import { Button, Link } from '@material-ui/core';
// import { Users } from '../../../data'
// import Closefriend from '../closeFriends/Closefriend';
import Feed from '../feed/Feed';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIconFeed'/>
            <Link to="" className="sidebarIconText" >Feed</Link>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIconChat'/>
            <span className="sidebarIconText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className='sidebarIconVideo'/>
            <span className="sidebarIconText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIconBookmark'/>
            <span className="sidebarIconText">BookMarks</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIconGroup'/>
            <span className="sidebarIconText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineRounded className='sidebarIconQuestion'/>
            <span className="sidebarIconText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIconJobs'/>
            <span className="sidebarIconText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIconEvent'/>
            <span className="sidebarIconText">Events</span>
          </li>
        </ul>
        
        
      </div>
      
    
    </div>
  )
}
