export const LandingPage = () => {
    return (
        <section className="w-screen h-screen z-10 px-10 flex">     
            <div className="flex flex-col gap-8 justify-center">       
                <h1 className="text-9xl text-[#d1aa07] font-extrabold tracking-wider">Elysium</h1>
                <p className="text-xl">Savor the Taste of Culinary Perfection</p>   

                <button className="w-fit py-3 px-9 text-[#010101] bg-[#d1aa07] outline outline-2 outline-offset-2 outline-transparent hover:outline-[#cbb144] hover:bg-[#d1aa07]/90">Book Now!</button>         
            </div>
        </section>
    )
}