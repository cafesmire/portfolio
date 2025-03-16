import {useState} from 'react';
import {menu, home} from '../assets/icons/';


export default function Navigation({handleClick}) {

	return (
		<nav className="flex items-center p-3 bg-gray-700">
			<button className="cursor-pointer" onClick={handleClick}>
				<img src={menu} alt="" className="invert size-5" />
			</button>
			<h1 className='flex-1 text-center'>Navigation Bar</h1>
			<div>
				<div className='flex gap-3'>
					<a href="/">
						<img src={home} alt="" className="invert size-5" />
					</a>
				</div>
			</div>

		</nav>
	);
}
