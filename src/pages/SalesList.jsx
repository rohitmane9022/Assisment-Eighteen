import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSales } from "../actionCreators/actions"
import SalesCard from "../Components/SalesCard"

export default function SalesList (){
  const dispatch = useDispatch()
  const salesList = useSelector((state)=>state.salesList)

  
  useEffect(()=>{dispatch(getSales())},[])



    return(
        <div> 
          {
            salesList.map((sale, index)=>(
                <li key={index}><SalesCard sale = {sale}/></li>
            ))
          }
        </div>
    )
}