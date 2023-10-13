import logo from './logo.svg';
import './App.css';
import ItemsList from './pages/ItemsList';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';
import AddSale from './pages/AddSale';
import SalesList from './pages/SalesList';
import HomePage from './pages/HomePage';
import InventoryManagement from './pages/InventoryManagement';
import SalesManagement from './pages/SalesManagement';
import ReportingManagement from './pages/ReportingManagement';
import SalesReport from './pages/SalesReport';
import InventoryReports from './pages/InventoryReports';

function App() {
  return (
    <div className="App">
      {/* <Link to="/items">Items List</Link>
      <Link to="/addsale"> Add Sale</Link>
      <Link to="/sales"> Sales</Link> */}
      <Routes>
       <Route path='/items' element={<ItemsList/>}/>
        <Route path='/edititem/:id' element={<EditItem/>}/>
        <Route path="/additem" element={<AddItem/>}/>
        <Route path='/items' element={<ItemsList/>}/>
        <Route path='/addsale' element={<AddSale/>}/>
        <Route path='/sales' element={<SalesList/>}/>
        <Route path="/invetoryreports" element={<InventoryReports/>}/>
        <Route path='/inventory-mgmt' element = {<InventoryManagement/>}/>
        <Route path='/sales-mgmt' element={<SalesManagement/>}/>
        <Route path='/reporting-mgmt' element = {<ReportingManagement/>}/>
        <Route path='/inventory-report' element={<InventoryReports/>}/>
        <Route path='/sales-report' element={<SalesReport/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
