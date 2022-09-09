import React from "react";

function Home()


{
    return (
        <div>
        <div className='container'>
           <div className='row justify-content-evenly py-5'>
           <div className='col-12 col-md-6 mt-5 mt-md-0'>


                 <h1 className='mb-0'>CODEX</h1>
                 <h2 style={{fontWeight:1000}}>Codex is the real deal</h2>
                 <p style={{fontWeight: 600}}>Welcome to the book tracker app! You can add books you have read, or would like to read. You can add reviews and rate books based on how you liked them!.</p>
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