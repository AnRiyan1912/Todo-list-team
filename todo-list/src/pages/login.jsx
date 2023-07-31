import { ReactComponent as Shape } from "../assets/shape.svg";
import { ReactComponent as Imglogin } from "../assets/login-img.svg";

const Login = () => {

    return (
        <>
        <div className="body-login">
            <div className="bg  ">
                <Shape className='shape'/>
                <div className="center">
            </div>
            </div>
            <div className="container">
                 <div className="text-welcomeback center ">Welcome back!</div>
                <div className="about-login center">Let's help you meet your task</div>
                <div className="center"><Imglogin /></div>
                <div className="container-input col">
                    <input className="input-login" type="text" placeholder="Enter your email"/>
                    <input className="input-login" type="text" placeholder="Enter your password"/>
                </div>
                <div className="forgot center">
                    <p><a href="">Forget password</a>
                </p></div>
                <div className="login center">
                    <button>Login</button>
                </div>
                <div className="sign-up center"><p>Don't have an account</p><a href="">Sign Up</a></div>
            </div>     
        </div>    
        </>
    )
}

export default Login 