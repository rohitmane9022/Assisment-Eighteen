import { useNavigate } from "react-router"

export default function HomePage(){

    const navigate = useNavigate()

    const goToInventotyMgmt = () =>{
    navigate("/inventory-mgmt")
    }

    const goToSalesMgmt = () =>{
     navigate("/sales-mgmt")
    }
    const goToReportingMgmt = () =>{
    navigate("/reporting-mgmt")
    }
    return(
        <div> 
            {
                <ul>
                <div  className="prompt" onClick={()=>{goToInventotyMgmt()}}> Inventory mananagement </div>
                <div  className="prompt" onClick={()=>{goToSalesMgmt()}}> Sales mananagement </div>
                <div  className="prompt" onClick={()=>{goToReportingMgmt()}}> Reporting And Analytics </div>
                </ul>
            }
        </div>
    )
}