import {
    FIND_ALL_STOCK, FIND_ALL_STOCK_FAILURE, FIND_ALL_STOCK_SUCCESS,
    FIND_STOCK_BY_ID, FIND_STOCK_BY_ID_FAILURE, FIND_STOCK_BY_ID_SUCCESS,
    REMOVE_STOCK_BY_ID, REMOVE_STOCK_BY_ID_FAILURE, REMOVE_STOCK_BY_ID_SUCCESS,
    SAVE_STOCK,
    SAVE_STOCK_FAILURE,
    SAVE_STOCK_SUCCESS,
    UPDATE_STOCK, UPDATE_STOCK_FAILURE, UPDATE_STOCK_SUCCESS
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


export const removeStockById = (state = { ...initialState, data: false }, action) => {

    switch (action.type) {
        case REMOVE_STOCK_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case REMOVE_STOCK_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: true,
                error: null
            }
        default:
            return false;
    }

}

export const findStockById = (state = { ...initialState, data: false }, action) => {
    switch (action.type) {
        case FIND_STOCK_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case FIND_STOCK_BY_ID_SUCCESS:
            console.log(action.data)
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_STOCK_BY_ID_FAILURE:
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

export const findAllStock = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_STOCK:
            return {
                ...state,
                pagination: {
                    size: null,
                    total: null,
                    page: null
                },
                isLoading: true
            }
        case FIND_ALL_STOCK_SUCCESS:
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
        case FIND_ALL_STOCK_FAILURE:
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

export const updateStock = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_STOCK:
            return true
        case UPDATE_STOCK_SUCCESS:

            return true
        default:
            return false;
    }
}

export const saveStock = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SAVE_STOCK:
            return {
                ...state,
                data: null,
                isLoading: true
            }
        case SAVE_STOCK_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_STOCK_FAILURE:
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