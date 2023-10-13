import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { saveFormData, sendEmpty, sendFormData } from "../actionCreators/actions"

export default function EditItem(){

  const {id} = useParams()
  const items = useSelector((state)=>state.items)

  function findTheData(){
    return items.find((item)=>(
        item.subCatInfo.foodInfo.productDetails.product && item.subCatInfo.foodInfo.productDetails.product._id===id))
  }

  
  const formDataEntered = findTheData()
 

  const brand = formDataEntered.subCatInfo.foodInfo.productDetails.product.brandQtyInfo.brand.brandName
  const productName = formDataEntered.subCatInfo.foodInfo.productDetails.product.productName
  const productExpiry = formDataEntered.subCatInfo.foodInfo.productDetails.product.expiryDate
  const productPrice = formDataEntered.subCatInfo.foodInfo.productDetails.product.price
  const subCategory = formDataEntered.subCatInfo.foodInfo.foodSCType
  const category = formDataEntered.foodCategory
  const qty = formDataEntered.subCatInfo.foodInfo.productDetails.product.brandQtyInfo.brand.qtyByBrand

  const formData = useSelector((state)=>state.formData)
  const dispatch =  useDispatch()

   
  const handleSubmit = (e) =>{
   e.preventDefault()
   dispatch(saveFormData(formData, id))
   dispatch(sendEmpty())
  }

  const onValueChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    dispatch(sendFormData(name, value))
  }
  

  return(
      <form onSubmit={(e)=>{handleSubmit(e)}}>
    
      <div> 
      <label>
          Product Name
          <input type="text" name="productName" value={formData.productName||productName||""} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
      </label>
      </div>
    
     <div>
     <label>
      Price
      <input type="number" name="price" value={formData.price||productPrice} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
     </label>
     </div>
   
     <div>
     <label>
      Quantity
      <input type="text" name="quantity" value={formData.quantity||qty} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
     </label>
     </div>
     <input type="submit" value="Submit" className="submitbtn" />
      </form>
  )
}