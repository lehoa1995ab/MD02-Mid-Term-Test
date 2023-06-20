import React from 'react'
import banner_1 from '../img/banner_1.jpg';
import banner_2 from '../img/banner_2.jpg';
import banner_3 from '../img/banner_3.jpg';

export default function Banner1() {
  return (
    <div>
      <div style={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:"center",
        

    
      }}>
        <img src={banner_1}  alt='' />
        <img src={banner_2}  alt='' />
        <img src={banner_3}  alt='' />
      </div>
      <div className='Delivery_container'
      style={{
        padding:'20px',
        display:"flex",
        justifyContent:'space-around',
        
      }}
      >
            <div className='shipping' style={{ display: "flex", 
            backgroundColor: "hsl(0, 0%, 95%)",
            width:'300px'}}>
                <div style={{
                 padding:'20px',

                }}>
                <i class="fa-solid fa-truck"></i>
                </div>
                <div>
                    <b>FREE SHIPPING</b>
                    <p>Suffered Alteration in Some Form</p>
                </div>
            </div>
            <div className='cash ' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)" ,
          width:'300px'}}>
                <div  style={{
                 padding:'20px',

                }}>
                <i class="fa-solid fa-money-bill-1-wave"></i>

                </div>
                <div>
                    <b>CASH ON DELIVERY</b>
                    <p>The Internet Tend To Repeat</p>
                </div>
            </div>
            <div className='return' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)",
          width:'300px'}} >
                <div  style={{
                 padding:'20px',

                }}>
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                </div>
                <div>
                    <b>45 DAYS RETURN</b>
                    <p>Making it look Like Readable</p>
                </div>
            </div>
            <div className='opening' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)",
          width:'300px'}} >
                <div  style={{
                 padding:'20px',

                }}>
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                    <b>OPENING ALL WEEK</b>
                    <p>8AM-09PM</p>
                </div>
            </div>
        </div>
    </div>
     
  );
}

