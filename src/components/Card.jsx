export default function Card({item, rotation, zIndex}){

  return(
    <div className='absolute top-[15%] left-[30%] w-lg flex flex-col p-5 text-center rounded-xl border-1 bg-amber-700'
      style={{
        transform: `rotateY(${rotation}deg) translateZ(600px)`,
        zIndex: `${zIndex}`,
      }}
    >
      <h1>{item.name}</h1>
      <img className='aspect-square' src={item.image} alt=""/>
    </div>
  )
}