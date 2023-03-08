import cardStyle from '../styles/video.module.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';

export default function SingleCatagoryCard({noq,title,youtubeID,pictureID})
{
    const {currentUser} = useAuth();
    
    let goTo = '';
    const [score, setScore] = useState('Not taken yet');

    if(!currentUser) goTo = "/login";
    else if(noq>0) goTo = `/quiz/${youtubeID}`;

    const handleClick = () =>{
        if(noq <= 0) alert("No Quiz here"); 
    }

    async function preQuizDataFetch()
    {
        const {uid} = currentUser;
        const db = getDatabase();
        const scoreRef = ref(db, `result/${uid}/${youtubeID}`);

        const scoreQuery = query(
            scoreRef,
            orderByKey()
        )

        const data = await get(scoreQuery);
        if(data.exists())
        {
            const tempData = data.val();
            setScore(tempData.marks);
        }
    }
    preQuizDataFetch();
    

    return(
        <Link to={goTo} state={{ID:youtubeID}} onClick={handleClick} className={`card ${cardStyle.c_main_card} link`} >
            <div className={cardStyle.inside_videoCard_div}>

                <img src={`https://img.youtube.com/vi/${pictureID}/maxresdefault.jpg`} class={`card-img-top`}/>
                <div className={`card-body pt-4`} style={{padding:0}}>
                    <h6 className={`card-title`}>{title}</h6>
                    <div className={`d-flex justify-content-between`} style={{fontSize:'small'}}>
                        <p className={`card-text`}>{noq} Questions</p>
                        <p className={`card-text`}>Score: {score}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}