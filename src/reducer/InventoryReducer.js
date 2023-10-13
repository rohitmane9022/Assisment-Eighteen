export const initialState = {
    items: [], 

    formData: {
        brand: "", productName: "", productExpiry: "", price: 0, category: "", subCategory: "", quantity: 0
    }
,

    salesData: {
        brand: "", productName: "",  price: 0, category: "", subCategory: "", quantity: 0
    }, 

    salesList: [], 
    error: "",
    loading: false
}


const InventoryReducer = (state = initialState, action) =>{

    switch(action.type){

    case "FETCH_ITEMS_SUCCESS":
    return {...state, items: action.payload, loading: false, error: ""}

    case "FORM_DATA": 
    //console.log("123, Form Data", action.payload)
    return {...state, formData: {...state.formData, [action.payload.name]: action.payload.value}}


    case "DELETE_ITEM": 
    return {...state, items: state.items.filter((item)=> 
        item.subCatInfo.foodInfo.productDetails.product && item.subCatInfo.foodInfo.productDetails.product._id!==action.payload)}
    
    case "SET_EMPTY": 
    return {...state, formData: initialState.formData}

    case "SALES_ENTRY": 
    return {...state, salesData: action.payload, loading: false, error: ""}

    case "FETCH_SALES_LIST_SUCCESS": 
    console.log(444, action.payload )
    return {...state, salesList: action.payload }

    case "FETCH_ITEMS_LOADING":
      return { ...state, loading: true, error: "" };

    case "FETCH_ITEMS_ERROR":
      return { ...state, loading: false, error: action.payload };  

    default:
    return state;

    }
}


export default InventoryReducer