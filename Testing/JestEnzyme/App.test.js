import { getByDisplayValue, getByTestId, getByText, render, screen } from '@testing-library/react';
import App from './App';
import{shallow,mount,configure} from 'enzyme';
import Login from './pages/login/Login';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminStakeHolders from './pages/stakeHolders/AdminStakeHolders';
import AdminLogin from './pages/login/AdminLogin';
import Employee2 from './pages/employee/Employee2';
import TopBar from './components/topBar/Topbar';
import Topbar1 from './components/topbar1/Topbar1';
import AdminSupportTeam from './pages/supportTeam/AdminSupportTeam';
import Userprofile from './components/userprofile/Userprofie';
import CodeofConduct from './components/policies/CodeofConduct';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
configure({adapter:new Adapter()});
describe("rendering components",()=>{
  it("renders components without crash",()=>{
    shallow(<Router>
      <Login/>
    </Router>)
  });
  it("renders components without crash",()=>{
    shallow(<Router>
      <AdminStakeHolders/>
    </Router>)
  });
  it("login username  text renders without crash",()=>{
    const {getByPlaceholderText}=render(<Router><Login/></Router>)
    const header=getByPlaceholderText("Employee ID");
    expect(header).toBeTruthy();
  });
  it("login password  text renders without crash",()=>{
    const {getByPlaceholderText}=render(<Router><Login/></Router>)
    const password=getByPlaceholderText("Password");
    expect(password).toBeTruthy();
  })
  it("Admin login username  text renders without crash",()=>{
    const {getByPlaceholderText}=render(<Router><AdminLogin/></Router>)
    const header=getByPlaceholderText("Admin ID");
    expect(header).toBeTruthy();
  });
  it("Employee search  text renders without crash",()=>{
    const {getByText}=render(<Router><Employee2/></Router>)
    const SearchButton=getByText("Search")
    expect(SearchButton).toBeTruthy();
  });
  it("login page title renders without crash",()=>{
    const {getByText}=render(<Router><Login/></Router>)
    const bankName=getByText("YOUR BANK")
    expect(bankName).toBeTruthy();
  });
  it("Feeds link renders without crash",()=>{
    const {getByText}=render(<Router><Topbar1/></Router>)
    const feeds=getByText("Feeds")
    expect(feeds).toBeTruthy();
  });
  it("support team Add text renders without crash",()=>{
    const {getByText}=render(<Router><AdminSupportTeam/></Router>)
    const DeleteButton=getByText("Add")
    expect(DeleteButton).toBeTruthy();
  });
  it("User profile text renders without crash",()=>{
    const {getByText}=render(<Router><CodeofConduct/></Router>)
    const DeleteButton=getByText("YB Code Of Conduct and Ethics")
    expect(DeleteButton).toBeTruthy();
  });

});