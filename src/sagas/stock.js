import { put, takeLatest } from "redux-saga/effects"
import {
    FIND_ALL_STOCK, FIND_ALL_STOCK_FAILURE, FIND_ALL_STOCK_SUCCESS,
    FIND_STOCK_BY_ID, FIND_STOCK_BY_ID_FAILURE, FIND_STOCK_BY_ID_SUCCESS,
    REMOVE_STOCK_BY_ID, REMOVE_STOCK_BY_ID_FAILURE, REMOVE_STOCK_BY_ID_SUCCESS, SAVE_STOCK, SAVE_STOCK_FAILURE, SAVE_STOCK_SUCCESS, UPDATE_STOCK, UPDATE_STOCK_SUCCESS
} from "../constants/actions"
import axios from "../configs/api"
import pagination from "./pagination";



function* findStockById(action) {
    console.log("findStock Sagas")
    let result = yield axios.get(`/stocks/${action.id}`)
        .then(data => {
            return ({
                type: FIND_STOCK_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_STOCK_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* updateStock(action) {
    let result = false

    yield put({
        type: UPDATE_STOCK_SUCCESS,
        data: result
    })
}


function* findAllStock(action) {
    let parameter = pagination(action)

    if (action.search.name) {
        if (parameter.length > 0) {
            parameter += "&"
        }
        parameter += `quantity=${action.search.quantity}`
    }

    parameter = parameter.replace(/\s+/g, '+')

    console.log("find all stock from saga")
    let result = yield axios.get(`/stocks?${parameter}`)
        .then(data => {
            return ({
                type: FIND_ALL_STOCK_SUCCESS,
                data: data.list,
                pagination: {
                    size: data.size,
                    total: data.total,
                    page: data.page
                },

            })
        })
        .catch(err => {
            return ({
                type: FIND_ALL_STOCK_FAILURE,
                error: err
            })
        })
    yield put(result)

}

function* removeStockById(action) {
    let result = yield axios.delete(`/stocks/${action.id}`)
        .then(data => {
            return ({
                type: REMOVE_STOCK_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_STOCK_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* saveStock(action) {
    let model = action.model;
    let method = 'POST', url = '/stocks';
    if (model.id) {
        method = "PUT";
        url += `/${model.id}`
    }

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_STOCK_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_STOCK_FAILURE,
                error: e
            }
        })

    yield put(result)
}

export function* watchRemoveStockByid() {
    yield takeLatest(REMOVE_STOCK_BY_ID, removeStockById)
}

export function* watchFindStockById() {
    yield takeLatest(FIND_STOCK_BY_ID, findStockById)
}

export function* watchFindAllStock() {
    yield takeLatest(FIND_ALL_STOCK, findAllStock)
}

export function* watchUpdateStock() {
    yield takeLatest(UPDATE_STOCK, updateStock)
}

export function* watchSaveStock() {
    yield takeLatest(SAVE_STOCK, saveStock)
}