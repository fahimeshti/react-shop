import classes from './Register.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';

const Register = () => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1>Create an Account</h1>
                <form className={classes.form}>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="last name" />
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <input type="text" placeholder="confirm password" />
                    <span className={classes.agreement}>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button>CREATE</button>
                </form>
            </div>
        </div>
    );
};

export default Register;