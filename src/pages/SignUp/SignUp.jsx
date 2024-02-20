import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [isShowPass, setIsShowPass] = useState(false);

    const hideShowPass = () => {
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
                        <div className="col-md-6 mb-5">
                            <h1>Sign Up</h1>

                            <form >
                                <div className="inp-wrap">
                                    <input type="text" placeholder='Enter Name...' />
                                </div>

                                <div className="inp-wrap">
                                    <input type="email" placeholder='Enter Email...' />
                                </div>

                                <div className="inp-wrap">
                                    <input type={`${isShowPass ? "text" : "password"}`} placeholder='Enter Password...' />
                                    <span className='icon' onClick={hideShowPass}>
                                        {isShowPass ? <FaEyeSlash /> : <FaEye />}


                                    </span>
                                </div>
                                

                                <button className='form-btn'>Sign Up</button>
                                <p>Already have an account? <Link to={"/login"} >Login Now</Link></p>

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

export default SignUp