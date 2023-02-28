import "./topbar1.css";
import {Search,Chat,Person,Notifications} from '@material-ui/icons'
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import {Dropdown,DropdownButton,DropdownItem} from 'react-bootstrap';
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
export default function Topbar1(props) {
    const employeeId=props.employeeId
    const imageUrl=props.imageUrl
    const projectName=props.projectName
    const designation=props.designation;
    const name=props.name;
    console.log(employeeId)
    console.log(designation)
    
  return (
    <div>
       <div className="topbarContainer1">
        <div className="topbarLeft1">
            <span className="logo1" >Your Bank</span>
        </div>
        <div className="topbarCenter1">
            
        </div>
        <div className="topbarRight1">
            <div className="topbarLinks1">
                
                {/* <Link to="/about" className="linkHeading3">About us</Link> */}
                <Link to="/employ/feeds" state={{id:{employeeId}}}  className="linkHeading3">Feeds</Link>
                {/* <div><Products/></div> */}
                <DropdownButton id="dropdown-basic-button" title="Employ Details">
                <Dropdown.Item ><Link to="/join" state={{id:{employeeId}}}>Joining Letter</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/appoint" state={{id:{employeeId}}}>Appointment Letter</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/salary" state={{id:{employeeId},designation:{designation},name:{name}}}>Salary Slips</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/increment" state={{id:{employeeId}}}>Increment Slip</Link></Dropdown.Item>
                
                </DropdownButton>
                {/* <Policies/> */}
                <MoreInfo/>
                
            </div>
        </div>
        <div className="topbar5div">
            <Link to="/userprofile" state={{id:{employeeId},url:{imageUrl},project:{projectName}}} className="linkHeading">Profile</Link>
            <div className="topbarIconItem1">
                
                <Link to="/" className="linkHeading1">Logout</Link>
            </div>
            
            <div>
                <img src={props.imageUrl} alt="" className="topbarImg1"/>
            </div>
        </div>
    </div>
</div>
  )
}
function Products() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Products">
        <Dropdown.Item href="/homeloan">Home Loan</Dropdown.Item>
        <Dropdown.Item href="/savings">Savings Account</Dropdown.Item>
        <Dropdown.Item href="/credit">Credit Card</Dropdown.Item>
        <Dropdown.Item href="/fastag">FASTag</Dropdown.Item>
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
        <Dropdown.Item href="/cyber">Cyber Security Policy</Dropdown.Item>
        <Dropdown.Item href="/code">Code of Ethics and Conduct</Dropdown.Item>
        <Dropdown.Item href="/dresscode">DressCode Policy</Dropdown.Item>
        <Dropdown.Item href="/govt">Corporate Governance</Dropdown.Item>
        <Dropdown.Item href="/bcp">BCP Policy</Dropdown.Item>
      </DropdownButton>
    );
  }
  function MoreInfo() {
    return (
      <DropdownButton id="dropdown-basic-button" title="More Info">
        <Dropdown.Item href="/sop">Sop</Dropdown.Item>
        <Dropdown.Item href="/scd">SCD</Dropdown.Item>
        <Dropdown.Item href="/stake">Stake Holders</Dropdown.Item>
        <Dropdown.Item href="/support">Support Team</Dropdown.Item>
        {/* <Dropdown.Item href="/job/:id">Job Oppurtunities</Dropdown.Item> */}
      </DropdownButton>
    );
  }
  