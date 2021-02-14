import {put, takeLatest} from "redux-saga/effects"
import {
    FIND_ALL_UNIT,
    FIND_ALL_UNIT_FAILURE,
    FIND_ALL_UNIT_SUCCESS,
    FIND_UNIT_BY_ID,
    FIND_UNIT_BY_ID_FAILURE,
    FIND_UNIT_BY_ID_SUCCESS,
    REMOVE_UNIT_BY_ID,
    REMOVE_UNIT_BY_ID_FAILURE,
    REMOVE_UNIT_BY_ID_SUCCESS,
    SAVE_UNIT,
    SAVE_UNIT_FAILURE,
    SAVE_UNIT_SUCCESS,
    UPDATE_UNIT,
    UPDATE_UNIT_SUCCESS
} from "../constants/actions"
import axios from "../configs/api"
import pagination from "./pagination";


function* findUnitById(action) {
    console.log("findUnit Sagas")
    let result = yield axios.get(`/units/${action.id}`)
        .then(data => {
            return ({
                type: FIND_UNIT_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_UNIT_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* updateUnit(action) {
    let result = false

    yield put({
        type: UPDATE_UNIT_SUCCESS,
        data: result
    })
}


function* findAllUnit(action) {
    let parameter = pagination(action)

    if (action.search.code) {
        if (parameter.length > 0) {
            parameter += "&"
        }
        parameter += `code=${action.search.code}`
    }

    if (action.search.description) {
        if (parameter.length > 0) {
            parameter += "&"
        }
        parameter += `description=${action.search.description}`
    }

    parameter = parameter.replace(/\s+/g, '+')

    let result = yield axios.get(`/units?${parameter}`)
        .then(data => {
            return ({
                type: FIND_ALL_UNIT_SUCCESS,
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
                type: FIND_ALL_UNIT_FAILURE,
                error: err
            })
        })
    yield put(result)

}

function* removeUnitById(action) {
    let result = yield axios.delete(`/units/${action.id}`)
        .then(data => {
            return ({
                type: REMOVE_UNIT_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_UNIT_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* saveUnit(action) {
    let model = action.model;
    let method = 'POST', url = '/units';
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
                type: SAVE_UNIT_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_UNIT_FAILURE,
                error: e
            }
        })

    yield put(result)
}

export function* watchRemoveByid() {
    yield takeLatest(REMOVE_UNIT_BY_ID, removeUnitById)
}

export function* watchFindUnitById() {
    yield takeLatest(FIND_UNIT_BY_ID, findUnitById)
}

export function* watchFindAllUnit() {
    yield takeLatest(FIND_ALL_UNIT, findAllUnit)
}

export function* watchUpdateUnit() {
    yield takeLatest(UPDATE_UNIT, updateUnit)
}

export function* watchSaveUnit() {
    yield takeLatest(SAVE_UNIT, saveUnit)
}