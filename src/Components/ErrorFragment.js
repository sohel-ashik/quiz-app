import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {useEffect,useState} from 'react';


export default function ErrorFragment({error})
{
    const msg = (
        <div 
            style={{color: 'red', fontWeight:'bold'}}
            className={`d-flex justify-content-center mt-3`}>
                {error}
            </div>
    )

    const [fragment,setFragment] = useState(msg);

    useEffect(()=>{
        setTimeout(() => {
            setFragment(null);
        }, 3000);
    },[])

    return fragment;      
}