
export default function AboutMe() {
    const fullText = `My name is Adam Fesmire, and I'm currently seeking career opportunities in software engineering, 
    machine learning/artificial intelligence, and data exploration/visualization.

    Originally, I pursued a career in physical therapy and even worked in outpatient care. 
    However, my passion for technology and problem-solving led me to change paths and return to school, 
    where I earned an M.S. in Computer Science. This career shift was fueled by a love for computer games that 
    began in my childhood.

    One of my earliest coding experiences came from playing Diablo 2. As a kid, I was obsessed with trying to find rare 
    items in the game. However, with school and chores taking up my time, I soon realized there had to be another way. 
    When a maphack script surfaced, allowing players to automate tasks within the game, I became fascinated. What started as 
    using the bot quickly evolved into modifying the script myself to complete more quests and gather items more efficiently. 
    Eventually, tinkering with the code became more exciting than playing the game itself.

    Although life took me away from coding for a while, that early spark never left. 
    Now, I'm excited to use my technical skills to solve complex problems and contribute to innovative projects.`;

    return (
        <main className="relative min-h-screen flex flex-col justify-center items-center">
            <div className="flex w-screen h-screen">
                <div className="bg-slate-800 m-20 text-white p-6 w-full h-1/2 rounded-3xl">
                    <h1 className="text-5xl">About Me</h1>
                    <p className="mt-5 text-xl">
                        {fullText}
                    </p>
                </div>
            </div>
        </main>
    );
}
