import React from 'react';
import AdminTopbar from '../topbar1/AdminTopbar';
import Topbar1 from '../topbar1/Topbar1';
export default function AdminSCD() {
  return (
    <div>
      <AdminTopbar/>
    <div style={{ textAlign: 'left',paddingLeft:'80px',paddingRight:"80px",paddingTop:"40px",paddingBottom:"40px" }}>
      
    <div>
        <h2>Specification Control Document about Operating Systems</h2>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      Introduction
      </span>
      <p></p>
      < p style={{fontSize:"20px"}}>This document provides the specification for the operating system to be used by Your Bank (YB) in all of its operations. The operating system is a critical component of YB's IT infrastructure, and this document defines the minimum requirements and standards for the operating system.</p>
    
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
      Objectives
      </span>
      <p></p>
      <p style={{fontSize:"20px"}}>The objectives of this document are to:</p>
      <li style={{fontSize:"20px"}}>
      Define the minimum requirements and standards for the operating system to be used by YB
      </li>
      <li style={{fontSize:"20px"}}>
      Ensure the operating system is secure, reliable, and capable of supporting all of YB's business operations
      </li>
      <li style={{fontSize:"20px"}}>
      Facilitate consistency and interoperability across YB's IT infrastructure
      </li>
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      Operating System Requirements
      </span>
      <p></p>
      <p style={{fontSize:"20px"}}>The following are the minimum requirements for the operating system to be used by YB:</p>
      <li style={{fontSize:"20px"}}>
      The operating system must be a version currently supported by the vendor and receive regular security patches and updates
      </li>
      <li style={{fontSize:"20px"}}>The operating system must be able to support all of YB's business applications, including banking software, databases, and messaging systems</li>
      <li style={{fontSize:"20px"}}>The operating system must be compliant with all relevant industry standards and regulations, including but not limited to PCI DSS and GLBA</li>
     <li style={{fontSize:"20px"}}>The operating system must have a built-in firewall and other security features to protect against unauthorized access and data breaches</li>
     <li style={{fontSize:"20px"}}>The operating system must have a centralized management console to facilitate efficient management and maintenance</li>
     <li style={{fontSize:"20px"}}>The operating system must be compatible with YB's existing hardware and software infrastructure</li>
     <li style={{fontSize:"20px"}}>The operating system must provide detailed audit and logging capabilities to ensure compliance with YB's internal policies and regulatory requirements</li>
     <p></p>
     <span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
     Operating System Standards
     </span>
     <p></p>
     <p style={{fontSize:"20px"}}>The following are the standards for the operating system to be used by YB:</p>
     <li style={{fontSize:"20px"}}>All operating system installations must be performed by authorized personnel according to YB's internal policies and procedures</li>
    <li style={{fontSize:"20px"}}>All operating systems must have up-to-date antivirus software and other security features enabled</li>
      <li style={{fontSize:"20px"}}>All operating systems must be configured according to YB's internal security standards and best practices, including disabling unnecessary services and ports</li>
      <li style={{fontSize:"20px"}}>All operating systems must be backed up regularly and stored in a secure location</li>
      <li style={{fontSize:"20px"}}>All operating systems must be monitored and maintained regularly to ensure they remain secure and up-to-date</li>
      <li style={{fontSize:"20px"}}>All changes to the operating system configuration or software must be documented and approved according to YB's internal change management processes</li>
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      <b>Conclusion</b>
      </span>
      <p ></p>
      <p style={{fontSize:"20px"}}>This document defines the minimum requirements and standards for the operating system to be used by YB in all of its operations. Adherence to these requirements and standards is critical to ensuring the security, reliability, and interoperability of YB's IT infrastructure. Any deviations from these requirements and standards must be approved by the appropriate YB personnel and documented in accordance with YB's internal policies and procedures.</p>
      <p></p>
      <h2>Specification Control Document about Network Devices</h2>
      <p></p>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      Overview:
      </span>
      <p style={{fontSize:"20px"}}>The purpose of this document is to provide a comprehensive set of specifications for network devices used by YB. This document will serve as a reference for IT staff and other relevant personnel when making purchasing decisions, performing maintenance or updates, and evaluating new equipment. The following specifications should be used as a guideline when purchasing, installing, configuring, and maintaining network devices for YB.</p>
      <span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
      Switches
      </span>
      <li style={{fontSize:"20px"}}>Minimum 24 ports for each switch</li>
      <li style={{fontSize:"20px"}}>10/100/1000Mbps Ethernet ports</li>
      <li style={{fontSize:"20px"}}>Layer 2 and 3 support</li>
      <li style={{fontSize:"20px"}}>VLAN support</li>
      <li style={{fontSize:"20px"}}>Quality of Service (QoS) support</li>
      <li style={{fontSize:"20px"}}>Support for Spanning Tree Protocol (STP) and Rapid Spanning Tree Protocol (RSTP)</li>
      <li style={{fontSize:"20px"}}>SNMP management support</li>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      Routers
      </span>
      <li style={{fontSize:"20px"}}>WAN/LAN interface</li>
      <li style={{fontSize:"20px"}}>Multiple WAN technologies support (e.g., T1/E1, T3/E3, ISDN, ADSL, Ethernet)</li>
      <li style={{fontSize:"20px"}}>VLAN support</li>
      <li style={{fontSize:"20px"}}>QoS support</li>
      <li style={{fontSize:"20px"}}>VPN support</li>
      <li style={{fontSize:"20px"}}>Firewall and intrusion prevention capabilities</li>
      <li style={{fontSize:"20px"}}>SNMP management support</li>
      <span style={{ fontWeight: 'bold', color: '#1775ee',fontSize:"23px" }}>
      Firewalls
      </span>
      <li style={{fontSize:"20px"}}>Firewall throughput of at least 1 Gbps</li>
      <li style={{fontSize:"20px"}}>VPN throughput of at least 500 Mbps</li>
      <li style={{fontSize:"20px"}}>Multiple security zones support</li>
      <li style={{fontSize:"20px"}}>Application-level gateway support</li>
      <li style={{fontSize:"20px"}}>Intrusion Detection/Prevention System (IDS/IPS) capabilities</li>
      <li style={{fontSize:"20px"}}>Anti-virus and anti-spam filtering capabilities</li>
      <li style={{fontSize:"20px"}}>VPN support</li>
      <li style={{fontSize:"20px"}}>SNMP management support</li>
      <span style={{ fontWeight: 'bold', color: '#1775ee' ,fontSize:"23px"}}>
      Wireless Access Points (WAPs)
      </span>
      <li style={{fontSize:"20px"}}>802.11n or higher</li>
      <li style={{fontSize:"20px"}}>Support for multiple SSIDs</li>
    </div>
    </div>
    </div>
  );
}

