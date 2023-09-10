import React from 'react';
import Button from "../../../shared/UI/buttonMain/Button";
import cl from './Register.module.css'

const Register = () => {
    return (
        <div >
            <div>
                <h4>Register</h4>
            </div>
            <form
                  className={cl['form-container']}>
                <label htmlFor="fullname">

                    <input
                        type="text"
                        name='fullname'
                        placeholder='your full name'
                        required
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="text"
                        name='email'
                        placeholder='email'
                        required
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="passworg"
                        name='password'
                        placeholder='password'
                        required
                    />
                </label>
                <label htmlFor="confirm">
                    <input
                        type="confirm"
                        name='confrim'
                        placeholder='confirm password'
                        required
                    />
                </label>
                <Button>Create account</Button>
            </form>
        </div>
    );
};

export default Register;
