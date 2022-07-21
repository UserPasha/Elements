import React from 'react';
import style from "./FormWithBottomString.module.css"

const FormWithBottomString = () => {
    return (
        <div className={style.container}>
            <div className={style.center}>
                <h1>Register</h1>
                <form method="POST" action="">
                    <div className={style.textField}>
                        <input type="text" name="name" required />
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className={style.textField}>
                        <input type="email" name="email" required/>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className={style.textField}>
                        <input type="password" name="cpassword" required />
                        <span></span>
                        <label>confirm Password</label>
                    </div>
                    <input name="submit" type="submit" value="Sign Up"/>
                    <div className={style.signupLink}>
                        Have an Account ? <a href="#">Login Here</a>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default FormWithBottomString;
