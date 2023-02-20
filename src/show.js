import React, {useEffect,useState}  from 'react';
import { useDispatch ,connect} from "react-redux";
import { showBills ,addBill ,deleteBill ,filterBill,monthlyBill} from './redux';
import './App.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Add from './add';
import Modal from './Modal/Modal';
import Update from './update';
function Show(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showBills());
    }, []);
    const [toggle, setToggle] = useState(false);
    const [category,setCategory] = useState('all');
    const [billDetails,setDetails] = useState({});
    const hello = (details)=>{
      console.log(details)
      setDetails(details);
      setToggle(true);
    }
    console.log(props.bills)
  return (
    <div>
    <p>Filter Category</p>
            <select value={category} name='category' onChange={(event)=> setCategory(event.target.value)}>
                <option value='all'>all</option>
                <option value='FoodNDining'>FoodNDining</option>
                <option value='utility'>utility</option>
                <option value='shopping'> shopping</option>
                <option value='education'>education</option>
                <option value='Travel'>Travel</option>
                <option value='Personal Care'>Personal Care</option>
            </select>
            {/* <button onClick={()=>props.monthlyBill(40000)}>level2</button> */}
    <Table  bordered hover>
      <thead>
        <tr>
          {/* <th>Id</th> */}
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Remove</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
          {category=="all" && props.bills.map((details,index) => (
          <tr key={details.id}>
           
            <td>{details.category}</td>
            {/* <td>{details.isHighLight?'t':'f'}</td> */}
              <td>{details.description}</td>
              <td>{details.amount}</td>
              <td>{details.date}</td>
              <td><Button variant="primary" onClick={()=>props.deleteBill(details.id)}>Delete</Button></td>
              <td><button onClick={()=>hello(details)}>
  Edit
</button></td>
            </tr>
          ))}
          {category!="all" && props.bills.map((details,index)=>(
            details.category==category?<tr key={details.id}>
           
           <td>{details.category}</td>
             <td>{details.description}</td>
             <td>{details.amount}</td>
             <td>{details.date}</td>
             <td><Button variant="primary" onClick={()=>props.deleteBill(details.id)}>Delete</Button></td>
             <td><button onClick={()=>setToggle(true)}>
  Edit
</button></td>
           </tr> : null

          ))}
        </tbody>
     
      
    </Table>

 


   <Modal show={toggle} modalClosed={()=>setToggle(!toggle)}>
   <div className='hello'><Update amount = {billDetails.amount} description = {billDetails.description} category={billDetails.category}/></div>
   </Modal>




       
        {/* {props.bills.map((details, index) => {
                    return (
                        <div className='bill'>
                        <h1>{details.category}</h1>
                        <h1>{details.description}</h1>
                        <h1>{details.amount}</h1>
                        <h1>{details.date}</h1>
                        <button onClick={()=>props.deleteBill(details.id)}>Delete Bill</button>
                        </div>
                    );
                })} */}
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
        monthlyBill: function (budget) {
          dispatch(monthlyBill(budget));
      },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Show);


