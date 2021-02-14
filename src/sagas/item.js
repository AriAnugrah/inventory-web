import {put, takeLatest} from "redux-saga/effects"
import {
    FIND_ALL_ITEM,
    FIND_ALL_ITEM_FAILURE,
    FIND_ALL_ITEM_SUCCESS,
    FIND_ITEM_BY_ID,
    FIND_ITEM_BY_ID_FAILURE,
    FIND_ITEM_BY_ID_SUCCESS,
    REMOVE_ITEM_BY_ID,
    REMOVE_ITEM_BY_ID_FAILURE,
    REMOVE_ITEM_BY_ID_SUCCESS,
    SAVE_ITEM,
    SAVE_ITEM_FAILURE,
    SAVE_ITEM_SUCCESS,
    UPDATE_ITEM,
    UPDATE_ITEM_SUCCESS
} from "../constants/actions"
import axios from "../configs/api"
import pagination from "./pagination";


function* findItemById(action) {

    let result = yield axios.get(`/items/${action.id}`)
        .then(data => {
            return ({
                type: FIND_ITEM_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_ITEM_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* updateItem(action) {
    let result = false

    yield put({
        type: UPDATE_ITEM_SUCCESS,
        data: result
    })
}


function* findAllItem(action) {
    let parameter = pagination(action)

    if (action.search.name) {
        if (parameter.length > 0) {
            parameter += "&"
        }
        parameter += `name=${action.search.name}`
    }
    if (action.search.price) {
        if (parameter.length > 0) {
            parameter += "&"
        }
        parameter += `price=${action.search.price}`
    }

    parameter = parameter.replace(/\s+/g, '+')

    let result = yield axios.get(`/items?${parameter}`)
        .then(data => {
            return ({
                type: FIND_ALL_ITEM_SUCCESS,
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
                type: FIND_ALL_ITEM_FAILURE,
                error: err
            })
        })
    yield put(result)

}

function* removeItemById(action) {
    let result = yield axios.delete(`/items/${action.id}`)
        .then(data => {
            return ({
                type: REMOVE_ITEM_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_ITEM_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* saveItem(action) {
    let model = action.model;
    let method = 'POST', url = '/items';
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
                type: SAVE_ITEM_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_ITEM_FAILURE,
                error: e
            }
        })

    yield put(result)
}

export function* watchRemoveItemByid() {
    yield takeLatest(REMOVE_ITEM_BY_ID, removeItemById)
}

export function* watchFindItemById() {
    yield takeLatest(FIND_ITEM_BY_ID, findItemById)
}

export function* watchFindAllItem() {
    yield takeLatest(FIND_ALL_ITEM, findAllItem)
}

export function* watchUpdateItem() {
    yield takeLatest(UPDATE_ITEM, updateItem)
}

export function* watchSaveItem() {
    yield takeLatest(SAVE_ITEM, saveItem)
}