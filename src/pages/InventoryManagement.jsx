import React from 'react';
import { Link } from 'react-router-dom';

export default function InventoryManagement() {
  return (
    <div>
      <ul>
        <li style={{listStyle: "none"}}>
          <Link to="/additem" className='links'>Add Item</Link>
        </li>
        <li style={{listStyle: "none"}}>
          <Link to="/items" className='links'>Available Items</Link>
        </li>
      </ul>
    </div>
  );
}
