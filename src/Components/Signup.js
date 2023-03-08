import Nav from "./Nav";
import signUpLogo from '../images/signup.svg';
import signupStyle from '../styles/Signup.module.css';
import SignupForm from "./SignupForm";

export default function Signup()
{

    return(
        <div>
            <Nav now="signup"/>

            <div className={`d-flex justify-content-center`}>
                <div className={signupStyle.signup_parent}>
                    <h2 className={`fs-2`}>
                        <strong>
                            Create an account
                        </strong>
                    </h2>

                    <div className={signupStyle.main_content}>
                        <div className={signupStyle.img_holder}>
                            <img className={`img-fluid`} style={{height:'100%'}} src={signUpLogo}/>
                        </div>

                        <SignupForm/>
                    </div>
                </div>
            </div>

        </div>
    )
}