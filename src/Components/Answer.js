
import resultStyle from '../styles/Result.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck,faCircleXmark} from '@fortawesome/free-solid-svg-icons';




function Option({option, userAnswer, mainAnswer,q,o})
{
    const user = userAnswer.get(`q-${q}-o-${o}`);
    const main = mainAnswer.get(`q-${q}-o-${o}`);

    const cngColor = {
        backgroundColor: 'rgba(32, 29, 29, 0.13)'
    }

    //this logic will create color red and green
    if(main || (user && main))
        cngColor.backgroundColor = 'rgba(0, 255, 34, 0.277)';
    else if(user && !main)
         cngColor.backgroundColor = 'rgba(221, 0, 0, 0.25)';
    
    return(
        <div class={`form-check ${resultStyle.custom_option} `} style={cngColor}>
            <input class={`form-check-input  ${resultStyle.border_box}`} type="checkbox" defaultChecked={user} disabled/>
            <div
                style={{fontWeight: 'bold'}}
                class={`form-check-label  ${resultStyle.custom_lebel} `}>
                {option}
            </div>
        </div>
    )
}

export default function Answer({
                                title,
                                options,
                                correctArray,
                                userAnswer,
                                mainAnswer, n})
    { 
    
    console.log(correctArray)
    let optionArr = [];
    for(let i = 0; i<options.length;i++) 
    {
        optionArr.push(<Option 
            q={n}
            o={i}
            userAnswer={userAnswer}
            mainAnswer={mainAnswer}
            option={options[i].title}/>);
    }

    return(

        <div className={resultStyle.answer_item}>
            <div className={resultStyle.question}>
                <FontAwesomeIcon className={resultStyle.q_icon} icon={faUser}/>
                <h4>{title}</h4>
                {correctArray[n] &&  <FontAwesomeIcon  icon={faCircleCheck} className={resultStyle.right}/>}
                { !correctArray[n] &&<FontAwesomeIcon icon={faCircleXmark} className={resultStyle.wrong}/>}
            </div>
            <div className={resultStyle.mcq_div}>
                {optionArr}
            </div>
        </div>
        
    )
}