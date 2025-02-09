export default function Card({rotationAmount}){
    console.log(rotationAmount)
    return(
        
        <div className={`perspective-far rotate-y-[${rotationAmount}deg] rotate-z-[${rotationAmount}deg] flex flex-col min-h-50 min-w-25 items-center rounded-xl border-2 bg-zinc-500`}>
            <h1>Card</h1>
        </div>
        
    )
}