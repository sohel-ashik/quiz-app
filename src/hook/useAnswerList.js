
import { get, getDatabase, orderByChild, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";



export default function useAnswerList(){

    const [loading,setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [answer, setAnswer] = useState({});


    useEffect(()=>{

        async function fetchAnswer(){

            const db = getDatabase();
            const AnswerRef = ref(db,"answers");

            const answerQuery = query(
                AnswerRef,
                orderByKey()
            )


            try{
                setErr(false);
                setLoading(true);

                //fire base request
                const data  = await get(answerQuery);
                setLoading(false);

                if(data.exists()){
                    setAnswer({...data.val()});
                }
        
            } catch{
                setErr(true);
                setLoading(false);
                console.log(err);
            }
        }

        fetchAnswer();

    },[])


    return {
        loading,
        err,
        answer
    }


}