import { act } from "react-dom/test-utils";
import {
  ADD_BILL,
  DELETE_BILL,
  SHOW_BILLS,
  FILTER,
  UPDATE_BILL,
  MONTHLY_BILLL
} from "../action/types";
const initialState = {
    bills: [
        {
        "id": 1,
        "description": "Dominoes",
        "category": "FoodNDining",
        "amount": 30,
        "date": "02-02-2023",
        },
        {
        "id": 2,
        "description": "Car wash",
        "category": "utility",
        "amount": 500,
        "date": "02-06-2023",
        },
        {
        "id": 3,
        "description": "Amazon",
        "category": "shopping",
        "amount": 2030,
        "date": "02-07-2023",
        },
        {
        "id": 4,
        "description": "House rent",
        "category": "Food & Dining",
        "amount": 35900,
        "date": "02-03-2023",
        },
        {
        "id": 5,
        "description": "Tuition",
        "category": "education",
        "amount": 2200,
        "date": "02-12-2023",
        },
        {
        "id": 6,
        "description": "Laundry",
        "category": "Personal Care",
        "amount": 320,
        "date": "02-14-2023",
        },
        {
        "id": 7,
        "description": "Vacation",
        "category": "Travel",
        "amount": 3430,
        "date": "02-18-2023",
        }
        ],
        monthlyBills:[]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BILLS:
            return {
                ...state,
            };
        case ADD_BILL: {
            const id  = state.bills.length+1
            return {
                ...state,
                bills: [...state.bills,{id,isHighLight:false,...action.payload}],
            };
        };
        case UPDATE_BILL: {
            const index = state.bills.findIndex((bill) => bill.id !== action.payload.id);                                                                
             const newArray = [...state.bills]; //making a new array
            newArray[index].amount = action.payload.amount;
            newArray[index].description= action.payload.description;
            newArray[index].category = action.payload.category;//changing value in the new array
            return { 
             ...state, //copying the orignal state
             bills: newArray, //reassingning todos to new array
            };
        };
        case MONTHLY_BILLL:
            function compare( a, b ) {
                if ( a.amount > b.amount ){
                  return -1;
                }
                if ( a.amount < b.amount ){
                  return 1;
                }
                return 0;
              }
              state.bills.sort(compare);
              let array= [];
              let sum =0;
              console.log(sum,state.bills);
              state.bills.forEach((bill)=>{
                if(bill.amount+sum <= action.payload){
                    array.push(bill);
                    sum+=bill.amount;
                }
              })
              console.log(sum,state.bills);
            return {
                ...state,
                monthlyBills:array
            }
        case DELETE_BILL:
            console.log(action.payload)
            return {
                ...state,
            
                    
                    bills: state.bills.filter((bill) => {
                        return action.payload !== bill.id;
                    }),
            
            };
                default:
            return state;
    }
};

export default userReducer;
