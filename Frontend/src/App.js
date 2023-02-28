import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
//import About from './components/about/About';
import Profile from './pages/Profile';
import Feed from './components/feed/Feed';


import Profile1 from './pages/Profile1';
import Joiningletter from './components/joining/Joiningletter.jsx';
import Download from './pages/Download';
import Userprofile from './components/userprofile/Userprofie';
import AdminLogin from './pages/login/AdminLogin';
import Notifications from './components/notifications/Notifications';
import Posts from './components/admin/Posts';
import Forgotpassword from './pages/forgotpassword/Forgotpassword';
import PostAdd from './components/postAdd/PostAdd';
import About from './components/about/About';
import MediaCard from './components/practice/MediaCard';
//import PrintJoining from './components/print/ComponentToPrint';
import Example from './components/print/Example';
import PrintAppointment from './components/appointment/PrintAppointment';
import CodeofConduct from './components/policies/CodeofConduct';
import Dresscode from './components/dresscode/Dresscode';
import Creditcard from './components/creditcard/Creditcard';
import SavingsAccount from './components/savingsAccount/SavingsAccount';
import HomeLoan from './components/homeloan/HomeLoan';
import Fastag from './components/fastag/Fastag';
import Topbar1 from './components/topbar1/Topbar1';
import DropDown11 from './DropDown11';
import AdminTopbar from './components/topbar1/AdminTopbar';
import AdminSavingsAccount from './components/savingsAccount/AdminSavingsAccount';
import AdminCode from './components/policies/AdminCode';
import AdminHomeLoan from './components/homeloan/AdminHomeLoan';
import AdminCreditcard from './components/creditcard/AdminCreditCard';
import AdminFastag from './components/fastag/AdminFastag';
import EmployeeFeeds from './components/feed/EmployeeFeeds';
import AdminAbout from './components/about/AdminAbout';
import AdminDresscode from './components/dresscode/AdminDresscode';
import BCP from './components/bcp/BCP';
import CorporateGovernance from './components/corporate/CorporateGovernance';
import AdminCorporate from './components/corporate/AdminCorporate';
import AdminBCP from './components/bcp/AdminBCP';
import SCD from './components/scd/SCD';
import AdminSCD from './components/scd/AdminSCD';
import CyberSecurityPolicies from './components/cyber/CyberSecurityPolicies';
import Employee2 from './pages/employee/Employee2';
import UserEmployee from './pages/employee/UserEmployee';
import AdminHome from './pages/home/AdminHome';
import AdminStakeHolders from './pages/stakeHolders/AdminStakeHolders';
import AdminCyber from './components/cyber/AdminCyber';
import EmployeeStakeholders from './pages/stakeHolders/EmployeeStakeholders';
import AdminSupportTeam from './pages/supportTeam/AdminSupportTeam';
import SupportTeam from './pages/supportTeam/SupportTeam';
import UserTopBar from './components/topbar1/UserTopBar';
import UserHome2 from './pages/home/UserHome2';
import LiveProjects from './components/liveProjects/LiveProjects';
import Jobs from './components/jobs/Jobs';
import Printsalary from './components/salary/Printsalary';

//import Salary from './components/salary/Salary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/download/:id" element={<Download/>}></Route>
        <Route path="/userprofile" element={<Userprofile/>}></Route>
        <Route path="/admin/login" element={<AdminLogin/>}></Route>
        <Route path="/not" element={<Notifications/>}></Route>
        <Route path="/forgot" element={<Forgotpassword/>}></Route>
        <Route path="/post" element={<Posts/>}></Route>
        <Route path="/add/post" element={<PostAdd/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/feeds" element={<Feed/>}></Route>
        <Route path="/card" element={<MediaCard/>}></Route>
        <Route path="/join" element={<Example/>}></Route>
        <Route path="/appoint" element={<PrintAppointment/>}></Route>
        <Route path="/code" element={<CodeofConduct/>}></Route>
        <Route path="/dresscode" element={<Dresscode/>}></Route>
        <Route path="/credit" element={<Creditcard/>}></Route>
        <Route path="/savings" element={<SavingsAccount/>}></Route>
        <Route path="/homeloan" element={<HomeLoan/>}></Route>
        <Route path="/topbar1" element={<Topbar1/>}></Route>
        <Route path="/fastag" element={<Fastag/>}></Route>
        <Route path="/drop" element={<DropDown11/>}></Route>
        <Route path="/admin/home" element={<AdminHome/>}></Route>
        <Route path="/admin/savings" element={<AdminSavingsAccount/>}></Route>
        <Route path="/admin/code" element={<AdminCode/>}></Route>
        <Route path="/admin/homeloan" element={<AdminHomeLoan/>}></Route>
        <Route path="/admin/credit" element={<AdminCreditcard/>}></Route>
        <Route path='/admin/fastag' element={<AdminFastag/>}></Route>
        <Route path="/admin/about" element={<AdminAbout/>}></Route>
        <Route path="/admin/dresscode" element={<AdminDresscode/>}></Route>
         <Route path="/login2" element={<Login/>}></Route>
         <Route path="/employ/feeds" element={<EmployeeFeeds/>}></Route>
         <Route path="/join" element={<Joiningletter/>}></Route>
        <Route path="/home/:id" element={<Home/>}></Route>
        <Route path="/bcp" element={<BCP/>}></Route>
        <Route path="/govt" element={<CorporateGovernance/>}></Route>
        <Route path="/admin/govt" element={<AdminCorporate/>}></Route>
        <Route path="/admin/bcp" element={<AdminBCP/>}></Route>
        <Route path="/scd" element={<SCD/>}></Route>
        <Route path="/admin/scd" element={<AdminSCD/>}></Route>
        <Route path="/cyber" element={<CyberSecurityPolicies/>}> </Route>
        <Route path="/admin/employees" element={<Employee2/>}></Route>
        <Route path="/user" element={<UserEmployee/>}></Route>
        <Route path="/admin/stake" element={<AdminStakeHolders/>}></Route>
        <Route path="/admin/cyber" element={<AdminCyber/>}></Route>
        <Route path="/stake" element={<EmployeeStakeholders/>}></Route>
        <Route path="/admin/support" element={<AdminSupportTeam/>}></Route>
        <Route path="/support" element={<SupportTeam/>}></Route>
        <Route path="/user1" element={<UserTopBar/>}></Route>
        <Route path="" element={<UserHome2/>}></Route>
        <Route path="/admin/live" element={<LiveProjects/>}></Route>
        <Route path="/admin/jobs" element={<Jobs/>}></Route>
        <Route path="/salary" element={<Printsalary/>}></Route>
        

          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
