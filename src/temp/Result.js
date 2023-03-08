                
import mainLogo from '../images/logo-bg.png';
import success from '../images/success.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './nav.css';
import './Result.css';


function Option(props)
{
    return(
        <div class="form-check custom-option">
            <input class="form-check-input border-box" type="checkbox" value="" id={`check${props.n}`}/>
            <label class="form-check-label  custom-lebel" for={`check${props.n}`}>
                Default checkbox
            </label>
        </div>
    )
}

function Answer(props)
{

    let arr = [];
    for(let i = 0; i<10;i++) 
    {
        let x = i.toString() + props.n.toString();
        arr.push(<Option n={x}/>);
    }

    return(

        <div className='answer-item'>
            <div className='question'>
                <FontAwesomeIcon className='q-icon' icon={faUser}/>
                <h4>Here goes the Question from the server?</h4>
            </div>
            <div className='mcq-div'>
                {arr}
            </div>
        </div>
        
    )
}

export default function Result()
{
    
    return(
        <div className='holder-div'>
            <div>
                <nav className='navigation bg-white'>
                    <div className='nav-left'>
                        <img className="main-logo" src={mainLogo}/>
                        <h3 className='app-name'> Quiz App</h3>
                    </div>

                    <div className='nav-right'>
                        <FontAwesomeIcon icon={faUser} />
                        <a href='#' className='signup'>Signup</a>
                    </div>
                </nav>
            </div>

            <div className='container'>
                <div className='upper-container'>
                    <div className='score'>
                        <p>Your Score is</p>
                        <p>5 out of 10</p>
                    </div>
                    <div className='img-div'>
                        <img src={success}/>
                    </div>
                </div>
                <br/>
                <h1><strong>Question Analysis</strong></h1>
                <p>You answer 5 out of 10 question correctly.</p>
                <br/>
                <div className='answers'>
                    <Answer n={0}/>
                    <Answer n={1}/>
                </div>
            </div>

        </div>
    )
}
