import { useState } from "react"
import { initialState } from "../reducer/InventoryReducer"
import { useDispatch, useSelector } from "react-redux"
import { saveFormData, sendEmpty, sendFormData } from "../actionCreators/actions"

export default function AddItem(){

    //const [formData, setFormData] = useState({brand: "", productName: "", productExpiry: "", price: "", category: "", subCategory: ""})
    
    const formData = useSelector((state)=>state.formData)
    const dispatch =  useDispatch()

    const handleSubmit = (e) =>{
     e.preventDefault()
     dispatch(saveFormData(formData))
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
        <label>Brand Name 
            <input type="text" name="brand" value={formData.brand} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
        </label>
        </div>
        <div>
        <label>
            Product Name
            <input type="text" name="productName" value={formData.productName} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
        </label>
        </div>
        <div>
       <label>
        ProductExpiry 
        <input type="text" name="productExpiry" value={formData.productExpiry} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
       </label>
       </div>
       <div>
       <label>
        Price
        <input type="number" name="price" value={formData.price} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
       </label>
       </div>
       <div>
       <label>
        Sub Category 
        <input type="text" name="subCategory" value ={formData.subCategory} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
       </label>
       </div>
       <div>
       <label>
        Category 
        <input type="text" name="category" value={formData.category} className="formfield" onChange={(e)=>{onValueChange(e)}}/>
       </label>
       </div>
       <input type="submit" value="Submit" className="submitbtn" />
        </form>
    )
}