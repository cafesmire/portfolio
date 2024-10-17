'use client';
import {useState, useEffect, useRef} from 'react';

interface TypeProps{
    message:string;
}

export default function TypeWriter({message}:TypeProps){
    const [messageIndex, setMessageIndex] = useState(0);
    const interval = useRef<NodeJS.Timeout|null>(null);

    useEffect(() => {
        interval.current = setInterval(() => { 
            setMessageIndex((prevIndex) => {
                if(prevIndex < message.length){
                    return prevIndex+1;
                }else{
                    clearInterval(interval.current!);
                    return prevIndex;
                }
            });
         }, 75)
        return () => {
            clearInterval(interval.current!);
        }
    }, [message]);
    return(
        <>
            {message.slice(0, messageIndex)}
        </>
    );
}