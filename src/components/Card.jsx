

export default function Card({rotationAmount, name, image}){

    return(
        <div className={`absolute top-50 left-[43%] flex flex-col gap-5 max-w-40 p-2 border-1 rounded-xl text-center bg-zinc-700  ${rotationAmount > 0 ? '-z-10' : 'z-0'}`}
            style={{
                transform:`rotateY(${rotationAmount}deg) translateZ(200px)`,
                transformOrigin:'center center',
            }}
        >
            <h1>{name}</h1>
            <img src={image} alt="" className='rounded-xl'/>
        </div>
    );
}