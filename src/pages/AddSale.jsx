import { useDispatch, useSelector } from "react-redux"
import { addToSales, fetchItemsList, getItems, updateQuantity, updateSalesValues } from "../actionCreators/actions"
import { useEffect } from "react"

export default function AddSale(){


    const dispatch = useDispatch()
    useEffect(()=>{dispatch(getItems())}, [])
    let salesData = useSelector((data)=>data.salesData)
    const allItems = useSelector((data)=>data.items)
   
    function findTheProductDetails() {
      const item = allItems.find((item) => {
        if (item.subCatInfo.foodInfo.productDetails.product !== null) {
          //console.log(7777,  item.subCatInfo.foodInfo.productDetails.product.productName, item.subCatInfo.foodInfo.productDetails.product.brandQtyInfo.brand)
          return (
            item.subCatInfo.foodInfo.productDetails.product.productName.toLowerCase() === salesData.productName.toLowerCase() &&
            item.subCatInfo.foodInfo.productDetails.product.brandQtyInfo.brand.brandName.toLowerCase() === salesData.brand.toLowerCase()
          );
        }
        return false; 
      });
      return item;
    }

    useEffect(()=>{fetchItemsList()}, [])

    
    const changeBrandName = (e) =>{  
      dispatch(updateSalesValues({...salesData, brand: e.target.value}))
    }

    const changeProductName = (e) =>{
      dispatch(updateSalesValues({...salesData, productName: e.target.value}))
    }

    const onPriceChange = (e) =>{
      dispatch(updateSalesValues({...salesData, price: e.target.value}))
    }

    const onChangeSubCategory = (e) =>{
     dispatch(updateSalesValues({...salesData, subCategory: e.target.value}))
    }

    const onCategoryChange = (e) =>{
      dispatch(updateSalesValues({...salesData, category: e.target.value}))
    }

    const onQuantityChange = (e) =>{
        dispatch(updateSalesValues({...salesData, quantity: e.target.value}))
    }

    const onAddSales = (e) =>{
    const product = findTheProductDetails()
    
    const productPrice =  product.subCatInfo.foodInfo.productDetails.product && product.subCatInfo.foodInfo.productDetails.product.price
    const productBrandId = product.subCatInfo.foodInfo.productDetails && product.subCatInfo.foodInfo.productDetails.product.brandQtyInfo.brand._id
    const productRecordedQty = product.subCatInfo.foodInfo.productDetails && product.subCatInfo.foodInfo.productDetails.product.brandQtyInfo.brand.qtyByBrand
    const productId = product.subCatInfo.foodInfo.productDetails && product.subCatInfo.foodInfo.productDetails.product._id
    const updatedQty = product.subCatInfo.foodInfo.productDetails && productRecordedQty - salesData.quantity
    const revenue = salesData.price*salesData.quantity - productPrice*salesData.quantity;
    salesData = {...salesData, revenue: revenue}
    dispatch(addToSales(salesData))
    dispatch(updateQuantity(productBrandId, updatedQty))
    }

    return(
        <div> 
            <div>
            <label>  Brand Name
                <input type="text" className="formfield" onChange={(e)=>{changeBrandName(e)}}/>
            </label>
            </div>
            <div>
            <label> Product Name
                <input type="text" className="formfield" onChange={(e)=>{changeProductName(e)}}/>
            </label>
            </div>
            <div>
            <label>Price
              <input type="text" className="formfield" onChange={(e)=>{onPriceChange(e)}}/>
            </label>
            </div>
            <div>
            <label> 
                Sub Category
                <input type="text" className="formfield" onChange={(e)=>{onChangeSubCategory(e)}}/>
            </label>
            </div>
            <div>
            <label> 
                Category
                <input type="text" className="formfield" onChange={(e)=>{onCategoryChange(e)}}/>
            </label>
            </div>
            <div>
            <label> 
                Quanity
                <input type="text" className="formfield" onChange={(e)=>{onQuantityChange(e)}}/>
            </label>
            </div>
            <button onClick={(e)=>{onAddSales(e)}}>Add Sales</button>
        </div>
    )
}