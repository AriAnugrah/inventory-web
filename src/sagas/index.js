import { all } from "redux-saga/effects";
import { watchFindAllUnit, watchFindUnitById, watchRemoveByid, watchSaveUnit, watchUpdateUnit } from "./unit";
import { watchFindAllItem, watchFindItemById, watchRemoveItemByid, watchSaveItem, watchUpdateItem } from "./item";
import { watchFindAllStock, watchFindStockById, watchRemoveStockByid, watchSaveStock, watchUpdateStock } from "./stock";
export default function* rootSaga() {
  yield all([
    watchFindAllUnit(), watchFindUnitById(), watchRemoveByid(), watchUpdateUnit(), watchSaveUnit(),
    watchFindAllItem(), watchFindItemById(), watchRemoveItemByid(), watchSaveItem(), watchUpdateItem(),
    watchFindAllStock(), watchFindStockById(), watchRemoveStockByid(), watchSaveStock(), watchUpdateStock
  ])
}