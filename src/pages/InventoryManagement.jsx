import React from 'react';
import { Link } from 'react-router-dom';

export default function InventoryManagement() {
  return (
    <div>
      <ul style={{ display:"flex",justifyContent:"space-evenly",margin:"30px auto"}}>
        <li style={{listStyle: "none",padding:"30px",backgroundColor:"green",}}>
          <Link to="/additem" style={{color:"white", textDecoration:"none"}}>Add Item</Link>
        </li>
        <li style={{listStyle: "none",padding:"30px",backgroundColor:"orange",}}>
          <Link to="/items" style={{color:"white", textDecoration:"none"}}>Available Items</Link>
        </li>
      </ul>
    </div>
  );
}
