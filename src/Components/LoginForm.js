import loginStyle from '../styles/Login.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock,faCheck, faL } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useAuth} from '../Contexts/AuthContext';
import ErrorFragment from './ErrorFragment';



export default function(){

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState('');
    const Navigate = useNavigate();

    const {login} = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setLoading(true);
            setError('');
            await login(email,pass);
            Navigate('/');

        } catch(err){
            setLoading(false);
            setError(err.message);
            console.log(err.message);
        }
    }

    return(
        <div className={loginStyle.main_form}>
            <form onSubmit={handleSubmit}>
                <div className={`row mb-3 ${loginStyle.height_60}`}>
                    <div className={`col-sm-10 input-group`}>
                        <input 
                            type="email" 
                            placeholder='Enter email' 
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className={`form-control`}/>

                        <div className={`input-group-text ${loginStyle.pad_left_20}`}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                    </div>
                </div>

                <div className={`row mb-3 ${loginStyle.height_60}`}>
                    <div className={`col-sm-10 input-group`}>
                    <input 
                        type="password" 
                        placeholder='Enter password' 
                        value = {pass}
                        onChange = {(e)=>{setPass(e.target.value)}}
                        className={`form-control`}/>
                    <div className={`input-group-text ${loginStyle.pad_left_20}`}>
                        <FontAwesomeIcon icon={faLock}/>
                    </div>
                    </div>
                </div>
                
                <div className={`d-flex justify-content-center mt-3`}>
                    <button 
                        className={`btn btn-success`} 
                        type='submit'
                        disabled = {loading}
                        style={{height:'50px', width:'80%'}}>
                            LOG IN
                        </button>
                </div>

                <div className={`d-flex justify-content-center mt-3`}>
                    <p>
                        Don't have an account? <Link className='a' to='/signup'>Signup</Link> instead.
                    </p>
                </div>                     

                {error && <ErrorFragment error = {error}/>}

            </form>
        </div>
    )
}