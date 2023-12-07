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
                <ul className="HomeUi">
                <div style={{padding:"100px 30px", backgroundColor:"yellow", margin:"auto 20px",color:"black", font:"bold", fontSize:"20px"}} onClick={()=>{goToInventotyMgmt()}}> Inventory mananagement </div>
                <div style={{padding:"100px 30px", backgroundColor:"green",color:"white", margin:"auto 20px",font:"bold", fontSize:"20px"}} onClick={()=>{goToSalesMgmt()}}> Sales mananagement </div>
                <div style={{padding:"100px 30px", backgroundColor:"purple",color:"white", margin:"auto 20px",font:"bold", fontSize:"20px"}} onClick={()=>{goToReportingMgmt()}}> Reporting And Analytics </div>
                </ul>
            }
        </div>
    )
}