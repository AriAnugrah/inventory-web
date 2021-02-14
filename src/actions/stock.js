import {
    FIND_ALL_STOCK,
    FIND_STOCK_BY_ID,
    REMOVE_STOCK_BY_ID,
    SAVE_STOCK,
    UPDATE_STOCK
} from "../constants/actions"


export function removeById(id) {
    return {
        type: REMOVE_STOCK_BY_ID,
        id
    }
}

export function findById(id) {
    return {
        type: FIND_STOCK_BY_ID,
        id
    }
}

export function findAll(pagination, search) {
    return {
        type: FIND_ALL_STOCK,
        pagination: {
            page:pagination.page,
            size:pagination.size,
        },
        search:{
            quantity:search.quantity,
        }
    }
}

export function update(payload) {

    return {
        type: UPDATE_STOCK,
        payload
    }
}

export function save(model) {
    return {
        type: SAVE_STOCK,
        model
    }
}