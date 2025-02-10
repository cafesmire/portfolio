import { useState, useEffect } from 'react';
import CardContext from './CardContext';

export default function Card({ project, rotation, isRotating, direction }) {
	const [translateX, setTranslateX] = useState(0);

	useEffect(() => {
      if(isRotating && direction){
        setTranslateX(direction === 'previous' ? -100 :100);
        return;
      }
      setTimeout(() => {
        setTranslateX(0)
      }, 500);
	}, [isRotating, direction]);

	return (
		<div
			className="card bg-zinc-600 rounded-xl border-1"
			style={{
				transform: `rotateY(${rotation+(translateX/4)}deg) translateZ(500px) translateX(${translateX}px)`,
        transition: isRotating ? 'transform 1s ease-in-out' : 'transform .3s ease-in-out' 
			}}
		>
			<h1>{project.name}</h1>
			<img src={project.thumbnail} alt="" />
		</div>
	);
}
