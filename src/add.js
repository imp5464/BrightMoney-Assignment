import React, {useEffect,useState}  from 'react';
import { useDispatch ,connect} from "react-redux";
import { showBills ,addBill ,deleteBill ,filterBill,updateBill} from './redux';
import { Button } from 'react-bootstrap';

 function Add(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showBills());
    }, []);
    const [details, setDetails] = useState({
        category: 'select',
        description: '',
        amount: 0 ,
    });
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
       <div class= " p-2">
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
            <p>Description</p>
            <input value={details.description} name='description' onChange={changeHandler}></input>
            <p>Amount</p>
            <input value={details.amount} type='number' name='amount' onChange={changeHandler}></input>
            <div >
            {details.category!='select' && details.amount!=0 && details.description!='' &&<Button variant="primary" size="sm" onClick={calls}> ADD </Button>}
            {(details.category=='select' || details.amount==0 || details.description=='') && <Button variant="primary" size="sm" onClick={calls} disabled> ADD </Button>}
            </div>

        </div>
            
           
           
           
    </div>
  )
  
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
        updateBill: function (details) {
            dispatch(updateBill(details));
        },
        deleteBill: function (id) {
            dispatch(deleteBill(id));
        },
        filter: function (category) {
            dispatch(filterBill(category));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);

