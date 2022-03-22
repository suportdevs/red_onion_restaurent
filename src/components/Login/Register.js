import React, { useState } from 'react';
import logo from '../../images/logo2.png';
import iconBg from '../../images/icon-bg.png';
import { Link } from 'react-router-dom';
import { createUserEmailPassword, initializeLoginApp } from './LoginManager';

initializeLoginApp();

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        // password: "",
        success: "",
        error: ""
    });
    const handleInputField = (e) => {
        let checkInputValidation = true;

        if (e.target.name === 'email') {
            const checkEmailField = /\S+@\S+\.\S+/.test(e.target.value);
            checkInputValidation = checkEmailField;
        }
        let password = "";
        if (e.target.name === 'password') {
            password = e.target.value;
        }
        if (e.target.name === 'confirm-password') {
            let passwordField = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
            checkInputValidation = passwordField.test(e.target.value);
            // if (password !== e.target.value) {
            //     const newUserInfo = { ...user };
            //     newUserInfo.error = "Password does not match.";
            //     setUser(newUserInfo);
            //     checkInputValidation = false;
            // }else{
                
            //     if (passwordField.test(e.target.value) !== true) {
            //         const newUserInfo = {...user};
            //         newUserInfo.error = "Password is too week.";
            //         setUser(newUserInfo);
            //         checkInputValidation = false;
            //     }else{
            //         checkInputValidation = true;
            //     }
            //     const newUserInfo = { ...user };
            //     newUserInfo.error = "";
            //     setUser(newUserInfo);
            //     checkInputValidation = true;
            // }
        }
        if (checkInputValidation === true) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        e.preventDefault();
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        if(user.email && user.password){
            createUserEmailPassword(user.email, user.password)
            .then(response => {
                console.log(response)
                setUser(response);
            })
            .catch(error => {
                console.log(error)
                setUser(error);
            })
        }
    }

    return (
        <div className='w-full h-screen  bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${iconBg})` }}>
            <div className='w-96 justify-center items-center text-center mx-auto'>
                <img className='w-48 mx-auto my-10' src={logo} alt="" />
                
                <span className={user.error ? `text-rose-600` : `text-green-600`}>{user.error ? user.error : user.success}</span>
                
                <form onSubmit={handleFormSubmit} >
                    <div className='my-5'>
                        <input type="text" onChange={handleInputField} name="name" className='p-4 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Name' />
                    </div>
                    <div className='my-5'>
                        <input type="email" onChange={handleInputField} name="email" className='p-4 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Email' />
                    </div>
                    <div className='my-5'>
                        <input type="password" onChange={handleInputField} name="password" className='p-4 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Password' />
                    </div>
                    <div className='my-5'>
                        <input type="password" onChange={handleInputField} name="confirm-password" className='p-4 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Confirm Password' />
                    </div>
                    <button className='bg-rose-600 text-white p-4 w-full mb-5 rounded-md'>Sing Up</button>
                </form>
                <Link className='text-rose-600' to="/login">Already have an Account</Link>
            </div>
        </div>
    );
};

export default Register;