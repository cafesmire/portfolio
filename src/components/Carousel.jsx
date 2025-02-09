import Card from './Card';

export default function Carousel({ projects, setProjects }) {

    function handleClick(e){
        if(e.target.className.includes('previous')){
            setProjects(prev => {
                const newProject = [...prev];
                newProject.push(newProject.shift());
                return newProject;
            })
        }else{
            setProjects(prev => {
                const newProject = [...prev];
                newProject.unshift(newProject.pop());
                return newProject;
            })
        }
    }

	return (
		<div className="relative flex-1 flex perspective-[3000px] bg-purple-950">
			<button className='previous size-8 bg-zinc-400 rounded-full absolute top-[50%] left-5 z-100' onClick={handleClick}>&lt;</button>
			{projects.map((item, idx) => {
				const rotation = Math.floor((360 / projects.length) * idx);
                const zIndex = (idx > 1 && idx < projects.length-1) ? -idx:idx
				return (
					<Card item={item} key={idx} rotation={rotation} zIndex={zIndex} />
				);
			})}
			<button className='next size-8 bg-zinc-400 rounded-full absolute top-[50%] right-5 z-100' onClick={handleClick}>&gt;</button>
		</div>
	);
}
