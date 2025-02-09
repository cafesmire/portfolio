export default function Card({item}){

  return(
    <div className='absolute top-[25%] left-[33%] w-[33%] h-[50%] flex flex-col p-5 text-center rounded-xl border-1 bg-amber-700'>
      <h1>{item.name}</h1>
      <img src={item.image} alt=""/>
    </div>
  )
}