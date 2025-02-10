import {useState, useEffect} from 'react';

export default function Card({item, rotation, zIndex, isRotating, direction}){
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    if(isRotating && direction){
      setTranslate(direction === 'previous' ? -200 : 200);
      return;
    }
    setTranslate(0);
},[isRotating])
  

  return(
    <div className='absolute top-[15%] left-[calc(50%-180px)] p-5 max-w-60 flex flex-col text-center rounded-xl border-1 bg-amber-700'
      style={{
        transform: `rotateY(${rotation}deg) translateZ(400px) translateX(${translate}px)`,
        transition: 'transform 1s ease-in-out',
        zIndex: `${zIndex}`,
      }}
    >
      <h1>{item.name}</h1>
      <img className='aspect-square' src={item.image} alt=""/>
    </div>
  )
}