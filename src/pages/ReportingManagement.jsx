import React from 'react';
import { Link } from 'react-router-dom';

export default function ReportingManagement() {
  return (
    <div>
      <ul style={{ display:"flex",justifyContent:"space-evenly",margin:"30px auto"}}>
        <li style={{listStyle: "none",padding:"30px",backgroundColor:"green",}}>
          <Link to="/inventory-report" style={{color:"white", textDecoration:"none"}}>Inventory Report</Link>
        </li>
        <li style={{listStyle: "none",padding:"30px",backgroundColor:"orange",}}>
          <Link to="/sales-report" style={{color:"white", textDecoration:"none"}}>Sales Report</Link>
        </li>
      </ul>
    </div>
  );
}
