
import mainLogo from '../images/logo-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './nav.css';
import './Quiz.css';


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


export default function Quiz()
{
    let arr = [];
    for(let i=0;i<10;i++) arr.push(<Option n={i}/>)
    return(
        <div>
            <nav className='navigation'>
                <div className='nav-left'>
                    <img className="main-logo" src={mainLogo}/>
                    <h3 className='app-name'> Quiz App</h3>
                </div>

                <div className='nav-right'>
                    <FontAwesomeIcon icon={faUser} />
                    <a href='#' className='signup'>Signup</a>
                </div>
            </nav>
        


            <div className='main-container'>
                <div className='parent-container'>
                    <div className='question'>
                        <h1>Pick three of your favorite Star Wars Flims</h1>
                        <p>Question Can have multiple answer</p>
                    </div>
                    <hr/>

                    <div className='mcq'>
                        {arr}
                    </div>
                </div>
            </div>

            
            <div className='progress-div'>
                <div className='inside'>
                    <button type="button" class="btn btn-outline-dark left-btn">
                        <FontAwesomeIcon className='back-icon' icon={faArrowLeft}/>
                    </button>
                    <div className='p-b-parent'>
                        <div class="progress p-b" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{width:'77%'}}>77%</div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-success d-flex next-b">
                        <p className='text-white n-q' style={{fontSize:'15px'}}>Next Question</p>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} className="right-icon"/>
                        </div>
                    </button>

                </div>
            </div>
            
        </div>
    )
}