import { useState } from 'react';

export default function Card({ project, cardRotation }) {
	const [flipCard, setFlipCard] = useState(0);
	const [flipped, setFlipped] = useState(false);

	const handleFlip = (context) => {
		if (context === 'details') {
			setFlipped(true);
			setFlipCard(180);
			return;
		}
		setFlipped(false);
		setFlipCard(0);
	};

	return (
		<div
			className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] grid grid-rows-[auto 1fr] size-[400px] p-1 rounded-xl border-1 border-zinc-400 bg-zinc-600 origin-center"
			style={{
				transform: `rotateY(${cardRotation}deg) translateZ(500px) rotateY(${flipCard}deg)`,
				transition: 'transform .5s ease-in-out',
			}}
			onMouseEnter={() => handleFlip('details')}
			onMouseLeave={() => handleFlip('project')}
		>
			{!flipped && 
			<div className='grid grid-rows-subgrid row-span-2'>
				<h1>{project.name}</h1>
				<img className="object-fill rounded-xl"
					src={project.thumbnail}
					alt=""
				/>
			</div>
			
			}

			{flipped && (
				<div
					className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-evenly size-full p-1 rounded-xl border-1 border-zinc-400 bg-zinc-600 origin-center"
					style={{
						transform: `scale(-1,1)`,
						transition: 'transform .5s ease-in',
					}}
				>
					<h3 className="border-b-1">{project.name}</h3>
					<textarea
						className="text-sm"
						cols={30}
						rows={12}
						defaultValue={project.details}
						readOnly
					></textarea>
				</div>
			)}
		</div>
	);
}
