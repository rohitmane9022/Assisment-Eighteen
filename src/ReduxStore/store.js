const { createStore, applyMiddleware } = require("redux");
const { default: InventoryReducer } = require("../reducer/InventoryReducer");
const { default: thunk } = require("redux-thunk");


const store = createStore(InventoryReducer, applyMiddleware(thunk))

export default store