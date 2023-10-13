import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../actionCreators/actions";

export default function ItemsList() {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div>
        <h1>Inventory Reports</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="tablecell">Food Category</th>
            <th className="tablecell">Sub Category</th>
            <th className="tablecell">Product Name</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.map((currentItem) => (
            <tr key={currentItem._id}>
              <td className="tablecell">{currentItem.foodCategory}</td>
              <td className="tablecell">
                {currentItem.subCatInfo.foodInfo? currentItem.subCatInfo.foodInfo.foodSCType : "" }
              </td>
              <td className="tablecell">
                {currentItem.subCatInfo.foodInfo.productDetails.product!=null ? currentItem.subCatInfo.foodInfo.productDetails.product
                  .productName : "" }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


