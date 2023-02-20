import React, {useEffect,useState}  from 'react';
import { useDispatch ,connect} from "react-redux";
import { showBills ,addBill ,deleteBill ,filterBill,updateBill} from './redux';
import { Button } from 'react-bootstrap';

 function Update(props) {
    const [details, setDetails] = useState({
        category: props.category,
        description: props.description,
        amount: props.amount ,
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
        props.updateBill({...details});
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
            <input value={details.amount} name='amount' onChange={changeHandler}></input>
            <div >
            {details.category!=null && details.amount!=null && details.description!=null &&<Button variant="primary" size="sm" onClick={calls}> Update </Button>}
            {(details.category==null || details.amount==null || details.description==null) && <Button variant="primary" size="sm" onClick={calls} disabled> Update </Button>}
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
        updateBill: function (details) {
            dispatch(updateBill(details));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);

