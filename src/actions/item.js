import {FIND_ALL_ITEM, FIND_ITEM_BY_ID, REMOVE_ITEM_BY_ID, SAVE_ITEM, UPDATE_ITEM} from "../constants/actions"


export function removeById(id) {
    return {
        type: REMOVE_ITEM_BY_ID,
        id
    }
}

export function findById(id) {
    return {
        type: FIND_ITEM_BY_ID,
        id
    }
}

export function findAll(pagination, search) {
    return {
        type: FIND_ALL_ITEM,
        pagination: {
            page:pagination.page,
            size:pagination.size,
        },
        search:{
            name:search.name,
            price:search.price
        }
    }
}

export function update(payload) {

    return {
        type: UPDATE_ITEM,
        payload
    }
}

export function save(model) {
    return {
        type: SAVE_ITEM,
        model
    }
}