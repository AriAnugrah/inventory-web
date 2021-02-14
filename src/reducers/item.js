import {
    FIND_ALL_ITEM, FIND_ALL_ITEM_FAILURE, FIND_ALL_ITEM_SUCCESS,
    FIND_ITEM_BY_ID, FIND_ITEM_BY_ID_FAILURE, FIND_ITEM_BY_ID_SUCCESS,
    REMOVE_ITEM_BY_ID, REMOVE_ITEM_BY_ID_FAILURE, REMOVE_ITEM_BY_ID_SUCCESS,
    SAVE_ITEM,
    SAVE_ITEM_FAILURE,
    SAVE_ITEM_SUCCESS,
    UPDATE_ITEM, UPDATE_ITEM_FAILURE, UPDATE_ITEM_SUCCESS
} from "../constants/actions"

const initialState = {
    data: null,
    pagination: {
        size: null,
        total: null,
        page: null
    },
    isLoading: false,
    error: null
}


export const removeItemById = (state = {...initialState, data: false}, action) => {

    switch (action.type) {
        case REMOVE_ITEM_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_ITEM_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: true,
                error: null
            }
        default:
            return false;
    }

}

export const findItemById = (state = {...initialState, data: false}, action) => {
    switch (action.type) {
        case FIND_ITEM_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case FIND_ITEM_BY_ID_SUCCESS:
            console.log(action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ITEM_BY_ID_FAILURE:
            return {
                data: false,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null,
            }
    }
}

export const findAllItem = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_ITEM:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            }
        case FIND_ALL_ITEM_SUCCESS:
            return {
                data: action.data,
                pagination: {
                    size: action.pagination.size,
                    total: action.pagination.total,
                    page: action.pagination.page
                },
                isLoading: false,
                error: null
            };
        case FIND_ALL_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            };
    }
}

export const updateItem = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_ITEM:
            console.log("updateing item in reducres")
            return true
        case UPDATE_ITEM_SUCCESS:

            console.log("updateing success item in reducres")
            return true
        default:
            return false;
    }
}

export const saveItem = (state = {...initialState}, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_ITEM_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            };
    }
}