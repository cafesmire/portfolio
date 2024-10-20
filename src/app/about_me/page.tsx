'use client';
import {useState} from 'react';
import TypeWriter from "../components/TypeWriter";

export default function AboutMe() {
    const[skip, setSkip] = useState(false);
    const paragraph: string = 
`My name is Adam Fesmire, and I'm currently seeking career opportunities in software engineering, machine learning/artificial intelligence, and/or data exploration/visualization.

Originally, I pursued a career in physical therapy and even worked in outpatient care. However, my passion for technology and problem-solving led me to change paths and return to school, where I earned an M.S. in Computer Science. This career shift was fueled by a love for computer games that began in my childhood.
                    
One of my earliest coding experiences came from playing Diablo 2. As a kid, I was obsessed with trying to find rare items in the game. However, with school and chores taking up my time, I soon realized there had to be another way. When a maphack script surfaced, allowing players to automate tasks within the game, I became fascinated. What started as using the bot quickly evolved into modifying the script myself to complete more quests and gather items more efficiently. Eventually, tinkering with the code became more exciting than playing the game itself.

Although life took me away from coding for a while, that early spark never left. Now, I'm excited to use my technical skills to solve complex problems and contribute to innovative projects.`


    return (
        <div className="relative flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col min-h-[65vh] w-11/12 bg-zinc-950 bg-opacity-85 border-2 text-slate-200 border-slate-500 rounded-xl p-6">
                <h1 className="w-1/6  text-5xl border-b-2 border-slate-500">
                    About Me
                </h1>
                <pre className='mt-3 text-2xl whitespace-pre-wrap'>
                    {!skip ?(
                        <TypeWriter message={paragraph}/>
                    ):(
                        paragraph
                    )}
                </pre>
                
                <div className="absolute bottom-16 right-10 flex items-center gap-4">
                    <button
                        className="px-4 py-2 text-xl rounded-full bg-zinc-700 hover:bg-zinc-600 
                            focus:outline-none focus:ring-2 focus:ring-slate-500"
                        onClick={() => setSkip(true)}
                    >
                        Skip Animation
                    </button>
                </div>
            </div>
        </div>

    );
}
