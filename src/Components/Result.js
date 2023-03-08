import resultStyle from '../styles/Result.module.css';
import Nav from './Nav';
import success from '../images/success.png';
import Answer from './Answer';
import { useLocation } from 'react-router-dom';
import useAnswerList from '../hook/useAnswerList';
import { errorDiv, loadingDiv } from './Quiz';
import { useEffect } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';


const originalAnswerMap = new Map();
function originalAnsSetter(questions){
    for(let i =0;i<questions.length;i++)
    {
        for(let j=0;j<questions[i].options.length;j++)
        {
            if(questions[i].options[j].correct)
            {
                originalAnswerMap.set(`q-${i}-o-${j}`,true);
            }
        }
    }
}

function resultCounter(user,main,totalQuestion,option){
    const correctArray = [];
    for(let i=0;i<totalQuestion;i++) correctArray.push(true);

    let count = totalQuestion;
    for(let i=0;i<totalQuestion;i++)
    {
        const optionLength = option[i].options.length;
        for(let j = 0;j < optionLength;j++)
        {
            if(main.get(`q-${i}-o-${j}`) && !user.get(`q-${i}-o-${j}`) || !main.get(`q-${i}-o-${j}`) && user.get(`q-${i}-o-${j}`) )
            {
                count--;
                correctArray[i] = false;
                break;
            }
        }
    }

    return {
        count,
        correctArray
    }
}

export default function Result(){

    useEffect(()=>{

        //when the component will unmount the map will be cleared
        return(()=>{
            originalAnswerMap.clear();
        })
    },[])

    const {currentUser} = useAuth();

    const location = useLocation();
    const {result,totalQuestion, questions, id} = location.state;
    
    const {err, laoding, answer} = useAnswerList();



    if(laoding) return loadingDiv;
    else if(err || !answer[id]) return errorDiv;

    const originalAnswers = answer[id]['questions']; 
    originalAnsSetter(originalAnswers);
    
    const CompleteResult = resultCounter(result,originalAnswerMap,originalAnswers.length,originalAnswers);

    async function submitToFirebase(){
        const {uid} = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}/${id}`);

        await set(resultRef,{
                marks: CompleteResult.count,
                answers: Array.from(result.keys())
        })

    }
    
    try{
        submitToFirebase();
    } catch{
        return errorDiv;
    }
    

    const answerCompArray = [];
    for(let i=0;i<questions.length;i++)
        answerCompArray.push(<Answer 
            userAnswer = {result}
            mainAnswer = {originalAnswerMap}
            correctArray = {CompleteResult.correctArray}
            n = {i}
            title={questions[i].title} 
            options={questions[i].options}/>)
   
    

    return(
        <div>
            <div className={resultStyle.holder_div}>

                <Nav/>

                {/* header */}

                <div className={resultStyle.container}>
                    <div className={resultStyle.upper_container}>
                        <div className={resultStyle.score}>
                            <p>Your Score is</p>
                            <p>{CompleteResult.count} out of {totalQuestion}</p>
                        </div>
                        <div className={resultStyle.img_div}>
                            <img src={success}/>
                        </div>
                    </div>

                    <br/>

                    <h1><strong>Question Analysis</strong></h1>
                    <p>You answer {CompleteResult.count} out of {totalQuestion} question correctly.</p>
                    <br/>
                    <div className={resultStyle.answers}>
                        {answerCompArray}
                    </div>
                </div>    
            </div>

            
        </div>
    )
}