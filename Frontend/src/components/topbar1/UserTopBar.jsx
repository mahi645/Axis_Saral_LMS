import "./topbar1.css";
import {Search,Chat,Person,Notifications} from '@material-ui/icons'
import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownItem from "react-bootstrap/esm/DropdownItem";
import {Dropdown,DropdownButton,DropdownItem} from 'react-bootstrap';
export default function UserTopBar() {
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
                
                <Link to="/about" className="linkHeading3">About us</Link>
               
                <div><Products/></div>
                
                <Policies/>
                {/* <MoreInfo/> */}
                
            </div>
        </div>
        <div className="topbar5div">
            
            <div className="topbarIconItem1">
                
                
                <DropdownButton id="dropdown-basic-button" title="Login">
                    <Dropdown.Item href="/login">Employee</Dropdown.Item>
                    <Dropdown.Item href="/admin/login">Admin</Dropdown.Item>
                </DropdownButton>
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

  function Policies() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Policies">
        <Dropdown.Item href="/cyber">Cyber Security Policy</Dropdown.Item>
        <Dropdown.Item href="/code">Code of Ethics and Conduct</Dropdown.Item>
        
        <Dropdown.Item href="/govt">Corporate Governance</Dropdown.Item>
        <Dropdown.Item href="/bcp">BCP Policy</Dropdown.Item>
        <Dropdown.Item href="/dresscode">Dresscode Policy</Dropdown.Item>
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
        <Dropdown.Item href="/jobs">Job Oppurtunities</Dropdown.Item>
        <Dropdown.Item href="/employees">Employees</Dropdown.Item>
      </DropdownButton>
    );
  }
  