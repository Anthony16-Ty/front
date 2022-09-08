import React from "react";


function  Home()


{
    return (
        <div>
        <div className='container'>
           <div className='row justify-content-evenly py-5'>
               <div className='col-12 col-md-6 mt-5 mt-md-0'>
                 <h2 className='mb-0'>PRESTO</h2>
                 <h1 style={{fontWeight:1000}}>Presto is the real deal</h1>
                 <p style={{fontWeight: 600}}>Welcome to the presto! You can add books you have read, or would like to read. You can add reviews and rate books based on how you liked them!.</p>
                </div>
                <div className='col-sm-8 col-md-5'>
                   <img className='img-fluid' src="https://media.istockphoto.com/photos/open-book-picture-id152992783?k=20&m=152992783&s=612x612&w=0&h=BRdZgX9LFc1MGk6m2lM2HNC4GklxLQYFZbTw62R9Meg=" alt="books img"/>
               </div>
               </div>
           </div>
        </div>
    );
}
    


export default Home;