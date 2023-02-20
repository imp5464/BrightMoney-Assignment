import {
    ADD_BILL, SHOW_BILLS, DELETE_BILL , FILTER ,UPDATE_BILL, MONTHLY_BILLL
} from "./types";



export const addBill = (details) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    const formattedToday = dd + '-' + mm + '-' + yyyy;
    return function (dispatch) {
        dispatch({
            type: ADD_BILL,
            payload: {...details,date:formattedToday},
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

export const updateBill = (details) => {
    
    return function (dispatch) {
        dispatch({
            type: UPDATE_BILL,
            payload: details
        });
    };
};

export const monthlyBill = (budget) => {
    return function (dispatch) {
        dispatch({
            type: MONTHLY_BILLL,
            payload: budget
        });
    };
};