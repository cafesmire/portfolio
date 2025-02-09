import {useState} from 'react';
import Card from '../components/Card'

const repoProjects = [
	'Flappy',
	'Resume',
	'Todo',
	'Menu',
]

export default function Projects() {
	const [projects, setProjects] = useState(repoProjects);
	const rotationAmount = repoProjects.map((_, idx) => 360/(idx+1));
	console.log(rotationAmount);
	
	return (
		<div className="flex flex-1">
			{projects.length > 0 && 
				<ul className='flex flex-1 items-center justify-evenly'>
					{projects.map((item, idx) => {
						return <Card key={idx} rotationAmount={rotationAmount[idx]}>{item}</Card> 
					})}
				</ul>
			}
		</div>
	);
}
