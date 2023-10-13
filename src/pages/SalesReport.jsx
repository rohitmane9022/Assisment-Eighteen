import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../actionCreators/actions";

export default function SalesReport() {
  const dispatch = useDispatch();
  const salesList = useSelector((state) => state.salesList);
  const [dateRange, setDateRange] = useState("Select")

  useEffect(() => {
    dispatch(getSales());
  }, []);


  const onValueChange = (e) =>{
  setDateRange(e.target.value)
  }

  const [startDate, endDate] = dateRange.split(" to ");

  let filteredSalesList = salesList;
  if (dateRange !== "Select") {
    filteredSalesList = salesList.filter((sale) => {
      const saleDate = formatDateToDDMMYYYYHHMM(sale.date);
      console.log("Sale ", saleDate)
      return saleDate >= formatDateToDDMMYYYY(startDate) && saleDate <= formatDateToDDMMYYYY(endDate);
    });
  }

  return (
    <div>
        <h1> Sales Report</h1>
        <select value={dateRange} onChange={(e)=>{onValueChange(e)}}>
          <option value = "Select"> Select</option>
          <option value="07-10-2023 to 11-10-2023">07-10-2023 to 11-10-2023</option>
        <option value="11-10-2023 to 15-10-2023">11-10-2023 to 15-10-2023</option>
        </select>
      <table className="table">
        <thead>
          <tr>
            <th className="tablecell">Brand</th>
            <th className="tablecell">Category</th>
            <th className="tablecell">Sub Category</th>
            <th className="tablecell">Product Name</th>
            <th className="tablecell">Price</th>
            <th className="tablecell">Item Sold</th>
            <th className="tablecell">Revenue</th>
            <th className="tablecell">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalesList.map((sale, index) => (
            <tr key={index}>
              <td className="tablecell">{sale.brand}</td>
              <td className="tablecell">{sale.category}</td>
              <td className="tablecell">{sale.subCategory}</td>
              <td className="tablecell">{sale.itemName}</td>
              <td className="tablecell">Rs.{sale.itemPrice}</td>
              <td className="tablecell">{sale.itemQuantity}</td>
              <td className="tablecell">Rs.{sale.revenue}</td>
              <td className="tablecell">{formatDateToDDMMYYYYHHMM(sale.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatDateToDDMMYYYYHHMM(date) {
  const d = new Date(date);
  const day = d.getUTCDate().toString().padStart(2, '0');
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = d.getUTCFullYear();
  const hours = d.getUTCHours().toString().padStart(2, '0');
  const minutes = d.getUTCMinutes().toString().padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

function formatDateToDDMMYYYY(date) {
  const parts = date.split('-');
  if (parts.length === 3) {
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const time = "00:00";
    
    return `${day}-${month}-${year} ${time}`;
  }
  return "Invalid Date";
}



