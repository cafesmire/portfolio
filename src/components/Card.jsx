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
				<div>
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
				<div className="absolute top-1.5 right-1.5 p-2 z-10 flex flex-col gap-5 bg-zinc-800 rounded-xl"
            style={{
              transform:`scale(-1,1)`,
              transition:'transform .5s ease-in'
            }}
        >
          <div>
            <h1>{project.name}</h1>
          </div>
          <div><textarea name="details" id="details" cols={30} rows={12} className='text-sm'>{project.details}</textarea></div>
        </div>
			)}
		</div>
	);
}
