import { useEffect, useState } from "react";
import {get, getDatabase, orderByKey, query, ref} from "firebase/database";


export default function useVideList(){

    const [loading, setLoading ] = useState(true);
    const [err, setError] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(()=>{

        async  function fetchVideos(){
            //database related works
            const db = getDatabase();
            const videosRef = ref(db, "videos"); 
            const videoQuery = query(
                videosRef,
                orderByKey(),
            );

            try {
                setError(false);
                setLoading(true);

                // request firebase the data with get function
                const data = await get(videoQuery);
                setLoading(false);
                if(data.exists()){
                    setVideos((preVideos)=> {
                        return [...preVideos, ...Object.values(data.val())]
                    })
                } else{
                    console.log("Error occured")
                }
                
                
            } catch(err) {
                setLoading(false);
                setError(true);
                console.log(err);
            }
        }

        fetchVideos();

    },[])

    return {
        loading,
        err,
        videos
    }
}