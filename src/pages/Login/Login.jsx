import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {

    const [isShowPass, setIsShowPass] = useState(false);

    const hideShowPass = ()=>{
        setIsShowPass(!isShowPass);
    }
    
    return (
        <>
            <section className='login'>
                {/* BG */}
                <div className="packs-bg ">
                    <img className='bar-img' src="./imgs/Rectangle 15.png" alt="" />
                    <img className='bg-img' src="./imgs/image 3 (3).png" alt="" />
                </div>
                {/* BG END */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>Log In</h1>

                            <form >
                                <div className="inp-wrap">
                                    <input type="email" placeholder='Enter Email...' />
                                </div>

                                <div className="inp-wrap">
                                    <input type={`${isShowPass ? "text": "password"}`} placeholder='Enter Password...' />
                                    <span className='icon' onClick={hideShowPass}>
                                    {isShowPass ? <FaEyeSlash/>: <FaEye />}
                                        
                                        
                                    </span>
                                </div>
                                <div className="text-end">
                                    <Link>Forgot your password?</Link>
                                </div>

                                <button className='form-btn'>Log In</button>
                                <p>Don’t have an account? <Link to={"/signup"}>Create New</Link></p>

                            </form>

                        </div>

                        <div className="col-md-6">
                            <div className="login-img">
                                <img src="./imgs/Group 40099.png" width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login