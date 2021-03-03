import React from 'react';
import {Link} from 'react-router-dom';





const Home =()=>{
    return (
        <>
      
<div className="container">
<h3 className="text-center  text-bold mt-5 display-4" style={{color:'tomato'}}><strong><i class="fas fa-shopping-basket"></i> Market App</strong></h3>
    <div className="row" style={{paddingTop:'120px'}}> 
    <div className="col text-center border rounded" style={{backgroundColor:'tomato'}}>

   <Link to ="/items" className="btn  my-5" type="submit" style={{backgroundColor:'white', color:'tomato'}}><strong><i class="fas fa-plus"></i> CREATE NEW MARKET LIST</strong></Link> <br/> 
    <Link to="/view" type="submit"  class="btn  mb-5" style={{backgroundColor:'white', color:'tomato'}}><strong><i class="fas fa-eye"></i> VIEW  YOUR MARKET LIST</strong></Link>
    </div>
    
  




    </div>
    <p className="text-center mt-5 " style={{color:'tomato'}}><strong><i class="fas fa-user"></i> MR FAVOR HOME-WORK</strong></p>



</div>



        </>
    )
}




export default Home;