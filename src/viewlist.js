import React, {useState} from 'react';








const View =()=>{
    let viewall = JSON.parse(localStorage.getItem('myList'))
    let [users,allUsers]=useState(viewall)
    return(<>
    
    <div className="container">
    <div className="d-flex border rounded justify-content-center mt-5" style={{backgroundColor:'tomato', color:'white', fontSize:'25px'}}><strong><i class="fas fa-eye"></i> VIEW YOUR MARKET LIST </strong></div> 


        <div className="row">
            <div className="col">
            <table className="table table-striped mt-5">
    <thead><tr style={{color:'tomato'}}><th>S/N</th><th>STATUS</th><th>ITEM NAME</th><th>QUANTITY</th><th>$ PRICE</th><th>DELETE</th></tr></thead>

    {users.map((data, index)=>(
       <tbody> <tr key={index}  className="p-2 bg-light font-weight-bold">
<td>{index+1}</td><td><input type="checkbox" class="form-check-input" id="check1" name="vehicle1" /></td><td>{data.name}</td> <td>{data.qty}</td><td>{data.price}</td><td><button className="btn btn-danger"><i class="far fa-trash-alt"></i> <strong>DELETE</strong></button></td></tr></tbody>
))}
</table>
            </div>

        </div>



    </div>
    
    
    
    
    
    </>)
}







export default View;