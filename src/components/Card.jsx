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
			className="card bg-zinc-600"
			style={{
				transform: `rotateY(${cardRotation}deg) translateZ(500px) rotateY(${flipCard}deg)`,
				transition: 'transform .5s ease-in-out',
			}}
			onMouseEnter={() => handleFlip('details')}
			onMouseLeave={() => handleFlip('project')}
		>
			{!flipped && (
				<div className='flex flex-col gap-5'>
					<div>
						<h1>{project.name}</h1>
					</div>

					<div>
						<img
							className="aspect-square rounded-xl"
							src={project.thumbnail}
							alt=""
						/>
					</div>
				</div>
			)}

			{flipped && (
				<div className="absolute top-0 right-0 flex flex-col  h-full w-full p-2 gap-5 z-10 bg-zinc-800 rounded-2xl"
            style={{
              transform:`scale(-1,1)`,
              transition:'transform .5s ease-in'
            }}
        >
          <div>
            <h1 className='border-b-1'>{project.name}</h1>
          </div>
          <div><textarea className='text-sm' cols={30} rows={12} defaultValue={project.details} readOnly></textarea></div>
        </div>
			)}
		</div>
	);
}
