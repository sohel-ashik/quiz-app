import loginStyle from '../styles/Login.module.css';
import loginLogo from '../images/login.svg';
import Nav from './Nav';
import LoginForm from './LoginForm';

export default function Login()
{
    return(
        <div>
            <Nav/>

            <div className={`d-flex justify-content-center`}>
                <div className={loginStyle.signup_parent}>
                    <h2 className={`fs-2`}>
                        <strong>
                            Create an account
                        </strong>
                    </h2>

                    <div className={loginStyle.main_content}>
                        <div className={loginStyle.img_holder}>
                            <img className={`img-fluid`} style={{height:'100%'}} src={loginLogo}/>
                        </div>
                        
                        {/* login form */}
                        <LoginForm/>

                    </div>
                </div>
            </div>
        </div>
    )
}