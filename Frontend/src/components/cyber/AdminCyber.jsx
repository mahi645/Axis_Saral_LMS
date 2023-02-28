import React from 'react';
import AdminTopbar from '../topbar1/AdminTopbar';
import Topbar1 from '../topbar1/Topbar1';
 function AdminCyber() {
    const imgeurl="https://static.vecteezy.com/system/resources/thumbnails/007/923/838/small_2x/closed-padlock-on-digital-background-cyber-security-free-vector.jpg"
  return (
    <div className='cyberSecurity'>
      <AdminTopbar/>
    <div className='image' style={{backgroundImage:`url(${imgeurl})` ,backgroundRepeat:"no-repeat",backgroundSize:"1600px",height:"500px",width:"1250px",margin:"60px"}}>
        <div className='CyberSecurityContainer' style={{padding:"150px" }}>
        <span style={{ fontWeight: 'bold', color: 'white',textAlign: 'center' }}>
            <p className='title' style={{fontSize:"40px"}}>CYBER SECURITY POLICY</p>
            </span>
        </div>
    </div>
    <div style={{ textAlign: 'left', paddingBottom: '10px',paddingRight:"80px",paddingLeft:"80px",paddingTop:"10px"  }}>
    <div>
      <h2> Cyber Security Policy</h2>
      {/* <span style={{ fontWeight: 'bold', ,fontSize:"23px"}}> */}
      <h5 style={{ color: '#1775ee'}}>1.Information Security Policy</h5>
      {/* </span> */}
      <p></p>
      <li style={{fontSize:"20px"}}>
      YB is committed to protecting the confidentiality, integrity and availability of all information and data belonging to the organization, customers, and partners.
      </li>
      <li style={{fontSize:"20px"}}>
      YB will maintain an effective information security program to prevent unauthorized access, modification, or destruction of sensitive data.
      </li>
      <li style={{fontSize:"20px"}}>
      All employees and contractors of YB are responsible for safeguarding information and data in their custody.
      </li>
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      <h5>2.Access Control Policy</h5>
      </span>
      <p></p>
      <li style={{fontSize:"20px"}}>
      YB will limit access to information and data to only authorized personnel.
      </li>
      <li style={{fontSize:"20px"}}>
      YB will ensure that access privileges are granted based on the principle of least privilege.
      </li>
      <li style={{fontSize:"20px"}}>
      Access control will be enforced using strong authentication methods, including passwords, multi-factor authentication, and biometric authentication.
      </li>
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
     <h5> 3.Network Security Policy</h5>
      </span>
      <p></p>
      <li style={{fontSize:"20px"}}>
      YB will maintain a secure network infrastructure to prevent unauthorized access and ensure the confidentiality of data transmitted across the network.
      </li>
      <li style={{fontSize:"20px"}}>YB will implement and maintain appropriate security controls, including firewalls, intrusion detection systems, and encryption technologies, to protect against network-based attacks.</li>
      <li style={{fontSize:"20px"}}>Employees and contractors will not be allowed to connect personal devices to YB's network without approval from the IT department.</li>
     <p></p>
     <span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
     <h5>4.Incident Response Policy</h5>
     </span>
     <p></p>
     <li style={{fontSize:"20px"}}>YB will maintain an incident response plan to effectively detect, contain, and mitigate security incidents.</li>
    <li style={{fontSize:"20px"}}>All security incidents, including actual or suspected breaches, must be reported immediately to the IT department and senior management.</li>
      <li style={{fontSize:"20px"}}>YB will conduct regular security awareness training for employees and contractors to ensure that they are aware of their roles and responsibilities in the event of a security incident.</li>
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
      <b></b><h5>5.Physical Security Policy</h5>
      </span>
      <p></p>
<li style={{fontSize:"20px"}}>YB Company will maintain physical security controls to protect against unauthorized access to YB Company's facilities and data centers.</li>
<li style={{fontSize:"20px"}}>Physical access to YB's facilities and data centers will be restricted to authorized personnel only.</li>
<li style={{fontSize:"20px"}}> All visitors to YB's facilities and data centers will be required to sign in and be escorted by an authorized employee.</li>
<p></p>
<span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
<h5>6.Third-Party Security Policy</h5>
</span>
<p></p>
<li style={{fontSize:"20px"}}>YB will ensure that third-party vendors and partners comply with YB's information security policies and standards.</li>
<li style={{fontSize:"20px"}}> YB will conduct regular risk assessments of third-party vendors and partners to identify potential security risks and vulnerabilities.</li>
<li style={{fontSize:"20px"}}> Third-party vendors and partners will be required to sign and comply with YB's security policies and standards.</li>
<p></p>
<span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
<b></b><h5>7.Compliance Policy</h5>
</span>
<p></p>
<li style={{fontSize:"20px"}}>YB will comply with all applicable laws and regulations related to information security.</li>
<li style={{fontSize:"20px"}}>YB will conduct regular security audits and assessments to ensure compliance with security policies and standards.</li>
<li style={{fontSize:"20px"}}> YB will maintain appropriate records and documentation to demonstrate compliance with applicable laws and regulations.</li>


    </div>
    </div>
    </div>
  );
}
export default AdminCyber;
