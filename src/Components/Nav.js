import mainLogo from '../images/logo-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import navStyle from '../styles/nav.module.css';
import {Link} from  'react-router-dom';

import {useAuth} from '../Contexts/AuthContext';


function AccountWithSignup()
{
    return(
        <div className={navStyle.nav_right}>
            <FontAwesomeIcon className={navStyle.usericon} icon={faUser}/>
            <Link to='/signup' className={navStyle.signup}>Signup</Link>
        </div>
    )
}

function AccountWithLogin()
{
    return(
        <div className={navStyle.nav_right}>
            <FontAwesomeIcon className={navStyle.usericon} icon={faUser}/>
            <Link to='/login' className={navStyle.signup}>Login</Link>
        </div>
    )
}

function AccountWithCurrentUser({user})
{
    const {logout} = useAuth();
    return(
        <div className={navStyle.nav_right}>
            <FontAwesomeIcon className={navStyle.usericon} icon={faUser}/>
            <div style={{marginRight: '8px'}}>{user}</div>
            <Link 
                to='/login' 
                className={`${navStyle.signup} ${navStyle.log_out}`}
                onClick={logout}>
                
                Logout</Link>
        </div>
    )
}

export default function Nav(props)
{
    let Account = <AccountWithSignup/>
    let goTo = '/';
    const {currentUser} = useAuth();

    if(currentUser)
    {
        Account = <AccountWithCurrentUser user={currentUser.displayName}/>
        goTo="/login";
    }
    else if(props.now == 'signup')
    {
        Account = <AccountWithLogin/>
    }

    return(
        <nav className={navStyle.navigation}>
            <Link to={goTo} className={`link ${navStyle.nav_left}`}>

                {/* <img className={navStyle.main_logo} src={mainLogo}/> */}
                <FontAwesomeIcon icon={faFeather} className={navStyle.main_logo}/>
                <h3 className={navStyle.app_name}> Quiz App</h3>
            
            </Link>

            {/* nav right component */}
            {Account}
            
        </nav>
    )
}