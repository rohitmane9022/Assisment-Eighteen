import React from 'react';
import { Link } from 'react-router-dom';

export default function ReportingManagement() {
  return (
    <div>
      <ul>
        <li style={{listStyle: "none"}}>
          <Link to="/inventory-report" className='links'>Inventory Report</Link>
        </li>
        <li style={{listStyle: "none"}}>
          <Link to="/sales-report" className='links'>Sales Report</Link>
        </li>
      </ul>
    </div>
  );
}
