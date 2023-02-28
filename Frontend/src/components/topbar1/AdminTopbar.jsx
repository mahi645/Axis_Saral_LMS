import "./topbar1.css";
import {Search,Chat,Person,Notifications} from '@material-ui/icons'
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {Dropdown,DropdownButton,DropdownItem} from 'react-bootstrap';
export default function AdminTopbar(props) {
    // const employeeId=props.employeeId
    // const imageUrl=props.imageUrl
    // console.log(employeeId)
    
  return (
    <div>
       <div className="topbarContainer1">
        <div className="topbarLeft1">
            <span className="logo1" style={{marginRight:"400px"}}>Your Bank</span>
        </div>
        <div className="topbarCenter1">
            
        </div>
        <div className="topbarRight1">
            <div className="topbarLinks1">
                
                <Link to="/admin/about" className="linkHeading3">About us</Link>
                <Link to="/feeds" className="linkHeading3">Feeds</Link>
                {/* <div><Products/></div> */}
                {/* <DropdownButton id="dropdown-basic-button" title="Employ Details">
                <Dropdown.Item ><Link to="/join" state={{id:{employeeId}}}>View Employee</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/appoint" state={{id:{employeeId}}}>Appointment Letter</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/salary" state={{id:{employeeId}}}>Salary Slips</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/increment" state={{id:{employeeId}}}>Increment Slip</Link></Dropdown.Item>
                
                </DropdownButton> */}
                {/* <Policies/> */}
                <MoreInfo/>
                
            </div>
        </div>
        <div className="topbar5div">
            {/* <Link to="/userprofile"  className="linkHeading">Profile</Link> */}
            <div className="topbarIconItem1">
                
                <Link to="/" className="linkHeading1">Logout</Link>
            </div>
            
            <div>
                <img src="https://th.bing.com/th/id/R.cb45e0a9948e933aef0b2b2eec137674?rik=%2bPY1t6pvJv%2bDoQ&riu=http%3a%2f%2fwww.americus-sumterchamber.com%2fwp-content%2fuploads%2f2017%2f12%2f5-Secrets-of-the-Most-Successful-Business-People-post.jpg&ehk=znhzHhmT3KlXKIwg8f1grvDmEY7%2fb62O8nQXPG%2fwJMY%3d&risl=&pid=ImgRaw&r=0" alt="" className="topbarImg1"/>
            </div>
        </div>
    </div>
</div>
  )
}
function Products() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Products">
        <Dropdown.Item href="/admin/homeloan">Home Loan</Dropdown.Item>
        <Dropdown.Item href="/admin/savings">Savings Account</Dropdown.Item>
        <Dropdown.Item href="/admin/credit">Credit Card</Dropdown.Item>
        <Dropdown.Item href="/admin/fastag">FASTag</Dropdown.Item>
      </DropdownButton>
    );
  }
//   function Employees() {
//     return (
//       <DropdownButton id="dropdown-basic-button" title="Employ Details">
//             <Dropdown.Item href="/join" state={{id:{employeeId}}}>Joining Letter</Dropdown.Item>
//             <Dropdown.Item href="/appointment" state={{id:{employeeId}}}>Appointment Letter</Dropdown.Item>
//             <Dropdown.Item href="/salary" state={{id:{employeeId}}}>Salary Slips</Dropdown.Item>
//             <Dropdown.Item href="/increment" state={{id:{employeeId}}}>Increment Slip</Dropdown.Item>
            
//       </DropdownButton>
//     );
//   }
  function Policies() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Policies">
        <Dropdown.Item href="/admin/cyber">Cyber Security Policy</Dropdown.Item>
        <Dropdown.Item href="/admin/code">Code of Ethics and Conduct</Dropdown.Item>
        <Dropdown.Item href="/admin/dresscode">DressCode Policy</Dropdown.Item>
        <Dropdown.Item href="/admin/govt">Corporate Governance</Dropdown.Item>
        <Dropdown.Item href="/admin/bcp">BCP Policy</Dropdown.Item>
      </DropdownButton>
    );
  }
  function MoreInfo() {
    return (
      <DropdownButton id="dropdown-basic-button" title="More Info">
        <Dropdown.Item href="/admin/sop">Sop</Dropdown.Item>
        <Dropdown.Item href="/admin/scd">SCD</Dropdown.Item>
        <Dropdown.Item href="/admin/stake">Stake Holders</Dropdown.Item>
        <Dropdown.Item href="/admin/support">Support Team</Dropdown.Item>
        <Dropdown.Item href="/admin/jobs">Job Oppurtunities</Dropdown.Item>
        <Dropdown.Item href="/admin/employees">Employees</Dropdown.Item>
        <Dropdown.Item href="/admin/live">Live Projects</Dropdown.Item>
      </DropdownButton>
    );
  }
  