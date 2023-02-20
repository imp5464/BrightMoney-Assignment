import React, {useEffect,useState}  from 'react';
import { useDispatch ,connect} from "react-redux";
import { showBills,monthlyBill} from './redux';
import './App.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function MonthlyBudget(props) {
    const [budget,setBudget] = useState(0);
    // const [flag,setFlag] = useState(false);
  return (
       <div >
        <div style={{marginLeft:"50px" ,marginTop:"40px" ,marginBottom:"20px"}} class=" form-group col-md-5 mb-2  ">

        
        <label for="example" style={{fontSize:"20px"}}>Monthly Budget</label>
         <input type="number" class="form-control mu-3 mb-3"  aria-describedby="emailHelp" placeholder="Enter Monthly Budget in Rs." onChange={e => setBudget(e.target.value)}></input>
         <Button variant="primary" onClick={()=>props.monthlyBill(budget)} >Show</Button>
         
         </div>
           { budget>0  && <Table  bordered hover>
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
          {props.monthlyBills.map((details,index)=>(
       <tr key={details.id}>
           
           <td>{details.category}</td>
             <td>{details.description}</td>
             <td>{details.amount}</td>
             <td>{details.date}</td>
             
           </tr>

          ))}
        </tbody>
     
      
    </Table>}


    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        monthlyBills: state.user.monthlyBills,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        monthlyBill: function (budget) {
          dispatch(monthlyBill(budget));
      },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MonthlyBudget);



