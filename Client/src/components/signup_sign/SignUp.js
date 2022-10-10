import React, { useState } from 'react'
import {NavLink} from "react-router-dom";

const SignUp = () => {


    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""

    });

    console.log(udata);


    const adddata=(e)=>{
        const {name,value}= e.target;

        setUdata(()=>{
            return {
                ...udata,
                [name]:value
            }
        })
    }


    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./zdalogo.png" alt="amazonlogo" />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your Name</label>
                            <input type="text"
                            // onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                            onChange={adddata}
                            value={udata.fname}
                             name='fname' id='fname' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            // onChange={(e)=>setUdata({...udata,email:e.target.value})}
                            onChange={adddata}
                            value={udata.email}
                            name='email' id='email' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text"
                            // onChange={(e)=>setUdata({...udata,mobile:e.target.value})}
                            onChange={adddata}
                            value={udata.mobile}
                             name='mobile' id='mobile' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            // onChange={(e)=>setUdata({...udata,password:e.target.value})}
                            onChange={adddata}
                            value={udata.password}
                            name='password' placeholder='At least 6 charecter' id='password' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password Again</label>
                            <input type="password"
                            // onChange={(e)=>setUdata({...udata,cpassword:e.target.value})}
                            onChange={adddata}
                            value={udata.cpassword}
                             name='cpassword' id='cpassword' />
                        </div>
                        <button className='signin_btn'>Continue</button>

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign-IN</NavLink>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp