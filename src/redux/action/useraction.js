import {
    ADD_BILL, SHOW_BILLS, DELETE_BILL , FILTER
} from "./types";



export const addBill = (details) => {
    return function (dispatch) {
        dispatch({
            type: ADD_BILL,
            payload: details,
        });
    };
};


export const showBills = () => {
    return function (dispatch) {
        dispatch({
            type: SHOW_BILLS,
        });
    };
};

export const deleteBill = (id) => {
    console.log(id);
    return function (dispatch) {
        dispatch({
            type: DELETE_BILL,
            payload: id
        });
    };
};

export const filterBill = (category) => {
    return function (dispatch) {
        dispatch({
            type: FILTER,
            payload: category
        });
    };
};