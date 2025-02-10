import { useState } from 'react';
import Carousel from '../components/Carousel'
import defaultProjects from '../data/defaultProjects';

export default function Projects() {
	const [projects, setProjects] = useState(defaultProjects);

	return (
		<div className="flex-1 flex">
				<Carousel projects={projects} setProjects={setProjects}/>
		</div>
	);
}
