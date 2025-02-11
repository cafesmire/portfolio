
export default function Card({project, cardRotation}) {

  return (
    <div className='absolute top-[calc(50%-160px)] left-[calc(50%-90px)] w-40 h-60 flex flex-col gap-5 bg-zinc-400 p-2 rounded-xl border-1'
        style={{
          transform:`rotateY(${cardRotation}deg) translateZ(500px)`
        }}
    >
      <div>
        <h1>{project.name}</h1>
      </div>
      <div><img className='aspect-square rounded-xl' src={project.thumbnail} alt=""/></div>
    </div>
  );
}
