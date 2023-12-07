import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteItemAction, getItems } from "../actionCreators/actions"
import { useNavigate } from "react-router"

export default function ItemsList(){
const dispatch = useDispatch()
const itemsList =  useSelector((state)=>state.items)
console.log("Items ", itemsList)
const loading = useSelector((state) => state.loading);


const navigate = useNavigate()


const foodCategory = itemsList.reduce((acc, currentItem)=>(!acc.includes(currentItem.foodCategory) ? [...acc, currentItem.foodCategory] : acc),[])
console.log("FoodCat", foodCategory)

const foodSubCategory = itemsList.reduce((acc, currentItem)=>(!acc.includes(currentItem.subCatInfo.foodInfo.foodSCType) ? [...acc, currentItem.subCatInfo.foodInfo.foodSCType] : acc),[])
console.log("SubCat", foodSubCategory)


const mapOverItemsList = itemsList.map((eachItem)=>(eachItem))
console.log("123", mapOverItemsList)


useEffect(()=>{dispatch(getItems())}, [])


const deleteItem = (itemId) =>{
  dispatch(deleteItemAction(itemId))
}

const editItem = (itemId) =>{
    navigate(`/edititem/${itemId}`)
}


    return(
        <div> 

            {loading ? (
        <p>load items...</p>
      ) : (
                        

                foodCategory.map((fc)=>(
                    <div key={fc}>
                        <h2>{fc}</h2>
                        {
                            itemsList.filter((currentItem)=>(fc === currentItem.foodCategory))
                            .reduce((acc, currentItem)=>(
                               
                                    
                                   currentItem.subCatInfo  && !acc.includes(currentItem.subCatInfo.foodInfo.foodSCType) ? [...acc, currentItem.subCatInfo.foodInfo.foodSCType]: acc
                                
                              
                            ), []).map((foodSCType, index)=>(
                                <ul>
                                <h4>{foodSCType}</h4>
                                <li key={index}>
                                 {
                                    itemsList.filter((currentItem)=>(currentItem.subCatInfo.foodInfo.foodSCType===foodSCType  &&
                                        currentItem.subCatInfo.foodInfo.productDetails.product)).map((currentItem)=>(
                                        (  <li>{ currentItem.subCatInfo.foodInfo.productDetails.product.productName} <button onClick={()=>{deleteItem(currentItem.subCatInfo.foodInfo.productDetails.product._id)}}>Delete</button>  <button onClick={()=>{editItem(currentItem.subCatInfo.foodInfo.productDetails.product._id)}}>Edit</button></li>)))
                                   
                                 }
                                </li>
                                </ul>
                            ))
                        

                        }
                        
                         </div>
                   )))

                  
            }
         
        </div>
    )
    
}