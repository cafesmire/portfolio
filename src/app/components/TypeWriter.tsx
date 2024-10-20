'use client';
import { useState, useEffect, useRef } from 'react';

interface TypeProps {
    message: string;
    onComplete: () => void; // Add onComplete prop
}

export default function TypeWriter({ message, onComplete }: TypeProps) {
    const [messageIndex, setMessageIndex] = useState(0);
    const interval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Clear previous interval if it exists
        if (interval.current) {
            clearInterval(interval.current);
        }

        // Set a new interval for typing effect
        interval.current = setInterval(() => { 
            setMessageIndex((prevIndex) => {
                if (prevIndex < message.length) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval.current!);
                    onComplete(); // Call the onComplete function here
                    return prevIndex;
                }
            });
        }, 75);

        // Cleanup on unmount or when message changes
        return () => {
            clearInterval(interval.current!);
        };
    }, [message, onComplete]);

    return (
        <>
            {message.slice(0, messageIndex)}
        </>
    );
}
