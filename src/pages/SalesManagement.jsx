import React from 'react';
import { Link } from 'react-router-dom';

export default function SalesManagement() {
  return (
    <div>
      <ul>
        <li style={{listStyle: "none"}}>
          <Link to="/addsale" className='links'>Add Sales Record</Link>
        </li>
        <li style={{listStyle: "none"}}>
          <Link to="/sales" className='links'>Sales Transactions</Link>
        </li>
      </ul>
    </div>
  );
}
