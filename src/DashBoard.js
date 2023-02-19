import React, {useEffect,useState}  from 'react';
import { useDispatch ,connect} from "react-redux";
import { showBills ,addBill ,deleteBill ,filterBill} from './redux';
import './App.css';
function DashBoard(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showBills());
    }, []);
    const [details, setDetails] = useState({
        category: 'select',
        description: '',
        amount: 0,
    });
    // const  setValue= (category, description, amount) => {
    //     setDetails({ category, description, amount });
    // };
    const changeHandler = (event) => {
        const { name, value } = event.target;
    
        setDetails((prevValue) => {
          return {
            ...prevValue,
            [name]: value,
          };
        });
      };
      const calls = () => {
        props.addBill({...details,date:Date.now()});
      };
  return (
    <div>
        <div>
            <p>category</p>
            <select value={details.category} name='category' onChange={changeHandler}>
                <option value='select'>select</option>
                <option value='FoodNDining'>FoodNDining</option>
                <option value='utility'>utility</option>
                <option value='shopping'> shopping</option>
                <option value='education'>education</option>
                <option value='Travel'>Travel</option>
                <option value='Personal Care'>Personal Care</option>
            </select>
            <p>description</p>
            <input value={details.description} name='description' onChange={changeHandler}></input>
            <p>amount</p>
            <input value={details.amount} name='amount' onChange={changeHandler}></input>
            <button onClick={calls}>add</button>
        </div>
        
        <div>
            <button onClick={()=>filterBill(details.category)}>filter</button>
        </div>
        {props.bills.map((details, index) => {
                    return (
                        <div className='bill'>
                        <h1>{details.category}</h1>
                        <h1>{details.description}</h1>
                        <h1>{details.amount}</h1>
                        <h1>{details.date}</h1>
                        <button onClick={()=>props.deleteBill(details.id)}>Delete Bill</button>
                        </div>
                    );
                })}
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        bills: state.user.bills,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        showBills: function () {
            dispatch(showBills());
        },
        addBill: function (details) {
            dispatch(addBill(details));
        },
        deleteBill: function (id) {
            dispatch(deleteBill(id));
        },
        filter: function (category) {
            dispatch(filterBill(category));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);

