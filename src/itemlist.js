import React, { useState, useRef} from 'react';





const Item =()=>{
let [list, setList] = useState({name:'',qty:'', price:''})
let [alllist, setalllist] = useState([]);




    let handlesubmit =(e)=>{
e.preventDefault()
let newlist = {name:list.name, qty:list.qty, price:list.price}; 
setalllist([...alllist, list]) 
let myJSON = JSON.stringify(alllist);  
 localStorage.setItem('myList', myJSON) 
    }


    let handlechange =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setList({...list, [name]: value});
    }

    return(
        
<>
<div className="container">
<div className="d-flex border rounded justify-content-center mt-5" style={{backgroundColor:'tomato', color:'white', fontSize:'25px'}}><strong><i class="fas fa-plus"></i> CREATE A NEW MARKET LIST HERE</strong></div> 

    <div className="row">
        <div className="col">
       
     
        </div>

        <div className="col-7 text-center">
        <form className="pt-5" onSubmit={handlesubmit}>  
        <label for="usr" style={{color:'tomato'}}><strong> <i class="fas fa-file-signature"></i> Item Name</strong></label>
                <input type="text" placeholder="Item Name" className="form-control" name="name"  value={list.name}  onChange={handlechange}/> <br/>

                <label for="usr"style={{color:'tomato'}}><strong><i class="fas fa-sort-numeric-up"></i> Quantity</strong></label>
                <input type="number" placeholder="Quantity" className="form-control" name="qty" value={list.qty} onChange={handlechange}/> <br/>

                <label for="usr"style={{color:'tomato'}}><strong><i class="fas fa-dollar-sign"></i> Price</strong></label>
                <input type="number" placeholder="Price" className="form-control" name="price" value={list.price} onChange={handlechange}/>  <br/>

                <button class="btn" type="submit" style={{backgroundColor:'tomato', color:'white'}}><i class="far fa-save"></i> <strong>SAVE ITEM</strong></button>




            </form>
     
        </div>

        <div className="col">
       
     
        </div>

    </div>





</div>


</>

    )
}


export default Item;