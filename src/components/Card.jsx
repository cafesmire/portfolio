import { useState, useContext } from 'react';
import ProjectContext from '../context/ProjectContext';

export default function Card({ idx, project, cardRotation }) {
	const [flipCard, setFlipCard] = useState(0);
	const [flipped, setFlipped] = useState(false);
	const {activeCard} = useContext(ProjectContext)

	const handleFlip = (context) => {
		if (context === 'details' && idx === activeCard) {
			setFlipped(true);
			setFlipCard(180);
			return;
		}
		setFlipped(false);
		setFlipCard(0);
	};

	return (
<div
	className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-xl border border-zinc-400 bg-zinc-600 origin-center"
	style={{
		transform: `rotateY(${cardRotation}deg) translateZ(500px) rotateY(${flipCard}deg)`,
		transition: 'transform .5s ease-in-out',
	}}
	onMouseEnter={() => handleFlip('details')}
	onMouseLeave={() => handleFlip('project')}
>
	{!flipped && (
		<div className="grid grid-rows-[auto_auto] justify-items-center items-center p-5 gap-5 w-[300px] h-[400px]">
			<h1>{project.name}</h1>
			<img
				className="aspect-square rounded-xl"
				src={project.thumbnail}
				alt=""
			/>
		</div>
	)}

			{flipped && (
				<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-xl border border-zinc-400 bg-zinc-600 origin-center"
					style={{
						transform: `scale(-1,1)`,
						transition: 'transform .5s ease-in',
						backfaceVisibility:'hidden'
					}}
				>
					<div className='grid grid-rows-[auto_auto] justify-items-center items-center p-5 gap-5 w-[300px] h-[400px]'>
						<h3 className="border-b-1">{project.name}</h3>
						<textarea
							className='text-[1.5rem] bg-black size-full text-justify p-5 rounded-xl border-1 border-zinc-400'
							cols={30}
							rows={12}
							defaultValue={project.details}
							readOnly
						></textarea>
					</div>
				</div>
			)}
		</div>
	);
}
