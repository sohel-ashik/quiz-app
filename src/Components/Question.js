import { useContext, useState } from 'react';
import QuizDataContext from '../Contexts/QuizDataContext';
import questionStyle from '../styles/Quiz.module.css';

function Option({option,oNo,qNo,userAns})
{
    const [click, setClicked] = useState(userAns.get(`q-${qNo}-o-${oNo}`));
    
    const handleClickInOption = ()=>{
        userAns.set(`q-${qNo}-o-${oNo}`, !userAns.get(`q-${qNo}-o-${oNo}`)); 
        setClicked((pre)=>!pre)
    }

    return(
        <div 
            onClick={handleClickInOption}
            className={`form-check ${questionStyle.custom_option}`}>
                <input 
                    className={`form-check-input ${questionStyle.border_box}`} 
                    onChange = {()=>setClicked((pre)=>!pre)}
                    type="checkbox"
                    checked={click}/>
                <label className={`form-check-label  ${questionStyle.custom_lebel}`} >
                    {option}
                </label>
        </div>
    )
}

export default function Question({data, qNo})
{

    const {userAns} = useContext(QuizDataContext);

    const mcq = data.options;
    let arr = []; 
    for(let i=0;i<mcq.length;i++){
        arr.push(<Option key={`${qNo}-${i}`}  option={mcq[i].title} qNo={qNo} oNo={i} userAns={userAns}/>);
    }

    return(
        <div className={questionStyle.main_container}>
            <div className={questionStyle.parent_container}>
                <div className={questionStyle.question}>
                    <h1>{data.title}</h1>
                    <p>Question Can have multiple answer</p>
                </div>
                <hr/>

                <div className={questionStyle.mcq}>
                    {arr}
                </div>
            </div>
        </div>
    )
}