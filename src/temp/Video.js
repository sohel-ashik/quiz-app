import mainLogo from '../images/logo-bg.png'
import bgLogo from '../images/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './video.css'
import './nav.css'

function B_card()
{
    return(
        <div className="card c-main-card" style={{width: '18rem',}}>
            <div className='inside-videoCard-div'>
                <img src={bgLogo} class="card-img-top"/>
                <div className="card-body pt-4" style={{padding:0}}>
                    <h6 className="card-title">#23 React Hooks Bangla - React useReducer hook Bangla</h6>
                    <div className='d-flex justify-content-between' style={{fontSize:'small'}}>
                        <p className='card-text'>10 Questions</p>
                        <p className='card-text'>Score: Not taken yet</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Video()
{
    const arr = [];
    for(let i=0;i<10;i++)
        arr.push(<B_card/>);

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

            <div className='video-parent'>
                <div className='video-container'>
                    {arr}
                </div>
            </div>
        </div>
    )
}