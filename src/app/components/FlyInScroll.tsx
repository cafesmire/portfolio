import {useState, useEffect} from 'react';
import TypeWriter from './TypeWriter';

export default function FlyInScroll(){
    const [scrollAmount, setScrollAmount] = useState(0);


    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrollAmount(scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Define when each div should start moving
    const firstDivThreshold = 400; 
    const secondDivThreshold = 1600;
    const thirdDivThreshold = 2700;

    // First div translation (comes from the left)
    const firstDivTranslate = scrollAmount > firstDivThreshold ? Math.min((scrollAmount - firstDivThreshold) * 0.5, 2) : -100; // Move out from -100vw to 0vw
    const firstDivDisplay = `Strong foundation in clean code principles, such as SOLID, DRY, and KISS`;

    // Second div translation (comes from the right)
    const secondDivTranslate = scrollAmount > secondDivThreshold ? Math.min((scrollAmount - secondDivThreshold) * 0.5, 2) : 100; // Move from 100vw to 0vw
    const secondDivDisplay = `Motivated by presenting optimal work throughout every project`;

    const thirdDivTranslate = scrollAmount > thirdDivThreshold ? Math.min((scrollAmount - thirdDivThreshold) * 0.5, 2) : -100; // Move out from -100vw to 0vw
    const thirdDivDisplay = `Continuously learning and applying solutions to modern problems`
  
    return (
        <div className="relative flex flex-col w-screen h-screen">
            <div className='w-full h-3/5'>
                <div style={{ transform: `translateX(${firstDivTranslate}vw)`}}
                    className="bg-black bg-opacity-85 border-2 border-gray-700 border-opacity-50 h-full mt-96 mr-20 rounded-3xl ease-in-out duration-1000 text-white p-12">
                    <h1 className='text-4xl'>Committed to Clean Code</h1>
                    {firstDivTranslate === 2 && (
                        <p className='text-3xl mt-5'>
                            <TypeWriter message={firstDivDisplay} onComplete={()=>{}}/>
                        </p>
                    )
                    }  
                </div>

                    {/* staggered and dropped box */}
                <div style={{ transform: `translateX(${secondDivTranslate}vw)`}}
                    className="bg-black bg-opacity-85 border-2 border-gray-700 border-opacity-50 h-full mt-96 mr-20 rounded-3xl ease-in-out duration-1000 text-white p-12">
                    <h1 className='flex justify-end text-4xl'>Driven by Precision and Purpose</h1>
                    {secondDivTranslate === 2 && (
                        <p className='flex justify-end text-3xl mt-5'>
                            <TypeWriter message={secondDivDisplay} onComplete={()=>{}}/>
                        </p>
                    )
                    } 
                </div>

                <div style={{ transform: `translateX(${thirdDivTranslate}vw)`}}
                    className="bg-black bg-opacity-85 border-2 border-gray-700 border-opacity-50 h-full mt-96 mr-20 rounded-3xl ease-in-out duration-1000">
                    <div className='text-white p-12 text-4xl'>
                        <h1>Engineering Tomorrow&apos;s Possibilities</h1>
                        {thirdDivTranslate === 2 && (
                            <p className='text-3xl mt-5'>
                                <TypeWriter message={thirdDivDisplay} onComplete={()=>{}}/>
                            </p>
                        )
                        }                     
                    </div>
                </div>
            </div>
        </div>
    );
}