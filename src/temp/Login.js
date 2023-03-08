import mainLogo from '../images/logo-bg.png'
import loginLogo from '../images/login.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock,faCheck } from '@fortawesome/free-solid-svg-icons';
import './nav.css'
import './Login.css'


export default function Login()
{
    return(
        <div>
            <nav className='navigation'>
                <div className='nav-left'>
                    <img className="main-logo" src={mainLogo}/>
                    <h3 className='app-name'> Quiz App</h3>
                </div>

                <div className='nav-right'>
                    <FontAwesomeIcon className='usericon' icon={faUser}/>
                    <a href='#' className='signup'>Signup</a>
                </div>
            </nav>

            <div className='d-flex justify-content-center'>
                <div className='signup-parent'>
                    <h2 className='fs-2'>
                        <strong>
                            Create an account
                        </strong>
                    </h2>

                    <div className='main-content'>
                        <div className='img-holder'>
                            <img className='img-fluid' style={{height:'100%'}} src={loginLogo}/>
                        </div>

                        <div className='main-form'>
                        <form >
                            <div class="row mb-3 height-60">
                                <div class="col-sm-10 input-group">
                                <input type="email" placeholder='Enter email' class="form-control"/>
                                <div class="input-group-text pad-left-20">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                </div>
                            </div>

                            <div class="row mb-3 height-60">
                                <div class="col-sm-10 input-group">
                                <input type="password" placeholder='Enter password' class="form-control"/>
                                <div class="input-group-text pad-left-20">
                                    <FontAwesomeIcon icon={faLock}/>
                                </div>
                                </div>
                            </div>
                            
                            <div className='d-flex justify-content-center mt-3'>
                                <button className='btn btn-success' style={{height:'50px', width:'80%'}}>LOG IN</button>
                            </div>

                            <div className='d-flex justify-content-center mt-3'>
                                <p>
                                    Don't have an account? <a className='a' href=''>Signup</a> instead.
                                </p>
                            </div>
                                                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}