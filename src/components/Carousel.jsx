import { useState } from 'react';
import Card from './Card';

export default function Carousel({ projects, setProjects }) {
	const [isRotating, setIsRotating] = useState(false);
	const [direction, setDirection] = useState(null);
	console.log(isRotating);

	const handleClick = (e) => {
		if (isRotating) return;
		setIsRotating(true);
		if (e.target.className.includes('previous')) {
            setDirection('previous');
			setTimeout(() => {
				setProjects((prev) => {
					const newView = [...prev];
					newView.push(newView.shift());
					return newView;
				});
				setIsRotating(false);
			}, 1000);
		} else if (e.target.className.includes('next')) {
            setDirection('next');
			setTimeout(() => {
				setProjects((prev) => {
					const newView = [...prev];
					newView.unshift(newView.pop());
					return newView;
				});
				setIsRotating(false);
			}, 1000);
		}
	};

	return (
		<div className="carousel">
			<button
				className="previous absolute bg-zinc-500 px-2 py-2 rounded-full left-5"
				onClick={handleClick}
			>
				&lt;
			</button>
			{projects.map((project, idx) => {
				const rotation = (360 / projects.length) * idx;
				return (
					<Card
						key={idx}
						project={project}
						rotation={rotation}
						isRotating={isRotating}
						direction={direction}
					/>
				);
			})}
			<button
				className="next absolute bg-zinc-500 px-2 py-2 rounded-full right-5"
				onClick={handleClick}
			>
				&gt;
			</button>
		</div>
	);
}
