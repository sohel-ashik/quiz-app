import Nav from "./Nav";
import videoStyle from '../styles/video.module.css';
import SingleCatagoryCard from "./SingleCatagoryCard";
import { useAuth } from "../Contexts/AuthContext";
import Login from "./Login";
import useVideList from "../hook/useVideoList";
import { errorDiv } from "./Quiz";
import { getDatabase, ref, set } from "firebase/database";
import {obj} from '../temp/temp'

export default function Video(){
    const {loading,err, videos} = useVideList()

    ////
    // const currentUser = useAuth();
    // async function submitToFirebase(){
    //     const {uid} = currentUser;

    //     const db = getDatabase();
    //     const resultRef = ref(db, `videos`);

    //     await set(resultRef,obj)

    // }
    // submitToFirebase(); 

    ///

    return(
        <div>
            <Nav/>

            <div className={videoStyle.video_parent}>
                <div className={videoStyle.video_container}>
                    {videos.length > 0 && videos.map((video)=>
                        <SingleCatagoryCard 
                            noq={video.noq} 
                            title={video.title} 
                            youtubeID={video.youtubeID}
                            pictureID = {video.pictureID}
                            />
                        )}
                    {!loading && videos.length === 0 && (
                        <>
                            {errorDiv}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}