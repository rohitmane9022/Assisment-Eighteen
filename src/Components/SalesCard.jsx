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
               <p>Revenue: Rs.{sale.revenue}</p>
               <p> Sales Date: {sale.date} </p>
               </ul>
            }
        </div>
    )
}