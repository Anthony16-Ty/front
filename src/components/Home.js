import React from "react";

function Home()


{
    return (
        <div>
        <div className='container'>
           <div className='row justify-content-evenly py-5'>
           <div className='col-12 col-md-6 mt-5 mt-md-0'>


                 <h1 className='mb-0'>PRESTO</h1>
                 
                 <p style={{fontWeight: 600}}>Welcome to Presto! You can books and novels you've read or you would like to read.You can rate them them based on how you like them</p>
                </div>
               <div className='col-sm-8 col-md-5'>
                   <img className='img-fluid' src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" alt="about us img"/>
               </div>
               
               </div>
           </div>
        </div>
    );
}
    


export default Home;