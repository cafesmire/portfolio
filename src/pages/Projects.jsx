import { useState } from 'react';
import Carousel from '../components/Carousel';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';

const projectRepo = [
	{ name: 'flappy', image: image1 },
	{ name: 'resume', image: image2 },
	{ name: 'todo', image: image3 },
	{ name: 'memory', image: image4 },
	{ name: 'clone', image: image5 },
];

export default function Projects() {
	const [projects, setProjects] = useState(projectRepo);

	return (
		<div className="flex-1 flex">
			<Carousel projects={projects} setProjects={setProjects}/>
		</div>
	);
}
