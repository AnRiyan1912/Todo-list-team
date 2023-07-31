import { ReactComponent as Shape } from "../assets/shape.svg";
const Register = () => {
  return (
    <>
       <div className="body-login">
            <div className="bg  ">
                <Shape className='shape'/>
                <div className="center">
            </div>
            </div>
            <div className="container">
                 <div className="text-welcomeback center ">Welcome onboard!</div>
                <div className="about-login center">Let's help you meet your tasks</div>
                <div className="container-input col">
                    <input className="input-login" type="text" placeholder="Enter your full name"/>
                    <input className="input-login" type="text" placeholder="Enter your email"/>
                    <input className="input-login" type="text" placeholder="Enter password"/>
                    <input className="input-login" type="text" placeholder="Confrom password"/>
                </div>
                <div className="forgot center">
                    <p>
                </p></div>
                <div className="login center">
                    <button>Login</button>
                </div>
                <div className="sign-up center"><p>Don't have an account</p><a href="">Sign Up</a></div>

            </div>
            
           
            
    
           
        </div>    
    </>
  );
};

export default Register;
