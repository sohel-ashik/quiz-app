import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock,faCheck } from '@fortawesome/free-solid-svg-icons';
import signupStyle from '../styles/Signup.module.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import ErrorFragment from './ErrorFragment';


export default function SignupForm(){

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {signup} = useAuth(); // here context api is used with destracturing method

    async function handleSubmit(e){
        e.preventDefault();

        if(pass !== confirmPass){
            return setError("Password doesn't match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email,pass,name);
            navigate('/');

        } catch (err){
            
            console.log(err);
            setLoading(false);
            setError(err.message);
        }

    }

    return(

        <div className={signupStyle.main_form}>

            <form onSubmit={handleSubmit}>
                <div className={`row mb-3 ${signupStyle.c_input_box} ${signupStyle.height_60}`}>
                    <div className={`col-sm-10 input-group`}>

                        <input 
                            type="text" 
                            required
                            placeholder='Enter name' 
                            className={`form-control`}
                            value = {name}
                            onChange = {(e)=>setName(e.target.value)}
                        />

                        <div className={`input-group-text ${signupStyle.pad_left_20}`}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </div>
                
                <div className={`row mb-3 ${signupStyle.height_60}`}>
                    <div className={`col-sm-10 input-group`}>

                    <input 
                        type="email" 
                        required
                        placeholder='Enter email'
                        className={`form-control`}
                        value = {email}
                        onChange = {(e)=>setEmail(e.target.value)}
                    />

                    <div className={`input-group-text ${signupStyle.pad_left_20}`}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    </div>
                </div>

                <div className={`row mb-3 ${signupStyle.height_60}`}>
                    <div className={`col-sm-10 input-group`}>
                        
                    <input 
                        type="password"
                        required
                        placeholder='Enter password'
                        className={`form-control`}
                        value = {pass}
                        onChange = {(e)=>setPass(e.target.value)}
                    />
                    <div className={`input-group-text ${signupStyle.pad_left_20}`}>
                        <FontAwesomeIcon icon={faLock}/>
                    </div>
                    </div>
                </div>
                
                <div className={`row mb-3 ${signupStyle.height_60}`}>
                    <div className={`col-sm-10 input-group`}>

                    <input 
                        type="password"
                        required
                        placeholder='Confirm password'
                        className={`form-control`}
                        value = {confirmPass}
                        onChange = {(e)=>setConfirmPass(e.target.value)}
                    />
                    <div className={`input-group-text ${signupStyle.pad_left_20}`}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                    </div>
                </div>
                
                <div className={`form-check`} onClick={()=>setAgreeTerms((pre)=>!pre)}>
                    <input className={`form-check-input`} type="checkbox" checked={agreeTerms}/>
                    <label className={`form-check-label mb-2`} >I agree to the Terms & Conditions</label>
                </div>
                
                <div className={`d-flex justify-content-center mt-3`}>
                    <button 
                        className={`btn btn-success`} 
                        type="submit" 
                        disabled = {loading || !agreeTerms}
                        style={{height:'50px', width:'80%'}}>
                            SUBMIT NOW
                    </button>
                </div>

                <div className={`d-flex justify-content-center mt-3`}>
                    <p>
                        Already have an account? <Link className='a' to='/login'>Login</Link> instead.
                    </p>
                </div>

                <div className={`d-flex justify-content-center mt-3`} style={{color: 'red', textAlign: 'center'}}>
                    {error && <ErrorFragment error={error}/>}
                </div>                          
            </form>
        </div>
    )
}