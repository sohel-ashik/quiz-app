import { faL } from "@fortawesome/free-solid-svg-icons";
import { get, getDatabase, orderByKey,query,ref } from "firebase/database";
import { useEffect, useState } from "react";


export default function useQuizList(){

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [quiz, setQuiz] = useState({});

    useEffect(()=>{

        async function fetchQuiz(){

            const db = getDatabase();
            const QuizRef = ref(db, "quiz");

            const quizQuery = query(
                QuizRef,
                orderByKey()
            );

            try{
                setErr(false);
                setLoading(true);

                //firebase request
                const data = await get(quizQuery);
                setLoading(false)
                if(data.exists()){
                    setQuiz({...data.val()}) 
                    // [...Object.values(data.val())])
                } else {
                    console.log("Error occured");
                }

            } catch(err){
                setErr(true);
                setLoading(false);
                console.log(err);
            }
        }

        fetchQuiz();

    },[])

    return {
        loading,
        err,
        quiz
    }
}