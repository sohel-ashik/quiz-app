import mainLogo from '../images/logo-bg.png'
import signUpLogo from '../images/signup.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock,faCheck } from '@fortawesome/free-solid-svg-icons';
import './nav.css'
import './Signup.css'


export default function Signup()
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
                            <img className='img-fluid' style={{height:'100%'}} src={signUpLogo}/>
                        </div>

                        <div className='main-form'>
                        <form >
                            <div class="row mb-3 c-input-box height-60">
                                <div class="col-sm-10 input-group">
                                    <input type="email" placeholder='Enter name' class="form-control"/>
                                    <div class="input-group-text pad-left-20">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                </div>
                            </div>
                            
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
                            
                            <div class="row mb-3 height-60">
                                <div class="col-sm-10 input-group">
                                <input type="password" placeholder='Confirm password' class="form-control"/>
                                <div class="input-group-text pad-left-20 ">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                                </div>
                            </div>
                            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="yes" id="agreeCheck"/>
                                <label class="form-check-label mb-2" for="agreeCheck">I agree to the Terms & Conditions</label>
                            </div>
                            
                            <div className='d-flex justify-content-center mt-3'>
                                <button className='btn btn-success' style={{height:'50px', width:'80%'}}>SUBMIT NOW</button>
                            </div>

                            <div className='d-flex justify-content-center mt-3'>
                                <p>
                                    Already have an account? <a className='a' href=''>Login</a> instead.
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