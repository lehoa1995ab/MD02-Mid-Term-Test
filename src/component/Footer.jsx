import React from 'react'
export default function Footer() {
    return (
        <div style={{
            backgroundColor:"#f3f3f3"
        }}>
            <div 
            style={{
                display:"flex",
                padding:'20px'
            }}
            >
                <div>
                    <span>Blog</span>
                    <span style={{ margin: "20px 30px" }}>FAQs</span>
                    <span>Contact us</span>
                </div >
                <div style={{marginLeft:"900px"

            }}> 
                    <i class="fa-brands fa-facebook-f"></i>
                    <i style={{margin:'20px 30px'}}class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i style={{margin:'20px 30px'}}class="fa-brands fa-pinterest"></i>
                </div>
            </div>
            <div style={{
                padding:"10px",
                marginRight:"40px"
            }}>
                <i class="fa-regular fa-copyright"></i>
                <span>2018 All Right Reserved.This Templateis made with by <span style={{ color: "red" }}>Quintus Labs</span></span>
            </div>
        </div>
    )
}
