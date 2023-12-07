import React from 'react';
import { Link } from 'react-router-dom';

export default function SalesManagement() {
  return (
    <div>
      <ul style={{ display:"flex",justifyContent:"space-evenly",margin:"30px auto"}}>
        <li style={{listStyle: "none",padding:"30px",backgroundColor:"green",}}>
          <Link to="/addsale" style={{color:"white", textDecoration:"none"}}>Add Sales Record</Link>
        </li>
        <li style={{listStyle: "none",padding:"30px",backgroundColor:"orange",}}>
          <Link to="/sales" style={{color:"white", textDecoration:"none"}}>Sales Transactions</Link>
        </li>
      </ul>
    </div>
  );
}
