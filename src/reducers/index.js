import { combineReducers } from "redux"
import { findAllUnit, findUnitById, removeUnitById, updateUnit, saveUnit } from "./unit"
import { findAllItem, findItemById, removeItemById, updateItem, saveItem } from "./item"
import { findAllStock, findStockById, removeStockById, updateStock, saveStock } from "./stock"

const rootReducer = combineReducers({
  findAllUnit,
  findUnitById,
  removeUnitById,
  updateUnit,
  saveUnit,

  findAllItem,
  findItemById,
  removeItemById,
  updateItem,
  saveItem,

  findAllStock,
  findStockById,
  removeStockById,
  updateStock,
  saveStock


})

export default rootReducer