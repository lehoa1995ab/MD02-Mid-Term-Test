import React, { useState, useEffect } from 'react';
import deal_ofthe_week from '../img/deal_ofthe_week.png';

const Section = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const endDate = new Date('2023-06-25T23:59:59');
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = endDate - now;

            if (timeLeft < 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
       
        <div style={{display:'flex', justifyContent:'space-evenly', backgroundColor:'#F3F3F3', marginTop:'70px'}}>
            <img src={deal_ofthe_week} alt="Deal Of The Week" />
            <div style={{marginTop:'60px'}}>
                <h1 style={{marginBottom:'30px', textAlign:'center'}}>Deal Of The Week</h1>
                <hr style={{width:'20%', margin:'auto', height:'3px', color:'red', backgroundColor:'red', marginBottom:'80px'}} />
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <div style={{borderRadius:'100%', backgroundColor:'#fff', width:'120px', height:'120px', textAlign:'center', fontSize:'18px', padding:'10px'}}>
                       <div style={{fontSize:'40px', color:'#FF4B4B', fontWeight:'bold'}}>{countdown.days}</div>
                       <span style={{fontWeight:'bold'}}>Days</span>  
                    </div>

                    <div style={{borderRadius:'100%', backgroundColor:'#fff', width:'120px', height:'120px', textAlign:'center', fontSize:'18px', margin:'0 10px',padding:'10px'}}>
                       <div style={{fontSize:'40px', color:'#FF4B4B', fontWeight:'bold'}}>{countdown.hours}</div>
                       <span style={{fontWeight:'bold'}}>Hours</span>  
                    </div>

                    <div style={{borderRadius:'100%', backgroundColor:'#fff', width:'120px', height:'120px', textAlign:'center', fontSize:'18px', padding:'10px'}}>
                       <div style={{fontSize:'40px', color:'#FF4B4B', fontWeight:'bold'}}>{countdown.minutes}</div>
                       <span style={{fontWeight:'bold'}}>Minutes</span>  
                    </div>

                    <div style={{borderRadius:'100%', backgroundColor:'#fff', width:'120px', height:'120px', textAlign:'center', fontSize:'18px', margin:'0 10px', padding:'10px'}}>
                       <div style={{fontSize:'40px', color:'#FF4B4B', fontWeight:'bold'}}>{countdown.seconds}</div>
                       <span style={{fontWeight:'bold'}}>Seconds</span>  
                    </div>
                </div>

                <button style={{border:'none', backgroundColor:'#000', color:'#fff',width:'150px', height:'40px', marginLeft:'190px', marginTop:'80px'}}>SHOP NOW</button>
            </div>
            
        </div>
        
    
    );
};

export default Section;
