import "./topbar.css";
import {Search,Chat,Person,Notifications} from '@material-ui/icons'
import { Link } from "react-router-dom";
export default function TopBar(props) {
  return (
    <div>
       <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Your Bank</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">About</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={props.imageUrl} alt="" className="topbarImg"/>
      </div>
    </div>
    </div>
  )
}
