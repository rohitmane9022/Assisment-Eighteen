import "../App.css"

export default function SalesCard({sale}){
    return(
        <div> 
            {
                <ul className="border">
               <h3>Brand: {sale.brand}</h3>
               <span>Category: {sale.category}</span>
               <p>Sub Category: {sale.subCategory}</p>
               <p>Product Name: {sale.itemName}</p>
               <p>Price: Rs.{sale.itemPrice}</p>
               <p>Item Sold: {sale.itemQuantity}</p>
               <h3>Revenue: Rs.{sale.revenue}</h3>
               <h4> Sales Date: {sale.date} </h4>
               </ul>
            }
        </div>
    )
}