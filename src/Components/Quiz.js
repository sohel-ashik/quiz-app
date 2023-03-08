import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import quizStyle from '../styles/Quiz.module.css';
import Nav from './Nav';
import Question from './Question';
import {Link, useLocation} from 'react-router-dom';
import useQuizList from '../hook/useQuizList';
import { useEffect, useState } from 'react';
import QuizDataContext from '../Contexts/QuizDataContext'


const userAns = new Map();

export const errorDiv = (
    <>
        <Nav/>
        <div className={quizStyle.error_parent}>
            <p className={quizStyle.main_div}>
                Something Wrong
            </p>
        </div>
    </>
)

export const loadingDiv = (
    <>
        <Nav/>
        <div className={quizStyle.error_parent}>
            <p className={quizStyle.main_div} style={{color:'black'}}>
                loading......
            </p>
        </div>
    </>
)


export default function Quiz(){ 

    useEffect(()=>{

        //when the component will unmount the map will be cleared
        return(()=>{
            userAns.clear();
        })
    },[])


    const [qNo, setQNo] = useState(0);
    const [end, setEnd] = useState(false);


    const {loading, err, quiz} = useQuizList();
    const location = useLocation();
    const ID = location.state.ID;

    if(loading) return loadingDiv;
    
    else if(err || !quiz[ID] ) return errorDiv;

    const quizQuestions = quiz[ID]['questions']; 

    const handleClickForNext = ()=>
    {
        setQNo(pre=>{
            if(pre+1 === quizQuestions.length - 1)
                setEnd(true);
            return pre+1;
        });
    }

    const handleClickForBack = () =>{
        qNo > 0 && setQNo(pre=>{
            if(end) setEnd(false);
            return pre-1;
        })
    }

    

    return(
        <div>

            {/* navigation */}
            <Nav/>

            {/* Question */}
            <QuizDataContext.Provider value={{userAns}}>
                <Question data = {quizQuestions[qNo]} qNo = {qNo}/>
            </QuizDataContext.Provider>


            <div className={quizStyle.progress_div}>
                <div className={quizStyle.inside}>
                    <button 
                        type="button" 
                        onClick={handleClickForBack}
                        className={`btn btn-outline-dark 
                        ${quizStyle.left_btn}`}>
                        <FontAwesomeIcon className={quizStyle.back_icon} icon={faArrowLeft}/>
                    </button>

                    {/* progress bar */}
                    <div className={quizStyle.p_b_parent}>
                        <div className={`progress ${quizStyle.p_b}`} role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className={`progress-bar bg-success`} style={{width:`${(100*(qNo+1))/(quizQuestions.length)}%`}}></div>
                        </div>
                    </div>
        
                    {end && <Link 
                        to="/result" state={{result:userAns,totalQuestion:quizQuestions.length, questions:quizQuestions, id:ID}}
                        
                        type="button" 
                        className={`btn btn-dark d-flex justify-content-center ${quizStyle.next_b}`}>
                            <p className={`text-white ${quizStyle.n_q}`} style={{fontSize:'15px'}}>Submit</p>
                            <div>
                                <FontAwesomeIcon icon={faArrowRight} className={quizStyle.right_icon}/>
                            </div>
                    </Link>}

                    {!end && <button type="button" onClick={handleClickForNext} className={`btn btn-success d-flex ${quizStyle.next_b}`}>
                        <p className={`text-white ${quizStyle.n_q}`} style={{fontSize:'15px'}}>Next Question</p>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} className={quizStyle.right_icon}/>
                        </div>
                    </button>}

                </div>
            </div>
        </div>
    )
}
